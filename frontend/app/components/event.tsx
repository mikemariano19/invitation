import Image from "next/image";

export default function Event() {
  const receptionMapsUrl =
    "https://www.google.com/maps/dir//405+Ejercito,+Santa+Cruz,+Cavite/@14.4715668,120.8896999,18.75z/data=!4m18!1m8!3m7!1s0x339632b179af700f:0x7e2a08fb52c892c4!2s405+Ejercito,+Santa+Cruz,+Cavite!3b1!8m2!3d14.4713584!4d120.8897564!16s%2Fg%2F11jsqltgmn!4m8!1m0!1m5!1m1!1s0x339632b179af700f:0x7e2a08fb52c892c4!2m2!1d120.8897564!2d14.4713584!3e0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D";
 const churchMapsUrl =
  "https://www.google.com/maps/dir//Diocesan+Shrine+of+Our+Lady+of+Solitude+of+Porta+Vaga+(San+Roque+Parish+Church),+P.+Burgos+Ave,+San+Roque,+Cavite/@14.4800883,120.8985765,17z/data=!4m17!1m7!3m6!1s0x3397cd342c9767d1:0x36118e1d5bc35282!2sDiocesan+Shrine+of+Our+Lady+of+Solitude+of+Porta+Vaga+(San+Roque+Parish+Church)!8m2!3d14.4800883!4d120.9011514!16s%2Fg%2F11bxfwr44z!4m8!1m0!1m5!1m1!1s0x3397cd342c9767d1:0x36118e1d5bc35282!2m2!1d120.901147!2d14.480305!3e0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="event" className="min-h-screen bg-[#eee9e6] px-0 flex justify-center snap-start snap-always">
      <div className="relative w-full max-w-5xl min-h-screen overflow-hidden bg-[#fffaf7]/90 text-[#6f5960] flex items-center justify-center px-6 py-16">

        {/* Decorative flowers */}
        <div className="absolute z-0 -top-17 -right-10 text-[120px] opacity-10 leading-none pointer-events-none">
          🌸
        </div>

        <div className="absolute z-0 -bottom-17 -left-12 text-[120px] opacity-10 leading-none pointer-events-none">
          🌸
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">

          {/* Section heading */}
          <p className="font-body text-xs sm:text-xl tracking-[0.35em] uppercase text-[#a98691]">
            Save the Date
          </p>

          <h2 className="font-accent mt-3 text-6xl text-[#70535d]">
            Event Details
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center gap-3 my-6">
            <span className="h-px w-12 bg-[#d9b8c2]" />
            <span className="text-[#c69aa8]">✦</span>
            <span className="h-px w-12 bg-[#d9b8c2]" />
          </div>

          {/* Date */}
          <div className="mb-10">
            <p className="font-heading text-3xl sm:text-4xl text-[#70535d]">
              Sunday, October 25, 2026
            </p>

            <p className="font-body text-sm tracking-[0.25em] uppercase text-[#a98691] mt-3">
              10:30 AM
            </p>
          </div>

          {/* Event cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

            {/* ================= CHURCH ================= */}
            <div className="flex flex-col items-center">

              <p className="font-body text-xs tracking-[0.3em] uppercase text-[#a98691] mb-4">
                The Ceremony
              </p>

              {/* Image */}
              <div className="relative w-full">

                <div className="absolute -inset-2 border border-[#e5cbd2]" />

                <div className="relative overflow-hidden bg-white p-2 shadow-[0_15px_45px_rgba(120,80,90,0.12)]">
                  <Image
                    src="/images/church.jpg"
                    alt="San Roque Church"
                    width={800}
                    height={500}
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                </div>

              </div>

              {/* Church details */}
              <div className="mt-8">

                <h3 className="font-heading text-3xl text-[#70535d]">
                  San Roque Church
                </h3>

                <div className="flex items-center justify-center gap-4 my-4">
                  <span className="h-px w-8 bg-[#d9b8c2]" />
                  <span className="text-[#c69aa8] text-sm">♡</span>
                  <span className="h-px w-8 bg-[#d9b8c2]" />
                </div>

                <p className="font-body text-sm leading-loose text-[#70535d]">
                  P. Burgos St.
                  <br />
                  Sta. Cruz, Cavite City
                </p>

                 {/* Directions */}
                <a
                  href={churchMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-7 py-3 border border-[#c69aa8] text-[#70535d] font-body text-xs tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#70535d] hover:text-white hover:border-[#70535d]"
                >
                  <span>♡</span>
                  Get Directions
                </a>
              </div>
            </div>


            {/* ================= RECEPTION ================= */}
            <div className="flex flex-col items-center">

              <p className="font-body text-xs tracking-[0.3em] uppercase text-[#a98691] mb-4">
                The Celebration
              </p>
              

              {/* Image */}
              <div className="relative w-full">

                <div className="absolute -inset-2 border border-[#e5cbd2]" />

                <div className="relative overflow-hidden bg-white p-2 shadow-[0_15px_45px_rgba(120,80,90,0.12)]">
                  <Image
                    src="/images/casitas-resort.jpg"
                    alt="Casitas Resort Quatro"
                    width={800}
                    height={500}
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                </div>

              </div>

              {/* Reception details */}
              <div className="mt-8">

                <h3 className="font-heading text-3xl text-[#70535d]">
                  Casitas Resort Quatro
                </h3>

                <div className="flex items-center justify-center gap-4 my-4">
                  <span className="h-px w-8 bg-[#d9b8c2]" />
                  <span className="text-[#c69aa8] text-sm">♡</span>
                  <span className="h-px w-8 bg-[#d9b8c2]" />
                </div>

                <p className="font-body text-sm leading-loose text-[#70535d]">
                  405 Ejercito St.
                  <br />
                  Sta. Cruz, Cavite City
                </p>

                {/* Directions */}
                <a
                  href={receptionMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-7 py-3 border border-[#c69aa8] text-[#70535d] font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#70535d] hover:text-white"
                >
                  <span>♡</span>
                  Get Directions
                </a>

              </div>

            </div>

          </div>

          {/* Closing message */}
          <p className="font-accent text-xl sm:text-3xl mt-14 text-[#8b747b]">
            We would be delighted to have you join us
            <br className="hidden sm:block" />
            as we celebrate this special day.
          </p>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-2 opacity-50">
            <span className="text-[10px] uppercase tracking-[0.25em]">
              Continue
            </span>

            <span className="text-lg animate-bounce">
              ↓
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}