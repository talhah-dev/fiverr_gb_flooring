const coverage = document.getElementById("coverage");
coverage.innerHTML = `
 <section class="relative overflow-hidden bg-white py-16 sm:py-20">
            <div class="absolute inset-0 -z-10">
                <div class="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[#2c4a80]/10 blur-3xl"></div>
                <div class="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[#2c4a80]/5 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div data-aos="zoom-in"
                            class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[#2c4a80] shadow-sm">
                            <i class="fa-solid fa-map-location-dot"></i>
                            <span class="text-sm font-semibold tracking-wide">UK Coverage</span>
                        </div>

                        <h2 data-aos="fade-up" data-aos-delay="100"
                            class="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                            We carry out industrial concrete flooring projects across the UK
                        </h2>

                        <p data-aos="fade-up" data-aos-delay="200"
                            class="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            Nationwide support for commercial and industrial sites across England &amp; Wales.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="250"
                        class="hidden sm:flex items-center gap-3 text-slate-700">
                        <span
                            class="grid h-10 w-10 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] border border-[#2c4a80]/10">
                            <i class="fa-solid fa-location-crosshairs"></i>
                        </span>
                        <div class="leading-tight">
                            <p class="text-sm font-semibold text-slate-900">Planned scheduling</p>
                            <p class="text-xs text-slate-600">Designed around operations</p>
                        </div>
                    </div>
                </div>

                <div class="mt-10 grid gap-5 lg:grid-cols-12">
                    <div data-aos="fade-up" class="lg:col-span-5">
                        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div class="flex items-start gap-3">
                                <span
                                    class="grid shrink-0 h-11 w-11 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80]">
                                    <i class="fa-solid fa-list-check"></i>
                                </span>
                                <div>
                                    <p class="text-lg font-semibold text-slate-900">Regions we work across</p>
                                    <p class="mt-1 text-sm leading-relaxed text-slate-600">
                                        A UK-wide network ready to support repairs, surfacing and coatings at scale.
                                    </p>
                                </div>
                            </div>

                            <div class="mt-6 grid gap-3 sm:grid-cols-2">
                                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <p class="text-sm font-semibold text-slate-900">North West</p>
                                    <p class="mt-1 text-xs text-slate-600">Liverpool · Manchester</p>
                                </div>
                                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <p class="text-sm font-semibold text-slate-900">North East</p>
                                    <p class="mt-1 text-xs text-slate-600">Newcastle · Sheffield</p>
                                </div>
                                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <p class="text-sm font-semibold text-slate-900">Midlands</p>
                                    <p class="mt-1 text-xs text-slate-600">Birmingham · Nottingham</p>
                                </div>
                                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <p class="text-sm font-semibold text-slate-900">South</p>
                                    <p class="mt-1 text-xs text-slate-600">London · Portsmouth</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7">
                        <div data-aos="fade-up" data-aos-delay="100"
                            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p class="text-xs font-semibold tracking-widest text-[#2c4a80]">POPULAR SERVICE
                                        AREAS</p>
                                    <p class="mt-1 text-lg font-semibold text-slate-900">Concrete Flooring Contractor
                                    </p>
                                </div>

                                <div class="relative w-full sm:w-72">
                                    <i
                                        class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                                    <input id="locationSearch" type="text" placeholder="Search a city…"
                                        class="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>
                            </div>

                            <div class="mt-6 grid gap-3 sm:grid-cols-2">
                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">Birmingham</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>

                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">London</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>

                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">Nottingham</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>

                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">Portsmouth</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>

                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">Northampton</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>

                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">Liverpool</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>

                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">Leeds</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>

                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">Manchester</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>

                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">Newcastle</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>

                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">Sheffield</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>

                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">Southampton</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>

                                <a data-loc href="#"
                                    class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#2c4a80]/35 hover:bg-slate-50">
                                    <span class="text-sm font-medium text-slate-900">Essex</span>
                                    <span
                                        class="grid h-9 w-9 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] transition group-hover:bg-[#2c4a80]/15">
                                        <i class="fa-solid fa-arrow-right text-xs"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;

(() => {
    const input = document.getElementById('locationSearch');
    const items = Array.from(document.querySelectorAll('[data-loc]'));
    if (!input || items.length === 0) return;

    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        items.forEach((a) => {
            const text = a.textContent.trim().toLowerCase();
            a.style.display = text.includes(q) ? '' : 'none';
        });
    });
})();