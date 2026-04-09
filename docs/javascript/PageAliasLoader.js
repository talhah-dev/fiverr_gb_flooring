(() => {
  const sourcePath = document.documentElement.getAttribute("data-page-alias-source");
  if (!sourcePath) return;

  const aliasContactDataset = Array.from(document.documentElement.attributes)
    .filter((attr) => attr.name.startsWith("data-contact-"))
    .map((attr) => ({
      name: attr.name,
      value: attr.value,
    }));

  const aliasContactTemplate = document.body.querySelector(
    "template[data-contact-cta-details], template[data-contact-form-details]"
  );

  const sourceUrl = new URL(sourcePath, window.location.origin);
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const sourceCanonicalPath = sourceUrl.pathname.replace(/\/+$/, "") || "/";

  if (currentPath === sourceCanonicalPath) return;

  const loadSourcePage = async () => {
    const response = await fetch(sourceUrl.toString(), { credentials: "same-origin" });
    if (!response.ok) {
      throw new Error(`Failed to load alias source: ${response.status}`);
    }

    const html = await response.text();
    const parsed = new DOMParser().parseFromString(html, "text/html");
    const sourceBody = parsed.body;
    if (!sourceBody) {
      throw new Error("Alias source did not include a <body>.");
    }

    document.body.innerHTML = sourceBody.innerHTML;

    const importedContact = document.body.querySelector("#contact");
    if (importedContact) {
      aliasContactDataset.forEach(({ name, value }) => {
        importedContact.setAttribute(name, value);
      });

      if (aliasContactTemplate) {
        importedContact.appendChild(aliasContactTemplate.cloneNode(true));
      }
    }

    // Re-run scripts from the imported body in order.
    const scripts = Array.from(document.body.querySelectorAll("script"));
    const scriptDefs = scripts.map((scriptEl) => ({
      src: scriptEl.getAttribute("src"),
      attrs: Array.from(scriptEl.attributes).map((attr) => ({
        name: attr.name,
        value: attr.value,
      })),
      text: scriptEl.textContent || "",
    }));

    scripts.forEach((scriptEl) => scriptEl.remove());

    const appendScript = (def) =>
      new Promise((resolve, reject) => {
        const next = document.createElement("script");
        def.attrs.forEach(({ name, value }) => {
          if (name !== "src") next.setAttribute(name, value);
        });

        if (def.src) {
          next.src = def.src;
          next.async = false;
          next.onload = () => resolve();
          next.onerror = () => reject(new Error(`Failed loading script: ${def.src}`));
          document.body.appendChild(next);
          return;
        }

        next.textContent = def.text;
        document.body.appendChild(next);
        resolve();
      });

    for (const def of scriptDefs) {
      await appendScript(def);
    }
  };

  loadSourcePage().catch((error) => {
    console.error(error);
    window.location.href = sourceUrl.toString();
  });
})();
