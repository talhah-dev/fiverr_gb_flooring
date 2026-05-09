const servicePartials = document.querySelectorAll("[data-service-partial]");

if (servicePartials.length) {
  const escapeHtml = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const renderShowcaseCard = (card) => `
    <article class="overflow-hidden rounded-[1.8rem] bg-white border border-slate-200/80 transition hover:-translate-y-1">
      <div class="relative h-[17.5rem] w-full overflow-hidden sm:h-[19rem]">
        <img src="${escapeHtml(card.image)}"
          width="1170" height="780" alt="${escapeHtml(card.alt)}"
          class="absolute inset-0 h-full w-full object-cover" />
        ${card.detailKey ? `
          <button
            type="button"
            class="serviceDetailTrigger absolute left-4 top-4 inline-flex items-center justify-center rounded-lg border border-slate-400 bg-white/95 px-5 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition hover:bg-white"
            data-detail-key="${escapeHtml(card.detailKey)}"
            aria-label="Show more about ${escapeHtml(card.title)}"
          >
            More..
          </button>
        ` : ""}
      </div>
      <div class="border-t border-slate-200/70 bg-white px-4 py-4 sm:px-5 sm:py-5">
        <div class="flex items-start gap-3">
          <span class="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] sm:h-11 sm:w-11">
            <i class="${escapeHtml(card.icon)}"></i>
          </span>
          <div>
            <p class="text-[1.08rem] font-semibold leading-tight text-slate-900 sm:text-[1.18rem]">${escapeHtml(card.title)}</p>
            <p class="mt-1 text-sm leading-relaxed text-slate-600 sm:text-[0.96rem]">${escapeHtml(card.text)}</p>
          </div>
        </div>
      </div>
    </article>
  `;

  const renderServiceDetailPanel = (config) => {
    if (!config.serviceDetails) return "";

    return `
      <div
        class="serviceDetailPopup pointer-events-none fixed left-0 top-0 z-[90] hidden max-w-[min(92vw,620px)] rounded-[1.8rem] bg-[#575757] p-6 text-white opacity-0 shadow-2xl transition-all duration-300"
        data-service-detail-panel
        data-default-detail="${escapeHtml(config.defaultDetailKey || "")}"
        aria-hidden="true"
      >
        <div class="max-h-[min(78vh,760px)] overflow-y-auto pr-2">
          ${Object.entries(config.serviceDetails).map(([key, detail]) => `
            <article class="serviceDetailItem ${key === config.defaultDetailKey ? "" : "hidden"}" data-service-detail="${escapeHtml(key)}">
              <h3 class="text-[2rem] font-semibold leading-tight">${escapeHtml(detail.title)}</h3>
              <p class="mt-6 text-base leading-relaxed text-white/90">${escapeHtml(detail.intro)}</p>

              <ul class="mt-6 space-y-2 text-base leading-relaxed text-white/90">
                ${detail.risks.map((item) => `<li class="flex gap-3"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"></span><span>${escapeHtml(item)}</span></li>`).join("")}
              </ul>

              <p class="mt-8 text-[1.4rem] font-medium leading-tight text-white/95">${escapeHtml(detail.businessTitle)}</p>
              <ul class="mt-5 space-y-2 text-base leading-relaxed text-white/90">
                ${detail.businessRisks.map((item) => `<li class="flex gap-3"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"></span><span>${escapeHtml(item)}</span></li>`).join("")}
              </ul>

              <p class="mt-8 text-[1.4rem] font-medium leading-tight text-white/95">${escapeHtml(detail.servicesTitle)}</p>
              <div class="mt-6 space-y-6">
                ${detail.serviceGroups.map((group) => `
                  <div>
                    <p class="text-[1.35rem] font-semibold leading-tight text-white">${escapeHtml(group.title)}</p>
                    <ul class="mt-3 space-y-2 text-lg leading-relaxed text-white">
                      ${group.items.map((item) => `<li class="flex gap-3"><span class="shrink-0 text-white">✔</span><span>${escapeHtml(item)}</span></li>`).join("")}
                    </ul>
                  </div>
                `).join("")}
              </div>

              <div class="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-lg font-medium text-white">
                ${detail.features.map((item) => `<span class="inline-flex items-center gap-2"><span>☑</span><span>${escapeHtml(item)}</span></span>`).join("")}
              </div>

              <a href="${escapeHtml(detail.ctaHref)}" class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2c4a80] px-5 py-3 text-lg font-semibold text-white transition hover:brightness-95">
                ${escapeHtml(detail.ctaLabel)}
              </a>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  };

  const renderFeatureCard = (card) => `
    <div class="${card.fullWidth ? "h-full sm:col-span-2" : "h-full"} rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div class="flex items-start gap-3">
        <span class="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
          <i class="${escapeHtml(card.icon)}"></i>
        </span>
        <div>
          <p class="font-semibold text-slate-900">${escapeHtml(card.title)}</p>
          <p class="mt-1 text-sm leading-relaxed text-slate-600">${escapeHtml(card.text)}</p>
        </div>
      </div>
    </div>
  `;

  const renderShowcase = (config) => `
    <section ${config.sectionId ? `id="${escapeHtml(config.sectionId)}"` : ""} class="relative overflow-hidden bg-white pb-2 pt-2 sm:pb-4 sm:pt-4">
      <div class="absolute inset-0 -z-10">
        <div class="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[#2c4a80]/10 blur-3xl"></div>
        <div class="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[#2c4a80]/6 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div class="lg:col-span-4">
            <div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[#2c4a80] shadow-sm">
              <i class="${escapeHtml(config.eyebrowIcon)}"></i>
              <span class="text-sm font-semibold tracking-wide">${escapeHtml(config.eyebrowText)}</span>
            </div>

            <h2 class="mt-4 max-w-md text-3xl font-semibold leading-tight text-slate-900 sm:text-[2.35rem]">${escapeHtml(config.title)}</h2>
            <p class="mt-4 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">${escapeHtml(config.intro)}</p>

            <div class="mt-6 space-y-4">
              <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div class="flex items-start gap-3">
                  <span class="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80]">
                    <i class="${escapeHtml(config.calloutOne.icon)}"></i>
                  </span>
                  <div>
                    <p class="font-semibold text-slate-900">${escapeHtml(config.calloutOne.title)}</p>
                    <p class="mt-1 text-sm leading-relaxed text-slate-600">${escapeHtml(config.calloutOne.text)}</p>
                  </div>
                </div>
              </div>
              <div class="rounded-2xl border border-[#2c4a80]/15 bg-[#2c4a80]/5 p-4">
                <div class="flex items-start gap-3">
                  <span class="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#2c4a80] shadow-sm">
                    <i class="${escapeHtml(config.calloutTwo.icon)}"></i>
                  </span>
                  <div>
                    <p class="font-semibold text-slate-900">${escapeHtml(config.calloutTwo.title)}</p>
                    <p class="mt-1 text-sm leading-relaxed text-slate-600">${escapeHtml(config.calloutTwo.text)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap items-center gap-3">
              <a href="${escapeHtml(config.cta.href)}" class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2c4a80] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2c4a80]/20 transition hover:-translate-y-0.5 hover:bg-[#244070] focus:outline-none focus:ring-2 focus:ring-[#2c4a80]/35 sm:w-auto">
                <i class="${escapeHtml(config.cta.icon)}"></i>
                ${escapeHtml(config.cta.label)}
              </a>
            </div>
          </div>

          <div class="lg:col-span-8">
            <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
              <div class="relative h-[16rem] w-full sm:h-[19rem] md:h-[24rem]">
                <img src="${escapeHtml(config.hero.image)}" width="1170" height="780" alt="${escapeHtml(config.hero.alt)}" class="absolute inset-0 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/10 to-transparent"></div>

                <div class="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/12 px-3 py-2 text-white shadow-lg shadow-black/10 backdrop-blur-sm">
                  <i class="${escapeHtml(config.hero.badgeIcon)}"></i>
                  <span class="text-xs font-semibold">${escapeHtml(config.hero.badgeText)}</span>
                </div>
              </div>

              <div class="border-t border-slate-200 bg-white px-5 py-5 sm:px-8 sm:py-6 lg:px-10">
                <p class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-500 sm:text-[0.75rem]">${escapeHtml(config.hero.kicker)}</p>
                <p class="mt-2 max-w-4xl text-[1.5rem] font-semibold leading-tight text-slate-900 sm:text-[2rem] lg:text-[2.35rem]">${escapeHtml(config.hero.title)}</p>
                <p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">${escapeHtml(config.hero.text)}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="${escapeHtml(config.cardsSectionId || "")}" class="mt-8 border-t border-slate-200/80 pt-8">
          <div class="relative">
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              ${config.cards.map(renderShowcaseCard).join("")}
            </div>
            ${renderServiceDetailPanel(config)}
          </div>
        </div>
      </div>
    </section>
  `;

  const renderFeature = (config) => `
    <section class="relative pt-10 bg-white pb-12 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-12 ${escapeHtml(config.alignClass || "lg:items-start")}">
          <div class="lg:col-span-5">
            <div class="flex items-start gap-3">
              <span class="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
                <i class="${escapeHtml(config.questionIcon)}"></i>
              </span>
              <div>
                <h2 class="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">${escapeHtml(config.title)}</h2>
                <p class="mt-3 text-base leading-relaxed text-slate-600">${escapeHtml(config.intro)}</p>
              </div>
            </div>

            <div class="mt-6 rounded-3xl border border-[#2c4a80]/15 bg-[#2c4a80]/5 p-6">
              <div class="flex items-start gap-3 md:flex-row flex-col">
                <span class="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-[#2c4a80] shadow-sm">
                  <i class="${escapeHtml(config.callout.icon)}"></i>
                </span>
                <div>
                  <p class="text-lg font-semibold text-slate-900">${escapeHtml(config.callout.title)}</p>
                  <p class="mt-2 text-sm leading-relaxed text-slate-600">${escapeHtml(config.callout.text)}</p>
                </div>
              </div>
            </div>

            <div class="mt-7 flex flex-wrap items-center gap-3">
              <a href="${escapeHtml(config.cta.href)}" class="inline-flex md:w-auto w-full items-center justify-center gap-2 rounded-xl bg-[#2c4a80] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2c4a80]/20 transition hover:-translate-y-0.5 hover:bg-[#244070] focus:outline-none focus:ring-2 focus:ring-[#2c4a80]/35">
                ${escapeHtml(config.cta.label)}
                <i class="${escapeHtml(config.cta.icon)} text-xs"></i>
              </a>
            </div>
          </div>

          <aside class="lg:col-span-7">
            <div class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <div class="relative ${escapeHtml(config.hero.heightClass || "h-96")} w-full">
                <img src="${escapeHtml(config.hero.image)}" width="1170" height="780" alt="${escapeHtml(config.hero.alt)}" class="absolute inset-0 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>

                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <p class="text-xs font-semibold tracking-widest text-white/80">${escapeHtml(config.hero.kicker)}</p>
                  <p class="mt-2 text-xl font-semibold text-white">${escapeHtml(config.hero.title)}</p>
                  <p class="mt-2 text-sm text-white/85">${escapeHtml(config.hero.text)}</p>
                </div>

                <div class="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-white backdrop-blur">
                  <i class="${escapeHtml(config.hero.badgeIcon)}"></i>
                  <span class="text-xs font-semibold">${escapeHtml(config.hero.badgeText)}</span>
                </div>
              </div>

              <div class="p-6">
                <div class="grid gap-4 sm:grid-cols-2">
                  ${config.cards.map(renderFeatureCard).join("")}
                </div>
              </div>

              <div class="h-1 w-full bg-gradient-to-r from-[#2c4a80] via-[#2c4a80]/60 to-transparent"></div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;

  const sharedHelpText = "Since 2013 we have supported UK businesses across logistics, manufacturing, food & drink and pharmaceuticals.";

  const configs = {
    home: {
      variant: "showcase",
      sectionId: "ourservices",
      cardsSectionId: "service-showcase-cards",
      eyebrowIcon: "fa-solid fa-layer-group",
      eyebrowText: "Our Services",
      title: "Our Comprehensive Flooring Services",
      intro: "We provide a comprehensive range of concrete flooring repair & renovation solutions to bring your site up to standard",
      calloutOne: {
        icon: "fa-solid fa-circle-question",
        title: "Need flooring repair or renovation?",
        text: "Concrete floor defects can be unsafe, deteriorate rapidly & risk affecting day-to-day business operations. "
      },
      calloutTwo: {
        icon: "fa-solid fa-handshake",
        title: "GB Flooring Group are here to help",
        text: "We help commercial and industrial sites improve floor safety and appearance."
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "/docs/assets/images/services/greyfloor-1920-1080.webp",
        alt: "Industrial warehouse floor aisle with markings",
        badgeIcon: "fa-solid fa-layer-group",
        badgeText: "Professional repairs & finishes",
        kicker: "GB FLOORING GROUP",
        title: "Our Floor Repair & Renovation Services",
        text: "Our industrial & commercial concrete floor services include: Repairs to defects in concrete slabs (hole, crack & expansion joints etc.), Floor grinding/ cleaning/levelling & Renovation of floor surfaces via resin coatings, screeds & paints - for businesses across the UK"
      },
      cards: [
        { image: "/docs/assets/images/services/joint-arris-damage-600-450.webp", alt: "Floor joint repair services", icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Filling and stabilisation of damaged expansion & arris floor joints", detailKey: "floor-joint-repairs" },
        { image: "/docs/assets/images/services/surface-damage-600-450.webp", alt: "Floor surface repair services", icon: "fa-solid fa-triangle-exclamation", title: "Floor surface repairs", text: "Concrete Crack and pothole repairs. bolts", detailKey: "floor-surface-repairs" },
        { image: "/docs/assets/images/services/surface-grinding-600-450.webp", alt: "Grinding and cleaning services", icon: "fa-solid fa-gear", title: "Grinding & cleaning", text: "Dust-free removal of existing coatings, cleaing of oil & deposits, levelling", detailKey: "grinding-cleaning" },
        { image: "/docs/assets/images/services/floor-resins-600-450.webp", alt: "Screeds and resin coatings services", icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Application of liquid screeds and epoxy resin floor coatings", detailKey: "screeds-resin-coatings" },
        { image: "/docs/assets/images/services/floor-marking-600-450.webp", alt: "Floor painting and marking services", icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Painting of factory and warehouse floors including markings and walkways", detailKey: "floor-painting-markings" },
        { image: "/docs/assets/images/services/vna-flooring-600-450.webp", alt: "VNA superflat flooring", icon: "fa-solid fa-minus", title: "VNA superflat flooring", text: "Very Narrow Aisle warehouse ultra-precision superflat flooring", detailKey: "vna-superflat-flooring" }
      ],
      defaultDetailKey: "floor-joint-repairs",
      serviceDetails: {
        "floor-joint-repairs": {
          title: "FLOOR JOINT REPAIR SERVICES (EXAMPLE)",
          intro: "Expansion joints are gaps within a floor slab that allow vibration and temperature changes, helping to minimise cracking. Joint arrises are the edges of the gaps in a joint. The risks to joints include the following:",
          risks: [
            "Expansion joints fail as they crack, block or lose flexibility, causing stress in the slab",
            "Joint arrises break down from impact and traffic, leading to spalling and widening damage",
            "Failure restricts movement and accelerates cracking and floor deterioration"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Increased forklift damage and downtime from impact and vibration",
            "Safety hazards from trip points and uneven surfaces",
            "Accelerated slab deterioration and widening structural defects",
            "Reduced operational efficiency and slower material handling",
            "Higher long-term repair costs due to progressive floor failure"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "Expansion Joint Repairs",
              items: [
                "Cut either side of the joint",
                "Infill with sealant"
              ]
            },
            {
              title: "Arris Major Repairs",
              items: [
                "Cut either side of the joint",
                "Break out the failed section",
                "Infill with sealant",
                "Reseal the joint and diamond-grind upon curing for a seamless transition"
              ]
            }
          ],
          features: ["FEATURE 1", "FEATURE 2", "FEATURE 3"],
          ctaHref: "/#contact",
          ctaLabel: "GET A FREE QUOTE"
        },
        "floor-surface-repairs": {
          title: "FLOOR SURFACE REPAIR SERVICES",
          intro: "Surface damage such as cracks, potholes and localised slab defects can quickly worsen under repeated traffic and impact. These defects affect the condition, safety and appearance of the floor surface.",
          risks: [
            "Cracks and potholes allow defects to spread under repeated loading",
            "Damaged surfaces create unstable running conditions for forklifts and pallet traffic",
            "Unrepaired defects trap dust, debris and water, increasing deterioration"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Safety issues for staff, visitors and mobile equipment",
            "More downtime caused by reactive maintenance and patching",
            "Poor site presentation in customer-facing or audited environments",
            "Faster deterioration across surrounding slab areas",
            "Higher long-term repair costs if defects are left to expand"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "Crack Repairs",
              items: [
                "Open and prepare the damaged crack",
                "Stabilise and infill with suitable repair materials"
              ]
            },
            {
              title: "Pothole & Surface Defect Repairs",
              items: [
                "Cut out the failed section",
                "Break out loose or damaged concrete",
                "Rebuild with durable repair mortar",
                "Grind smooth for a safer transition"
              ]
            }
          ],
          features: ["Fast turnaround", "Safer surfaces", "Durable finish"],
          ctaHref: "/#contact",
          ctaLabel: "GET A FREE QUOTE"
        },
        "grinding-cleaning": {
          title: "GRINDING & CLEANING SERVICES",
          intro: "Concrete floor surfaces often need preparation before coatings, repairs or repainting. Grinding and cleaning help remove contamination, unevenness and worn finishes so the slab can be restored properly.",
          risks: [
            "Old coatings and contamination prevent new finishes from bonding correctly",
            "Uneven surfaces and debris build-up affect cleanliness and usability",
            "Poor preparation can reduce the lifespan of follow-on repair and coating systems"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Reduced performance of coatings and repair materials",
            "Dust, residue and contamination affecting operations",
            "Extra downtime if surfaces need to be re-prepared later",
            "Poor finish quality in visible working areas",
            "Higher installation costs from avoidable remedial work"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "Surface Grinding",
              items: [
                "Mechanically grind concrete surfaces",
                "Remove uneven areas, residues and failed finishes"
              ]
            },
            {
              title: "Deep Cleaning & Preparation",
              items: [
                "Clean oil, dust and embedded surface contamination",
                "Prepare the slab for repairs, coatings or repainting",
                "Create a cleaner and more even working surface"
              ]
            }
          ],
          features: ["Dust-controlled methods", "Improved adhesion", "Cleaner finish"],
          ctaHref: "/#contact",
          ctaLabel: "GET A FREE QUOTE"
        },
        "screeds-resin-coatings": {
          title: "SCREEDS & RESIN COATING SERVICES",
          intro: "Where floors are worn, uneven or visually tired, screeds and resin coatings can restore performance and presentation. These systems help create a more durable and easier-to-maintain surface.",
          risks: [
            "Worn concrete surfaces continue to erode under heavy use",
            "Uneven floors can affect operations and product handling",
            "Unprotected slabs are more vulnerable to staining, dusting and surface wear"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Shortened floor lifespan in busy operational areas",
            "Reduced cleanliness and presentation standards",
            "Disruption from repeated patch repairs instead of full surface renewal",
            "Lower resistance to chemicals, impact and daily abrasion",
            "Increased maintenance spend over time"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "Liquid Screeds",
              items: [
                "Apply screed systems to improve levels and finish",
                "Create a renewed wearing surface over prepared slabs"
              ]
            },
            {
              title: "Epoxy & Resin Coatings",
              items: [
                "Apply protective coating systems",
                "Improve durability, appearance and cleanability",
                "Install finishes suited to operational demands"
              ]
            }
          ],
          features: ["Renewed surface", "Protective finish", "Easy to maintain"],
          ctaHref: "/#contact",
          ctaLabel: "GET A FREE QUOTE"
        },
        "floor-painting-markings": {
          title: "FLOOR PAINTING & MARKING SERVICES",
          intro: "Floor painting and line marking help organise space, improve visual control and support safer movement through warehouses, factories and commercial sites. Clear markings are essential in busy working environments.",
          risks: [
            "Worn or unclear markings reduce visibility for traffic and pedestrians",
            "Poorly defined zones can create confusion and operational inefficiency",
            "Untidy surfaces weaken presentation and safety management standards"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Higher risk of accidents in mixed traffic areas",
            "Reduced efficiency from unclear walkways and storage zones",
            "Poor visual standards in active workspaces",
            "More difficulty maintaining organised site layouts",
            "Repeated repainting if unsuitable materials are used"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "Floor Painting",
              items: [
                "Prepare and paint concrete floor surfaces",
                "Refresh worn operational and commercial areas"
              ]
            },
            {
              title: "Line & Zone Markings",
              items: [
                "Mark pedestrian walkways and forklift routes",
                "Define bays, work zones and storage areas",
                "Apply durable markings suited to site use"
              ]
            }
          ],
          features: ["Clear zoning", "Safer movement", "Professional finish"],
          ctaHref: "/#contact",
          ctaLabel: "GET A FREE QUOTE"
        },
        "vna-superflat-flooring": {
          title: "VNA SUPERFLAT FLOORING SERVICES",
          intro: "Very Narrow Aisle warehouse operations depend on highly accurate floor tolerances. Superflat flooring reduces vibration, improves truck travel and supports reliable performance in narrow aisle environments.",
          risks: [
            "Poor floor flatness increases vibration and equipment wear",
            "Uneven aisle profiles can affect travel speed and picking accuracy",
            "Tolerance failures can reduce the efficiency of VNA operations"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Reduced productivity in high-density warehouse aisles",
            "Increased wear on specialist VNA trucks and components",
            "More maintenance and interruption to operations",
            "Lower safety and ride quality for operators",
            "Costly correction works if tolerances are not properly managed"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "Superflat Floor Correction",
              items: [
                "Assess aisle flatness and identify problem areas",
                "Grind and correct localised deviations"
              ]
            },
            {
              title: "VNA Surface Upgrades",
              items: [
                "Prepare and refine travel routes",
                "Improve ride performance and aisle consistency",
                "Support long-term VNA operational reliability"
              ]
            }
          ],
          features: ["Tighter tolerances", "Smoother travel", "Better aisle performance"],
          ctaHref: "/#contact",
          ctaLabel: "GET A FREE QUOTE"
        }
      }
    },
    warehouse: {
      variant: "showcase",
      eyebrowIcon: "fa-solid fa-warehouse",
      eyebrowText: "Warehouse Flooring",
      title: "Warehouse Concrete Floor Repair Services",
      intro: "Warehouse floor defects can be structurally unsafe, deteriorate rapidly and start to affect day-to-day warehouse operations.",
      calloutOne: {
        icon: "fa-solid fa-circle-question",
        title: "Need repair and/or renovation?",
        text: "We support warehouse operators and logistics sites with practical floor repairs, resurfacing and coating works."
      },
      calloutTwo: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help",
        text: sharedHelpText
      },
      cta: {
        href: "/warehouse-flooring/warehouse-floor-repair-guide/",
        label: "Read Warehouse Floor Repair Guide",
        icon: "fa-solid fa-arrow-right"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1771531072574-af6ed6b954c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Warehouse floor repairs and surfacing",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Concrete Warehouse Floor Repair",
        text: "Repairs, surfacing and coatings designed for high-traffic warehouse environments."
      },
      cards: [
        { image: "/docs/assets/img2.jpg", alt: "Warehouse floor joint repairs", icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Repair and stabilisation of damaged joints across busy warehouse slabs and aisles" },
        { image: "/docs/assets/img1.jpg", alt: "Warehouse crack and pothole repairs", icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Crack and pothole repairs for hard-working warehouse concrete floors" },
        { image: "/docs/assets/img3.jpg", alt: "Warehouse grinding and cleaning", icon: "fa-solid fa-grip-lines", title: "Grinding & cleaning", text: "Surface grinding and cleaning for worn, dusty and high-traffic warehouse areas" },
        { image: "/docs/assets/img4.jpg", alt: "Warehouse screeds and resin coatings", icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Liquid screeds and resin coatings for warehouse refurbishments and overlays" },
        { image: "/docs/assets/img5.jpg", alt: "Warehouse floor painting and markings", icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Warehouse floor painting, line marking and pedestrian route demarcation" }
      ]
    },
    industrial: {
      variant: "showcase",
      eyebrowIcon: "fa-solid fa-industry",
      eyebrowText: "Industrial Flooring",
      title: "Industrial Concrete Floor Repair Services",
      intro: "Industrial floor defects can be structurally unsafe, deteriorate rapidly and start to affect day-to-day operations in factories and industrial buildings.",
      calloutOne: {
        icon: "fa-solid fa-circle-question",
        title: "Industrial repair & refurbishment",
        text: "Practical repair, resurfacing and coating works for hard-working factories, plants and industrial production areas."
      },
      calloutTwo: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help",
        text: sharedHelpText
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1744063429626-4f2582172d1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Industrial concrete floor repair",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Industrial Floor Repair Services",
        text: "Repairs, resurfacing and coating systems designed for heavy-use industrial and factory environments."
      },
      cards: [
        { image: "/docs/assets/img2.jpg", alt: "Industrial floor joint repairs", icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Repair and stabilisation of damaged joints in factories and industrial concrete slabs" },
        { image: "/docs/assets/img1.jpg", alt: "Industrial crack and pothole repairs", icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Industrial crack, pothole and spall repairs for hard-working floor slabs" },
        { image: "/docs/assets/img3.jpg", alt: "Industrial grinding and renovation", icon: "fa-solid fa-grip-lines", title: "Grinding & renovation", text: "Surface grinding, deep cleaning and industrial floor renovation" },
        { image: "/docs/assets/img4.jpg", alt: "Industrial screeds and resin coatings", icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Self-levelling screeds and durable epoxy resin coating systems" },
        { image: "/docs/assets/img5.jpg", alt: "Industrial floor painting and markings", icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Factory floor painting, safety demarcation and line-marking systems" }
      ]
    },
    commercial: {
      variant: "showcase",
      eyebrowIcon: "fa-solid fa-building",
      eyebrowText: "Commercial Flooring",
      title: "Commercial Concrete Floor Repair Services",
      intro: "Concrete floor defects can be structurally unsafe, deteriorate rapidly and start to affect your day-to-day business operations.",
      calloutOne: {
        icon: "fa-solid fa-circle-question",
        title: "Commercial repair & refurbishment",
        text: "Repair, resurfacing and renovation works for offices, retail units, commercial buildings and customer-facing interiors."
      },
      calloutTwo: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help",
        text: sharedHelpText
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1771531072574-af6ed6b954c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Concrete floor repair contractors",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Concrete Floor Repair Contractors",
        text: "Repair, resurfacing and renovation solutions designed for busy commercial buildings and customer-facing spaces."
      },
      cards: [
        { image: "/docs/assets/img2.jpg", alt: "Commercial floor joint repairs", icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Joint repair and stabilisation for commercial concrete floors and internal slabs" },
        { image: "/docs/assets/img1.jpg", alt: "Commercial crack and pothole repairs", icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Crack, pothole and defect repairs for busy commercial flooring areas" },
        { image: "/docs/assets/img3.jpg", alt: "Commercial grinding and cleaning", icon: "fa-solid fa-grip-lines", title: "Grinding & cleaning", text: "Surface grinding, cleaning and preparation for refurbished commercial floors" },
        { image: "/docs/assets/img4.jpg", alt: "Commercial screeds and resin coatings", icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Liquid screeds and resin coatings for commercial interiors and workspaces" },
        { image: "/docs/assets/img5.jpg", alt: "Commercial floor painting and markings", icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Commercial floor painting, demarcation and walkway marking solutions" }
      ]
    },
    vna: {
      variant: "showcase",
      eyebrowIcon: "fa-solid fa-ruler-combined",
      eyebrowText: "Super-flat VNA Flooring",
      title: "VNA Warehouse Flooring Services",
      intro: "Very Narrow Aisle environments demand precise flatness and smooth travel routes. Floor defects can increase vibration, slow operations and accelerate wear on equipment.",
      calloutOne: {
        icon: "fa-solid fa-circle-question",
        title: "Precision-led VNA support",
        text: "We help VNA warehouse operators improve floor accuracy, ride quality and long-term aisle performance."
      },
      calloutTwo: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help",
        text: "Since 2013 we have worked with businesses across logistics, manufacturing, food & drink and pharmaceuticals."
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "VNA warehouse aisle and floor markings",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Super-flat VNA Flooring",
        text: "Precision levelling, repair and durable finishes designed for VNA truck routes and narrow aisle warehouse operations."
      },
      cards: [
        { image: "/docs/assets/img6.jpg", alt: "Precision levelling for VNA warehouse floors", icon: "fa-solid fa-ruler-combined", title: "Precision levelling", text: "Precision levelling and profiling for VNA travel routes" },
        { image: "/docs/assets/img7.jpg", alt: "Crack and joint repairs for VNA aisles", icon: "fa-solid fa-triangle-exclamation", title: "Crack & joint repairs", text: "Crack, joint and pothole repairs in VNA warehouse aisles" },
        { image: "/docs/assets/img8.jpg", alt: "Grinding and preparation for VNA floors", icon: "fa-solid fa-grip-lines", title: "Grinding & preparation", text: "Surface grinding and preparation to tight tolerances" },
        { image: "/docs/assets/img9.jpg", alt: "Specialist screeds and coatings for VNA floors", icon: "fa-solid fa-fill-drip", title: "Screeds & coatings", text: "Application of specialist screeds and resin coatings" },
        { image: "/docs/assets/img10.jpg", alt: "Line marking and demarcation for VNA operations", icon: "fa-solid fa-road", title: "Line marking & demarcation", text: "Line marking, demarcation and durable aisle finishes for VNA operations" }
      ]
    },
    "warehouse-guide": {
      variant: "feature",
      alignClass: "lg:items-start",
      questionIcon: "fa-solid fa-circle-question",
      title: "Does your business need concrete floor laying & repair services?",
      intro: "Warehouse floor defects can be structurally unsafe, deteriorate rapidly and start to affect your day-to-day warehouse operations.",
      callout: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help!",
        text: "Since 2013 we have worked with businesses across many sectors including logistics, manufacturing, food & drink and pharmaceuticals. We offer a complete range of warehouse concrete floor services, from repairs to defects in the slab (holes, cracks and expansion joints) to surface renovation using specialist resin coatings, screeds and durable paints across England & Wales."
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1643894440673-553350d13370?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Warehouse concrete floor repair services",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Concrete Warehouse Floor Repair",
        text: "Repairs, surfacing and coatings designed for high-traffic warehouse environments."
      },
      cards: [
        { icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Filling and stabilisation of damaged concrete floor joints" },
        { icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Concrete flooring crack and pothole repairs" },
        { icon: "fa-solid fa-broom", title: "Grinding & cleaning", text: "Concrete surface grinding & cleaning" },
        { icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Application of liquid screeds and epoxy resin floor coatings" },
        { icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Painting of factory & warehouse floors including markings & walkways", fullWidth: true }
      ]
    },
    "industrial-guide": {
      variant: "feature",
      alignClass: "lg:items-center",
      questionIcon: "fa-solid fa-circle-question",
      title: "Does your business need industrial concrete floor repair services?",
      intro: "Industrial floor defects can be structurally unsafe, deteriorate rapidly and start to affect day-to-day operations in factories and industrial buildings.",
      callout: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help!",
        text: "Since 2013 we have supported UK businesses across logistics, manufacturing, food & drink and pharmaceuticals. We provide a complete range of industrial floor services, including repairs to cracks, holes and damaged joints, plus surface renovation through specialist coatings, screeds and durable finishes across England & Wales."
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1744063429626-4f2582172d1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Industrial concrete floor repair",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Industrial Floor Repair Services",
        text: "Repairs, surfacing and coatings designed for heavy-use industrial and factory environments."
      },
      cards: [
        { icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Repair & stabilisation of damaged concrete floor joints" },
        { icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Industrial crack, pothole and spall repairs" },
        { icon: "fa-solid fa-grip-lines", title: "Grinding & renovation", text: "Surface grinding, cleaning & renovation" },
        { icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Self-levelling screeds and epoxy resin coatings" },
        { icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Painting of factory & warehouse floors including markings & walkways", fullWidth: true }
      ]
    },
    "commercial-guide": {
      variant: "feature",
      alignClass: "lg:items-center",
      questionIcon: "fa-solid fa-circle-question",
      title: "Does your business need commercial concrete floor repair services?",
      intro: "Commercial floor defects can be structurally unsafe, deteriorate rapidly and start to affect day-to-day operations in factories and commercial buildings.",
      callout: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help!",
        text: "Since 2013 we have supported UK businesses across logistics, manufacturing, food & drink and pharmaceuticals. We provide a complete range of commercial floor services, including repairs to cracks, holes and damaged joints, plus surface renovation through specialist coatings, screeds and durable finishes across England & Wales."
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1744063429626-4f2582172d1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Commercial concrete floor repair",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Concrete floor repair services",
        text: "Repairs, surfacing and coatings designed for heavy-use commercial and factory environments."
      },
      cards: [
        { icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Repair & stabilisation of damaged concrete floor joints" },
        { icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Commercial crack, pothole and spall repairs" },
        { icon: "fa-solid fa-grip-lines", title: "Grinding & renovation", text: "Surface grinding, cleaning & renovation" },
        { icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Self-levelling screeds and epoxy resin coatings" },
        { icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Painting of factory & warehouse floors including markings & walkways", fullWidth: true }
      ]
    }
  };

  servicePartials.forEach((root) => {
    const key = root.dataset.serviceKey || "home";
    const config = configs[key];
    if (!config) return;

    root.innerHTML = config.variant === "feature" ? renderFeature(config) : renderShowcase(config);

    const detailPanel = root.querySelector("[data-service-detail-panel]");
    const detailTriggers = Array.from(root.querySelectorAll(".serviceDetailTrigger"));

    if (detailPanel && detailTriggers.length) {
      const detailItems = Array.from(detailPanel.querySelectorAll("[data-service-detail]"));
      let activeDetailKey = "";
      let activeTrigger = null;
      let hideTimer = null;

      const showDetail = (detailKey) => {
        detailItems.forEach((item) => {
          item.classList.toggle("hidden", item.dataset.serviceDetail !== detailKey);
        });
        activeDetailKey = detailKey;
      };

      const positionPopup = (trigger) => {
        if (!trigger || detailPanel.classList.contains("hidden")) return;

        const rect = trigger.getBoundingClientRect();
        const popupRect = detailPanel.getBoundingClientRect();
        const gap = 12;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let left = rect.left;
        let top = rect.bottom + gap;

        if (left + popupRect.width > viewportWidth - 16) {
          left = viewportWidth - popupRect.width - 16;
        }
        if (left < 16) {
          left = 16;
        }

        if (top + popupRect.height > viewportHeight - 16) {
          top = rect.top - popupRect.height - gap;
        }
        if (top < 16) {
          top = 16;
        }

        detailPanel.style.left = `${left}px`;
        detailPanel.style.top = `${top}px`;
      };

      const openPopup = (trigger, detailKey) => {
        if (!detailKey) return;
        if (hideTimer) {
          clearTimeout(hideTimer);
          hideTimer = null;
        }

        showDetail(detailKey);
        activeTrigger = trigger;
        detailPanel.classList.remove("hidden", "pointer-events-none", "opacity-0");
        detailPanel.classList.add("pointer-events-auto", "opacity-100");
        detailPanel.setAttribute("aria-hidden", "false");
        requestAnimationFrame(() => positionPopup(trigger));
      };

      const closePopup = () => {
        detailPanel.classList.add("pointer-events-none", "opacity-0");
        detailPanel.classList.remove("pointer-events-auto", "opacity-100");
        detailPanel.setAttribute("aria-hidden", "true");
        hideTimer = window.setTimeout(() => {
          detailPanel.classList.add("hidden");
        }, 220);
      };

      const scheduleClose = () => {
        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = window.setTimeout(() => {
          closePopup();
        }, 120);
      };

      const defaultDetailKey = detailPanel.dataset.defaultDetail || detailTriggers[0]?.dataset.detailKey;
      if (defaultDetailKey) showDetail(defaultDetailKey);

      detailTriggers.forEach((trigger) => {
        const activateDetail = () => {
          const { detailKey } = trigger.dataset;
          if (!detailKey) return;
          openPopup(trigger, detailKey);
        };

        trigger.addEventListener("mouseenter", activateDetail);
        trigger.addEventListener("focus", activateDetail);
        trigger.addEventListener("click", activateDetail);
        trigger.addEventListener("mouseleave", scheduleClose);
        trigger.addEventListener("blur", scheduleClose);
      });

      detailPanel.addEventListener("mouseenter", () => {
        if (hideTimer) {
          clearTimeout(hideTimer);
          hideTimer = null;
        }
      });

      detailPanel.addEventListener("mouseleave", scheduleClose);

      window.addEventListener("scroll", () => {
        if (activeTrigger && !detailPanel.classList.contains("hidden")) {
          positionPopup(activeTrigger);
        }
      }, { passive: true });

      window.addEventListener("resize", () => {
        if (activeTrigger && !detailPanel.classList.contains("hidden")) {
          positionPopup(activeTrigger);
        }
      });
    }
  });
}
