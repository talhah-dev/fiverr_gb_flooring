param(
    [string]$Root = (Split-Path -Parent $PSScriptRoot)
)

$sharedHeadPath = Join-Path $PSScriptRoot "shared-head.html"
$routesPath = Join-Path $PSScriptRoot "head-routes.json"
$baseDomain = "https://industrialfloorcontractors.co.uk"

if (-not (Test-Path $sharedHeadPath)) {
    throw "Shared head template not found: $sharedHeadPath"
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$utf8 = [System.Text.Encoding]::UTF8
$cp1252 = [System.Text.Encoding]::GetEncoding(1252)

if (-not (Test-Path $routesPath)) {
    throw "Head routes file not found: $routesPath"
}

$sharedHeadRaw = [System.IO.File]::ReadAllText($sharedHeadPath, $utf8)
$routesObject = Get-Content $routesPath -Raw | ConvertFrom-Json
$routes = @{}
foreach ($property in $routesObject.PSObject.Properties) {
    $routes[$property.Name] = @{
        canonicalPath = $property.Value.canonicalPath
        ogPath = $property.Value.ogPath
    }
}
$files = Get-ChildItem -Path $Root -Recurse -Filter *.html -File | Where-Object { $_.Length -gt 0 }

$updatedFiles = @()
$skippedFiles = @()

function Convert-ToHtmlAttribute([string]$Value) {
    if ($null -eq $Value) {
        return ""
    }

    return $Value.Replace("&", "&amp;").Replace('"', "&quot;").Replace("<", "&lt;").Replace(">", "&gt;")
}

function Repair-Mojibake([string]$Value) {
    if ($null -eq $Value) {
        return $Value
    }

    if ($Value.Contains([char]0x00C2) -or $Value.Contains([char]0x00C3) -or $Value.Contains([char]0x00E2)) {
        return $utf8.GetString($cp1252.GetBytes($Value))
    }

    return $Value
}

foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($Root.Length).TrimStart('\').Replace('\', '/')

    if (-not $routes.ContainsKey($relativePath)) {
        $skippedFiles += $file.FullName
        continue
    }

    $content = [System.IO.File]::ReadAllText($file.FullName, $utf8)
    $content = Repair-Mojibake $content

    if ([string]::IsNullOrWhiteSpace($content) -or $content -notmatch '<head>') {
        $skippedFiles += $file.FullName
        continue
    }

    $newline = if ($content.Contains("`r`n")) { "`r`n" } else { "`n" }
    $route = $routes[$relativePath]

    $titleMatch = [regex]::Match($content, '(?is)<title>(.*?)</title>')
    $descriptionMatch = [regex]::Match($content, '(?is)<meta name="description"\s*content="(.*?)"\s*/>')
    $headEndIndex = $content.IndexOf("</head>")

    if (-not $titleMatch.Success -or -not $descriptionMatch.Success -or $headEndIndex -lt 0) {
        $skippedFiles += $file.FullName
        continue
    }

    $titleText = $titleMatch.Groups[1].Value.Trim()
    $descriptionText = $descriptionMatch.Groups[1].Value.Trim()
    $escapedTitle = Convert-ToHtmlAttribute $titleText
    $canonicalUrl = "$baseDomain$($route.canonicalPath)"
    $ogUrl = "$baseDomain$($route.ogPath)"

    $pageMeta = @"
<!-- PAGE_HEAD_START -->
    <link rel="canonical" href="$canonicalUrl" />

    <meta property="og:title" content="$escapedTitle" />
    <meta property="og:description" content="$descriptionText" />
    <meta property="og:url" content="$ogUrl" />

    <meta name="twitter:title" content="$escapedTitle" />
    <meta name="twitter:description" content="$descriptionText" />
<!-- PAGE_HEAD_END -->
"@

    $pageMeta = (($pageMeta -replace "`r?`n", $newline).TrimEnd("`r", "`n")) + $newline
    $sharedHead = (($sharedHeadRaw -replace "`r?`n", $newline).TrimEnd("`r", "`n")) + $newline

    $prefix = $content.Substring(0, $descriptionMatch.Index + $descriptionMatch.Length).TrimEnd("`r", "`n")
    $suffix = $content.Substring($headEndIndex)

    $nextContent = $prefix + $newline + $newline + $pageMeta + $sharedHead + $suffix

    if ($nextContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $nextContent, $utf8NoBom)
        $updatedFiles += $file.FullName
    }
}

Write-Output ("Updated {0} file(s)." -f $updatedFiles.Count)
foreach ($updated in $updatedFiles) {
    Write-Output ("UPDATED {0}" -f $updated)
}

if ($skippedFiles.Count -gt 0) {
    Write-Output ("Skipped {0} file(s)." -f $skippedFiles.Count)
    foreach ($skipped in $skippedFiles) {
        Write-Output ("SKIPPED {0}" -f $skipped)
    }
}
