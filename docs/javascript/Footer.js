const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="relative overflow-hidden bg-slate-950">
  <img src="/docs/assets/images/hero/footer.webp" width="1153" height="769" alt="" class="absolute inset-0 h-full w-full object-cover opacity-30" />
  <div class="absolute inset-0 bg-black/30"></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-10 py-14 lg:grid-cols-12">
      <div class="lg:col-span-10">
        <div class="flex items-center gap-3">
          <h2 class="text-white font-extrabold text-2xl sm:text-3xl leading-tight">GB Industrial Flooring Group</h2>
        </div>

        <p class="mt-5 max-w-4xl text-sm sm:text-base leading-relaxed text-white/75">
          Concrete floor repair & renovation for commercial and industrial buildings across the UK.
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-3">
          <a href="mailto:enquiry@industrialfloorcontractors.co.uk" class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <i class="fa-solid fa-envelope text-[#9bb4e6]"></i>
            enquiry@industrialfloorcontractors.co.uk
          </a>
          <a href="tel:03333449598" class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <i class="fa-solid fa-phone text-[#9bb4e6]"></i>
            0333 344 9598
          </a>
        </div>
        
      </div>

      <div class="lg:col-span-2">
        <div class="grid gap-8">
          
        

          <div>
            <p class="text-sm font-semibold text-white mt-6"">Legal</p>
            <ul class="mt-4 space-y-3 text-sm text-white/75">
              <li><a class="transition hover:text-white" href="#">Terms &amp; Conditions</a></li>
              <li><a class="transition hover:text-white" href="#">Privacy Policy</a></li>
            </ul>
            <!--
            <div class="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
              <p class="text-xs font-semibold tracking-widest text-[#9bb4e6]">NATIONWIDE SERVICE</p>
              <p class="mt-2 text-sm text-white/80">England &amp; Wales coverage</p>
              <div class="mt-3 h-1 w-full rounded-full bg-white/10">
                <div class="h-1 w-2/3 rounded-full bg-[#2c4a80]"></div>
              </div>
            </div>
            -->
          </div>
        </div>

      </div>
    </div>

    <div class="border-t border-white/10 py-6">
      <div class="flex items-center justify-center text-center">
        <p class="text-xs text-white/65">
        © ${new Date().getFullYear()} - GB Industrial Flooring Group - All rights reserved &nbsp; | &nbsp; Industrial &amp; Commercial Concrete Floor Repair &amp; Renovation Contractors.
        </p>
      </div>
    </div>
  </div>
</footer>
`;
