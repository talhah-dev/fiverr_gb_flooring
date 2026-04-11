const contact = document.getElementById("contact");

if (contact) {
  const escapeHtml = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const getConfigValue = (key, fallback) => {
    const value = contact.dataset[key];
    return value && value.trim() ? value.trim() : fallback;
  };

  const contactConfig = {
    eyebrowIcon: getConfigValue("contactEyebrowIcon", "fa-solid fa-envelope"),
    eyebrow: getConfigValue("contactEyebrow", "Contact"),
    heading: getConfigValue("contactHeading", "Contact Us Now"),
    intro: getConfigValue(
      "contactIntro",
      "Use one of the following contact methods to arrange a free consultation & quotation."
    ),
    regionIcon: getConfigValue("contactRegionIcon", "fa-solid fa-map-location-dot"),
    regionTitle: getConfigValue("contactRegionTitle", "Nationwide service"),
    regionText: getConfigValue(
      "contactRegionText",
      "We work across all regions of England & Wales."
    ),
    imageBadgeIcon: getConfigValue("contactImageBadgeIcon", "fa-solid fa-map-location-dot"),
    imageBadge: getConfigValue("contactImageBadge", "England & Wales"),
    imageKicker: getConfigValue("contactImageKicker", "GB FLOORING GROUP"),
    imageTitle: getConfigValue(
      "contactImageTitle",
      "Concrete floor installation, repairs & coatings"
    ),
    imageText: getConfigValue(
      "contactImageText",
      "Planned support for warehouses, factories and commercial sites nationwide."
    ),
    imageSrc: getConfigValue(
      "contactImageSrc",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    imageAlt: getConfigValue(
      "contactImageAlt",
      "Industrial concrete flooring inside a warehouse"
    ),
    formIcon: getConfigValue("contactFormIcon", "fa-solid fa-comment-dots"),
    formTitle: getConfigValue("contactFormTitle", "Complete Our Contact Form"),
    formText: getConfigValue(
      "contactFormText",
      "Please complete and we will be in touch as soon as possible."
    ),
    regionFieldValue: getConfigValue("contactRegionField", ""),
  };

  contact.innerHTML = `
        <section id="contact" class="relative overflow-hidden bg-white py-16 sm:py-20">
            <div class="absolute inset-0 -z-10">
                <div class="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[#2c4a80]/10 blur-3xl"></div>
                <div class="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[#2c4a80]/5 blur-3xl"></div>
            </div>

            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div
                            class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[#2c4a80] shadow-sm">
                            <i class="${escapeHtml(contactConfig.eyebrowIcon)}"></i>
                            <span class="text-sm font-semibold tracking-wide">${escapeHtml(contactConfig.eyebrow)}</span>
                        </div>
                        <h2
                            class="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                            ${escapeHtml(contactConfig.heading)}
                        </h2>
                        <p
                            class="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            ${escapeHtml(contactConfig.intro)}
                        </p>
                    </div>
                </div>

                <div class="mt-10 grid gap-6 lg:grid-cols-12">
                    <div class="min-w-0 lg:col-span-4">
                        <div class="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div class="flex items-start gap-3">
                                <span
                                    class="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80]">
                                    <i class="fa-solid fa-at"></i>
                                </span>
                                <div class="min-w-0">
                                    <p class="text-sm font-semibold text-slate-900">E-mail Us</p>
                                    <a href="mailto:enquiry@industrialfloorcontractors.co.uk"
                                        class="mt-1 flex max-w-full items-start gap-2 text-sm font-medium text-[#2c4a80] hover:underline">
                                        <span class="min-w-0 break-all">enquiry@industrialfloorcontractors.co.uk</span>
                                        <i class="fa-solid fa-arrow-up-right-from-square mt-0.5 shrink-0 text-xs"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="mt-5 h-px w-full bg-slate-200"></div>

                            <div class="mt-5 flex items-start gap-3">
                                <span
                                    class="mt-0.5 grid h-11 w-11 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80]">
                                    <i class="fa-solid fa-phone"></i>
                                </span>
                                <div>
                                    <p class="text-sm font-semibold text-slate-900">Call Us</p>
                                    <a href="tel:03333449598"
                                        class="mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#2c4a80] hover:underline">
                                        0333 344 9598
                                        <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="mt-6 rounded-2xl border border-[#2c4a80]/15 bg-[#2c4a80]/5 p-5">
                                <div class="flex items-start gap-3">
                                    <span
                                        class="mt-0.5 shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-white text-[#2c4a80] shadow-sm">
                                        <i class="${escapeHtml(contactConfig.regionIcon)}"></i>
                                    </span>
                                    <div>
                                        <p class="font-semibold text-slate-900">${escapeHtml(contactConfig.regionTitle)}</p>
                                        <p class="mt-1 text-sm leading-relaxed text-slate-600">
                                            ${escapeHtml(contactConfig.regionText)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                                <div class="relative h-[17rem] w-full sm:h-[19rem]">
                                    <img src="${escapeHtml(contactConfig.imageSrc)}"
                                        width="1172" height="781"
                                        alt="${escapeHtml(contactConfig.imageAlt)}"
                                        class="absolute inset-0 h-full w-full object-cover" />
                                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/10 to-transparent"></div>

                                    <div
                                        class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-white backdrop-blur">
                                        <i class="${escapeHtml(contactConfig.imageBadgeIcon)} text-xs"></i>
                                        <span class="text-xs font-semibold">${escapeHtml(contactConfig.imageBadge)}</span>
                                    </div>
                                </div>

                                <div class="border-t border-slate-200 bg-white px-5 py-5 sm:px-6">
                                    <p class="text-[11px] font-semibold tracking-[0.3em] text-slate-500">${escapeHtml(contactConfig.imageKicker)}</p>
                                    <p class="mt-2 text-xl font-semibold leading-tight text-slate-900">
                                        ${escapeHtml(contactConfig.imageTitle)}
                                    </p>
                                    <p class="mt-2 text-sm leading-relaxed text-slate-600">
                                        ${escapeHtml(contactConfig.imageText)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="min-w-0 lg:col-span-8">
                        <div
                            class="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                            <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div class="flex md:items-center gap-3">
                                    <span
                                        class="grid h-11 shrink-0 w-11 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80]">
                                        <i class="${escapeHtml(contactConfig.formIcon)}"></i>
                                    </span>
                                    <div>
                                        <p class="text-lg font-semibold text-slate-900">${escapeHtml(contactConfig.formTitle)}</p>
                                        <p class="text-sm text-slate-600">${escapeHtml(contactConfig.formText)}</p>
                                    </div>
                                </div>

                                <div
                                    class="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
                                    <i class="fa-solid fa-lock text-[#2c4a80]"></i>
                                    Secure submission
                                </div>
                            </div>

                            <form data-contact-form action="/contact-submit.php" method="POST" class="mt-8 grid gap-4 sm:grid-cols-2">
                                <input type="hidden" name="submission_url" value="" data-contact-url-field />
                                <input type="hidden" name="page_region" value="${contactConfig.regionFieldValue}" data-contact-region-field />
                                <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
                                <div class="min-w-0 sm:col-span-2">
                                    <label class="text-sm font-semibold text-slate-700">Name <span
                                            class="text-[#2c4a80]">*</span></label>
                                    <input type="text" name="name" required placeholder="Enter name"
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div class="min-w-0">
                                    <label class="text-sm font-semibold text-slate-700">Email <span
                                            class="text-[#2c4a80]">*</span></label>
                                    <input type="email" name="email" required placeholder="Enter email"
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div class="min-w-0">
                                    <label class="text-sm font-semibold text-slate-700">Phone (optional)</label>
                                    <input type="tel" name="phone" placeholder="Enter phone number"
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div class="min-w-0 sm:col-span-2">
                                    <label class="text-sm font-semibold text-slate-700">Company <span
                                            class="text-[#2c4a80]">*</span></label>
                                    <input type="text" name="company" required placeholder="Enter company"
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div class="min-w-0 sm:col-span-2">
                                    <label class="text-sm font-semibold text-slate-700">Message <span
                                            class="text-[#2c4a80]">*</span></label>
                                    <textarea name="message" rows="6" required placeholder="Enter your message here..."
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15"></textarea>
                                </div>

                                <div
                                    class="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <button data-contact-submit type="submit"
                                        class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2c4a80] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2c4a80]/20 transition hover:-translate-y-0.5 hover:bg-[#244070] focus:outline-none focus:ring-2 focus:ring-[#2c4a80]/35">
                                        Send Message
                                        <i class="fa-solid fa-paper-plane text-xs"></i>
                                    </button>
                                    <p data-contact-feedback class="hidden text-sm font-medium" aria-live="polite"></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  `;

  const contactForm = contact.querySelector("[data-contact-form]");
  const contactSubmitButton = contact.querySelector("[data-contact-submit]");
  const contactFeedback = contact.querySelector("[data-contact-feedback]");
  const contactUrlField = contact.querySelector("[data-contact-url-field]");
  const contactRegionField = contact.querySelector("[data-contact-region-field]");

  if (contactForm && contactSubmitButton && contactFeedback) {
    if (contactUrlField) {
      contactUrlField.value = window.location.href;
    }

    if (contactRegionField) {
      contactRegionField.value = contactConfig.regionFieldValue;
    }

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      contactSubmitButton.setAttribute("disabled", "true");
      contactSubmitButton.classList.add("opacity-70", "cursor-not-allowed");
      contactFeedback.classList.remove("hidden", "text-red-600", "text-green-700");
      contactFeedback.classList.add("text-slate-600");
      contactFeedback.textContent = "Submitting...";

      try {
        const formData = new FormData(contactForm);

        if (contactUrlField) {
          contactUrlField.value = window.location.href;
          formData.set("submission_url", contactUrlField.value);
        }

        if (contactRegionField) {
          formData.set("page_region", contactRegionField.value);
        }

        const response = await fetch(contactForm.action, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });
        const result = await response.json();

        if (response.ok && result.success) {
          window.location.assign("/thank-you/");
          return;
        } else {
          contactFeedback.classList.remove("text-slate-600", "text-green-700");
          contactFeedback.classList.add("text-red-600");
          contactFeedback.textContent = result.message || "Submission failed. Please try again.";
        }
      } catch (error) {
        contactFeedback.classList.remove("text-slate-600", "text-green-700");
        contactFeedback.classList.add("text-red-600");
        contactFeedback.textContent = "Submission failed. Please try again.";
      } finally {
        contactSubmitButton.removeAttribute("disabled");
        contactSubmitButton.classList.remove("opacity-70", "cursor-not-allowed");
      }
    });
  }
}
