const operate = document.getElementById("operate");
operate.innerHTML = `
        <section class="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
            <div class="absolute inset-0 opacity-40">
                <div class="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[#2c4a80]/45 blur-3xl"></div>
                <div class="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[#2c4a80]/25 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div data-aos="zoom-in"
                            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[#9bb4e6] backdrop-blur">
                            <i class="fa-solid fa-list-ul"></i>
                            <span class="text-sm font-semibold tracking-wide">At a glance</span>
                        </div>

                        <h2 data-aos="fade-up" data-aos-delay="100"
                            class="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                            Nationwide flooring services for busy sites
                        </h2>

                        <p data-aos="fade-up" data-aos-delay="200"
                            class="mt-3 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                            Where we operate, who we support, and what we deliver across commercial and industrial
                            environments.
                        </p>
                    </div>
                </div>

                <div class="mt-10 grid gap-5 lg:grid-cols-12">
                    <div data-aos="fade-up" class="lg:col-span-4">
                        <div class="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                            <div class="flex items-center gap-3">
                                <span
                                    class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#2c4a80]/25 text-[#9bb4e6]">
                                    <i class="fa-solid fa-map"></i>
                                </span>
                                <div>
                                    <p class="text-lg font-semibold text-white">We Operate Across the UK</p>
                                    <p class="text-sm text-white/65">Coverage</p>
                                </div>
                            </div>

                            <ul class="mt-6 space-y-3 text-white/80">
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>North-West of England</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>North-East of England</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>East &amp; West Midlands</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>London &amp; Home Counties</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>South &amp; South-West of England</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="50" class="lg:col-span-4">
                        <div class="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                            <div class="flex items-center gap-3">
                                <span
                                    class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#2c4a80]/25 text-[#9bb4e6]">
                                    <i class="fa-solid fa-warehouse"></i>
                                </span>
                                <div>
                                    <p class="text-lg font-semibold text-white">We Carry Out Floor Repair</p>
                                    <p class="text-sm text-white/65">Sites</p>
                                </div>
                            </div>

                            <ul class="mt-6 space-y-3 text-white/80">
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Factories &amp; Industrial Sites</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Warehouse Floor Aisles &amp; Loading Bays</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Food Production Sites</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Cold or Chilled Storage Buildings</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Industrial Floor Repair Contractors</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100" class="lg:col-span-4">
                        <div class="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                            <div class="flex items-center gap-3">
                                <span
                                    class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#2c4a80]/25 text-[#9bb4e6]">
                                    <i class="fa-solid fa-screwdriver-wrench"></i>
                                </span>
                                <div>
                                    <p class="text-lg font-semibold text-white">We Carry Out Interior Works</p>
                                    <p class="text-sm text-white/65">Capabilities</p>
                                </div>
                            </div>

                            <ul class="mt-6 space-y-3 text-white/80">
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Concrete Grinding, Cleaning &amp; Renovation</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Repair &amp; Stabilisation of Concrete Floor Joints</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Crack &amp; Pothole Repairs</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Concrete Slab Overlays</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Self-levelling Screeds</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Epoxy Flooring Resins (Heat, Wear &amp; Chemically Resistant)</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Food-safe &amp; Hygienic Polyurethane Resins</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 h-2 w-2 rounded-full bg-[#9bb4e6]"></span>
                                    <span>Demarcation and Line-painting</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`