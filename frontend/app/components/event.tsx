import Image from "next/image";

export default function Event() {
  return (
    <section className="min-h-screen bg-[#eee9e6] px-0 flex justify-center snap-start snap-always">
      <div className="relative w-full max-w-5xl min-h-screen overflow-hidden bg-[#fffaf7] text-[#6f5960] flex items-center justify-center px-6 py-16">

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-10 text-[120px] opacity-10">
          🌸
        </div>

        <div className="absolute -bottom-22 -left-12 text-[120px] opacity-10">
          🌸
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">

          {/* Section heading */}
          <p className="font-body text-xs tracking-[0.35em] uppercase text-[#a98691]">
            Save the Date
          </p>

          <h2 className="font-accent mt-3 text-6xl sm:text-6xl text-[#70535d]">
            Event Details
          </h2>

          {/* Decorative line */}
          <div className="flex items-center gap-3 my-6">
            <span className="h-px w-12 bg-[#d9b8c2]" />
            <span className="text-[#c69aa8]">✦</span>
            <span className="h-px w-12 bg-[#d9b8c2]" />
          </div>

          {/* Church Image */}
          <div className="relative w-full max-w-xl">

            {/* Decorative frame */}
            <div className="absolute -inset-2 border border-[#e5cbd2]" />

            <div className="relative overflow-hidden bg-white p-2 shadow-[0_15px_45px_rgba(120,80,90,0.12)]">
              <Image
                src="/images/church.jpg"
                alt="San Roque Church"
                width={800}
                height={500}
                className="w-full h-70 sm:h-87.5 object-cover"
              />
            </div>

          </div>

          {/* Event information */}
          <div className="mt-10">

            <p className="font-heading text-3xl sm:text-4xl text-[#70535d]">
              Sunday, October 25, 2026
            </p>

            <div className="flex items-center justify-center gap-4 my-4">
              <span className="h-px w-8 bg-[#d9b8c2]" />
              <span className="text-[#c69aa8] text-sm">♡</span>
              <span className="h-px w-8 bg-[#d9b8c2]" />
            </div>

            <p className="font-body text-sm tracking-[0.25em] uppercase text-[#a98691]">
              10:30 AM
            </p>

            <p className="font-heading text-2xl sm:text-3xl mt-3 text-[#70535d]">
              San Roque Church
            </p>
            <p className="font-body leading-loose text-sm mt-0 text-[#70535d]">
              P.Burgos St, Sta Cruz, Cavite City
            </p>

            <p className="font-accent text-xl sm:text-3xl mt-2 text-[#8b747b]">
              We would be delighted to have you join us
              <br className="sm:block hidden" />
              as we celebrate this special day.
            </p>

          </div>

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