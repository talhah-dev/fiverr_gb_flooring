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
    <section class="relative overflow-hidden bg-white pb-16 pt-8 sm:pb-20 sm:pt-12">
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
                <div class="absolute inset-0 bg-gradient-to-r from-slate-950/78 via-slate-900/46 to-slate-900/10"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/18"></div>

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

        <div class="mt-8 border-t border-slate-200/80 pt-8">
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            ${config.cards.map(renderShowcaseCard).join("")}
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
      eyebrowIcon: "fa-solid fa-layer-group",
      eyebrowText: "Our Services",
      title: "Our Commercial & Industrial Concrete Floor Services",
      intro: "Concrete floor defects can be structurally unsafe, deteriorate rapidly and start to affect day-to-day operations.",
      calloutOne: {
        icon: "fa-solid fa-circle-question",
        title: "Need repair and/or renovation?",
        text: "We help commercial and industrial sites restore safety, durability and appearance."
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
        alt: "Industrial warehouse floor aisle with markings",
        badgeIcon: "fa-solid fa-sparkles",
        badgeText: "Professional finish",
        kicker: "GB FLOORING GROUP",
        title: "Concrete Floor Installation, Surfacing & Repair",
        text: "Repairs to defects in the concrete slab and surface renovation using specialist resin coatings, screeds and paints."
      },
      cards: [
        { image: "/docs/assets/img6.jpg", alt: "Floor joint repair services", icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Filling and stabilisation of damaged concrete floor joints" },
        { image: "/docs/assets/img7.jpg", alt: "Crack and pothole repair services", icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Concrete flooring crack and pothole repairs" },
        { image: "/docs/assets/img8.jpg", alt: "Grinding and cleaning services", icon: "fa-solid fa-grip-lines", title: "Grinding & cleaning", text: "Concrete surface grinding and cleaning" },
        { image: "/docs/assets/img9.jpg", alt: "Screeds and resin coatings services", icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Application of liquid screeds and epoxy resin floor coatings" },
        { image: "/docs/assets/img10.jpg", alt: "Floor painting and marking services", icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Painting of factory and warehouse floors including markings and walkways" }
      ]
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
      variant: "feature",
      alignClass: "lg:items-start",
      questionIcon: "fa-solid fa-circle-question",
      title: "Does your business need VNA flooring services?",
      intro: "Very Narrow Aisle environments demand precise flatness and smooth travel routes. Floor defects can increase vibration, slow operations and accelerate wear on equipment.",
      callout: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help!",
        text: "Since 2013 we have worked with businesses across many sectors including logistics, manufacturing, food & drink and pharmaceuticals. We provide a complete range of concrete floor services, with precision preparation, leveling and durable surfacing systems tailored for VNA warehouse operations across England & Wales."
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
        text: "Precision leveling and durable finishes designed for VNA truck routes and narrow aisle operations."
      },
      cards: [
        { icon: "fa-solid fa-ruler-combined", title: "Precision leveling", text: "Precision leveling and profiling for VNA travel routes" },
        { icon: "fa-solid fa-triangle-exclamation", title: "Crack & joint repairs", text: "Crack, joint and pothole repairs in warehouse aisles" },
        { icon: "fa-solid fa-grip-lines", title: "Grinding & preparation", text: "Surface grinding and preparation to tight tolerances" },
        { icon: "fa-solid fa-fill-drip", title: "Screeds & coatings", text: "Application of specialist screeds and resin coatings" },
        { icon: "fa-solid fa-road", title: "Line marking & demarcation", text: "Line marking, demarcation and durable aisle finishes for VNA operations", fullWidth: true }
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
  });
}
