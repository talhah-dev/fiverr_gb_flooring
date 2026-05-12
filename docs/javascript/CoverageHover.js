const coverageTitle = document.querySelector("[data-coverage-title]");
const coverageText = document.querySelector("[data-coverage-text]");
const coverageRegionButtons = Array.from(document.querySelectorAll("[data-region-key]"));

if (coverageTitle && coverageText && coverageRegionButtons.length) {
  const defaultCoverage = {
    title: "Coverage",
    text: "Regional service planning across key industrial, warehousing and commercial corridors.",
  };

  const regionCopy = {
    "north-west": {
      title: "North West",
      text: "Coverage support across major manufacturing, logistics and commercial locations throughout the North West.",
    },
    "north-east": {
      title: "North East",
      text: "Regional service planning for industrial and commercial flooring projects across the North East.",
    },
    yorkshire: {
      title: "Yorkshire",
      text: "Support across Yorkshire for warehousing, factory and commercial floor repair and renovation works.",
    },
    wales: {
      title: "Wales",
      text: "Coverage planning for concrete flooring upgrades and repair projects across Welsh commercial and industrial sites.",
    },
    "west-midlands": {
      title: "West Midlands",
      text: "Regional flooring support across key West Midlands warehouse, production and commercial corridors.",
    },
    "east-midlands": {
      title: "East Midlands",
      text: "Coverage for industrial, logistics and warehouse flooring requirements throughout the East Midlands.",
    },
    "east-anglia": {
      title: "East Anglia",
      text: "Planned support for commercial and industrial flooring projects across East Anglia and its logistics routes.",
    },
    "south-east": {
      title: "South East",
      text: "Coverage across the South East for high-traffic commercial, industrial and warehousing environments.",
    },
    south: {
      title: "South",
      text: "Regional service planning for flooring repairs, coatings and renovation works across the South.",
    },
  };

  const setCoverage = (copy) => {
    coverageTitle.textContent = copy.title;
    coverageText.textContent = copy.text;
  };

  const resetCoverage = () => setCoverage(defaultCoverage);

  coverageRegionButtons.forEach((button) => {
    const key = button.dataset.regionKey;
    const copy = regionCopy[key];
    if (!copy) return;

    button.addEventListener("mouseenter", () => setCoverage(copy));
    button.addEventListener("focus", () => setCoverage(copy));
    button.addEventListener("mouseleave", resetCoverage);
    button.addEventListener("blur", resetCoverage);
  });
}
