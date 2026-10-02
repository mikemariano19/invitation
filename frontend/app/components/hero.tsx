import Image from "next/image";

export default function Hero() {
  const imagePath = "/images/baby11.jpg";

  return (
    <section className="min-h-screen bg-[#eee9e6] px-0 flex justify-center">
      <div className="relative w-full max-w-5xl min-h-screen overflow-hidden bg-[#fffaf7] text-[#6f5960] flex items-center justify-center px-6 py-16">

        {/* Decorative flowers */}
        <div className="absolute -top-16 -left-16 text-[120px] opacity-10">
          🌸
        </div>

        <div className="absolute -bottom-22 -right-10 text-[120px] opacity-10">
          🌸
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center text-center">

          {/* Small heading */}
          <p className="font-body text-xs tracking-[0.35em] uppercase text-[#a98691]">
            A Little Blessing
          </p>


          {/* Decorative line */}
          <div className="flex items-center gap-3 my-6">
            <span className="h-px w-12 bg-[#d9b8c2]" />
            <span className="text-[#c69aa8]">✦</span>
            <span className="h-px w-12 bg-[#d9b8c2]" />
          </div>

          {/* Baby photo */}
          <div className="relative">

            <div className="absolute -inset-2.5 rounded-full border border-[#e5cbd2]" />

            <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-[0_15px_45px_rgba(120,80,90,0.15)]">
              <Image
                src={imagePath}
                alt="Bianca Mariano"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 240px, 288px"
              />
            </div>

          </div>
          {/* Baby name */}
          <h1 className="font-accent mt-8 text-6xl sm:text-6xl md:text-7xl text-[#70535d] leading-tight">
            Bianca Mariano
          </h1>

          {/* Date */}
          <div className="mt-0">

            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#a98691]">
              Our Christening Day
            </p>

            <p className="font-heading text-2xl sm:text-3xl mt-3 text-[#70535d]">
              Sunday, October 25, 2026
            </p>

          </div>

          {/* Invitation text */}
          <p className="font-accent mt-5 max-w-md sm:text-3xl text-xl leading-relaxed text-[#8b747b]">
            With grateful hearts, we invite you to celebrate
            <br className="hidden sm:block" />
            this beautiful milestone with our little blessing.
          </p>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-2 opacity-60">
            <span className="text-[10px] uppercase tracking-[0.25em]">
              Scroll to explore
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