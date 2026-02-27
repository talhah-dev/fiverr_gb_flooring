const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="relative overflow-hidden bg-slate-950">
  <img src="https://images.unsplash.com/photo-1687475792136-5035f792730f?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover opacity-30" />
  <div class="absolute inset-0 bg-black/30"></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-10 py-14 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <div class="flex items-center gap-3">
          <img src="/docs/assets/logo.svg" class="invert brightness-0 h-10" alt="">
        </div>

        <p class="mt-5 max-w-md text-sm leading-relaxed text-white/75">
          Concrete floor repair, renovation, surfacing and specialist resin coatings for commercial and industrial buildings across the UK.
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-3">
          <a href="mailto:enquiry@gbflooringgroup.com" class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <i class="fa-solid fa-envelope text-[#9bb4e6]"></i>
            enquiry@gbflooringgroup.com
          </a>
          <a href="tel:03333449598" class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <i class="fa-solid fa-phone text-[#9bb4e6]"></i>
            0333 344 9598
          </a>
        </div>

        <div class="mt-6 flex items-center gap-3">
          <a href="#" aria-label="Facebook" class="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="LinkedIn" class="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="X" class="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" aria-label="YouTube" class="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>

      <div class="lg:col-span-7">
        <div class="grid gap-8 sm:grid-cols-3">
          <div>
            <p class="text-sm font-semibold text-white">Company</p>
            <ul class="mt-4 space-y-3 text-sm text-white/75">
              <li><a class="transition hover:text-white" href="/">Home</a></li>
              <li><a class="transition hover:text-white" href="/index.html#about">About</a></li>
              <li><a class="transition hover:text-white" href="/resources/">Resources</a></li>
              <li><a class="transition hover:text-white" href="/index.html#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-semibold text-white">Services</p>
            <ul class="mt-4 space-y-3 text-sm text-white/75">
              <li><a class="transition hover:text-white" href="./services/concrete-floor-repair/">Concrete Floor Repair</a></li>
              <li><a class="transition hover:text-white" href="./services/industrial-floor-repair/">Industrial Floor Repair</a></li>
              <li><a class="transition hover:text-white" href="./services/warehouse-floor-repair/">Warehouse Floor Repair</a></li>
              <li><a class="transition hover:text-white" href="./services/super-flat-vna-flooring/">Super-flat VNA Flooring</a></li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-semibold text-white">Legal</p>
            <ul class="mt-4 space-y-3 text-sm text-white/75">
              <li><a class="transition hover:text-white" href="#">Terms &amp; Conditions</a></li>
              <li><a class="transition hover:text-white" href="#">Privacy Policy</a></li>
            </ul>

            <div class="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
              <p class="text-xs font-semibold tracking-widest text-[#9bb4e6]">NATIONWIDE SERVICE</p>
              <p class="mt-2 text-sm text-white/80">England &amp; Wales coverage</p>
              <div class="mt-3 h-1 w-full rounded-full bg-white/10">
                <div class="h-1 w-2/3 rounded-full bg-[#2c4a80]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 py-6">
      <div class="flex items-center justify-center text-center">
        <p class="text-xs text-white/65">
          © 2020 - ATB Industrial Ltd. All right reserved. Industrial &amp; Commercial Concrete Floor Repair &amp; Resin Coating Contractors.
        </p>
      </div>
    </div>
  </div>
</footer>
`;