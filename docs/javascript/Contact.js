const contact = document.getElementById("contact");

if (contact) {
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
                            <i class="fa-solid fa-envelope"></i>
                            <span class="text-sm font-semibold tracking-wide">Contact</span>
                        </div>
                        <h2
                            class="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                            Contact Us Now
                        </h2>
                        <p
                            class="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            Use one of the following contact methods to arrange a free consultation &amp; quotation.
                        </p>
                    </div>
                </div>

                <div class="mt-10 grid gap-6 lg:grid-cols-12">
                    <div class="lg:col-span-4">
                        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div class="flex items-start gap-3">
                                <span
                                    class="mt-0.5 grid h-11 w-11 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80]">
                                    <i class="fa-solid fa-at"></i>
                                </span>
                                <div>
                                    <p class="text-sm font-semibold text-slate-900">E-mail Us</p>
                                    <a href="mailto:enquiry@gbflooringgroup.com"
                                        class="mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#2c4a80] hover:underline">
                                        enquiry@gbflooringgroup.com
                                        <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
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
                                        <i class="fa-solid fa-map-location-dot"></i>
                                    </span>
                                    <div>
                                        <p class="font-semibold text-slate-900">Nationwide service</p>
                                        <p class="mt-1 text-sm leading-relaxed text-slate-600">
                                            We work across all regions of England &amp; Wales.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                                <div
                                    class="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
                                    <p class="text-sm font-semibold text-slate-900">We work across</p>
                                    <span class="text-xs font-semibold text-[#2c4a80]">UK</span>
                                </div>
                                <div class="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-1">
                                    <div class="flex items-center gap-2 text-sm text-slate-700">
                                        <span class="h-2 w-2 rounded-full bg-[#2c4a80]"></span>
                                        North West
                                    </div>
                                    <div class="flex items-center gap-2 text-sm text-slate-700">
                                        <span class="h-2 w-2 rounded-full bg-[#2c4a80]"></span>
                                        North East
                                    </div>
                                    <div class="flex items-center gap-2 text-sm text-slate-700">
                                        <span class="h-2 w-2 rounded-full bg-[#2c4a80]"></span>
                                        Yorkshire
                                    </div>
                                    <div class="flex items-center gap-2 text-sm text-slate-700">
                                        <span class="h-2 w-2 rounded-full bg-[#2c4a80]"></span>
                                        East Midlands
                                    </div>
                                    <div class="flex items-center gap-2 text-sm text-slate-700">
                                        <span class="h-2 w-2 rounded-full bg-[#2c4a80]"></span>
                                        West Midlands
                                    </div>
                                    <div class="flex items-center gap-2 text-sm text-slate-700">
                                        <span class="h-2 w-2 rounded-full bg-[#2c4a80]"></span>
                                        East of England
                                    </div>
                                    <div class="flex items-center gap-2 text-sm text-slate-700">
                                        <span class="h-2 w-2 rounded-full bg-[#2c4a80]"></span>
                                        South East
                                    </div>
                                    <div class="flex items-center gap-2 text-sm text-slate-700">
                                        <span class="h-2 w-2 rounded-full bg-[#2c4a80]"></span>
                                        South West
                                    </div>
                                    <div class="flex items-center gap-2 text-sm text-slate-700">
                                        <span class="h-2 w-2 rounded-full bg-[#2c4a80]"></span>
                                        London
                                    </div>
                                    <div class="flex items-center gap-2 text-sm text-slate-700">
                                        <span class="h-2 w-2 rounded-full bg-[#2c4a80]"></span>
                                        Wales
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-8">
                        <div
                            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                            <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div class="flex md:items-center gap-3">
                                    <span
                                        class="grid h-11 shrink-0 w-11 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80]">
                                        <i class="fa-solid fa-comment-dots"></i>
                                    </span>
                                    <div>
                                        <p class="text-lg font-semibold text-slate-900">Complete Our Contact Form</p>
                                        <p class="text-sm text-slate-600">Please complete and we will be in touch as
                                            soon as possible.</p>
                                    </div>
                                </div>

                                <div
                                    class="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
                                    <i class="fa-solid fa-lock text-[#2c4a80]"></i>
                                    Secure submission
                                </div>
                            </div>

                            <form data-contact-form action="https://api.web3forms.com/submit" method="POST" class="mt-8 grid gap-4 sm:grid-cols-2">
                                <input type="hidden" name="access_key" value="67b52011-4311-412a-8f8c-bb3b879a1298" />
                                <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
                                <div class="sm:col-span-2">
                                    <label class="text-sm font-semibold text-slate-700">Name <span
                                            class="text-[#2c4a80]">*</span></label>
                                    <input type="text" name="name" required placeholder="Enter name"
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div>
                                    <label class="text-sm font-semibold text-slate-700">Email <span
                                            class="text-[#2c4a80]">*</span></label>
                                    <input type="email" name="email" required placeholder="Enter email"
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div>
                                    <label class="text-sm font-semibold text-slate-700">Phone (optional)</label>
                                    <input type="tel" name="phone" placeholder="Enter phone number"
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div class="sm:col-span-2">
                                    <label class="text-sm font-semibold text-slate-700">Company <span
                                            class="text-[#2c4a80]">*</span></label>
                                    <input type="text" name="company" required placeholder="Enter company"
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div class="sm:col-span-2">
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

  if (contactForm && contactSubmitButton && contactFeedback) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      contactSubmitButton.setAttribute("disabled", "true");
      contactSubmitButton.classList.add("opacity-70", "cursor-not-allowed");
      contactFeedback.classList.remove("hidden", "text-red-600", "text-green-700");
      contactFeedback.classList.add("text-slate-600");
      contactFeedback.textContent = "Submitting...";

      try {
        const formData = new FormData(contactForm);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });
        const result = await response.json();

        if (response.ok && result.success) {
          contactForm.reset();
          contactFeedback.classList.remove("text-slate-600", "text-red-600");
          contactFeedback.classList.add("text-green-700");
          contactFeedback.textContent = "Message submitted successfully.";
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
