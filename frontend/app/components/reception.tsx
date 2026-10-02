import Image from "next/image";

export default function Reception() {
  const imagePath = "/images/casitas-resort.jpg";

  const mapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=14.4713584,120.8897564";

  return (
    <section className="min-h-screen bg-[#eee9e6] px-0 flex justify-center snap-start snap-always">
      <div className="relative w-full max-w-5xl min-h-screen overflow-hidden bg-[#fffaf7] text-[#6f5960] flex items-center justify-center px-6 py-16">

        {/* Decorative elements */}
        <div className="absolute -top-24 -left-12 text-[120px] opacity-10">
          🌸
        </div>

        <div className="absolute -bottom-22 -right-12 text-[120px] opacity-10">
          🌸
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">

          {/* Section heading */}
          <p className="font-body text-xs tracking-[0.35em] uppercase text-[#a98691]">
            Celebrate With Us
          </p>

          <h2 className="font-accent mt-3 text-6xl text-[#70535d]">
            Reception
          </h2>

          {/* Decorative line */}
          <div className="flex items-center gap-3 my-6">
            <span className="h-px w-12 bg-[#d9b8c2]" />
            <span className="text-[#c69aa8]">✦</span>
            <span className="h-px w-12 bg-[#d9b8c2]" />
          </div>

          {/* Resort Image */}
          <div className="relative w-full max-w-xl">

            {/* Decorative frame */}
            <div className="absolute -inset-2 border border-[#e5cbd2]" />

            <div className="relative overflow-hidden bg-white p-2 shadow-[0_15px_45px_rgba(120,80,90,0.12)]">
              <Image
                src={imagePath}
                alt="Casitas Resort Quatro"
                width={800}
                height={500}
                className="w-full h-70 sm:h-87.5 object-cover"
              />
            </div>

          </div>

          {/* Reception Information */}
          <div className="mt-10">

            <h3 className="font-heading text-3xl sm:text-4xl text-[#70535d]">
              Casitas Resort Quatro
            </h3>

            {/* Decorative divider */}
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
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-7 px-7 py-3 border border-[#c69aa8] text-[#70535d] font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#70535d] hover:text-white"
            >
              <span>♡</span>
              Get Directions
            </a>

            <p className="font-accent text-xl sm:text-3xl mt-7 text-[#8b747b]">
              Join us for a joyful celebration
              <br className="sm:block hidden" />
              after the ceremony.
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