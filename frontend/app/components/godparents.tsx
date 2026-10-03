export default function Godparents() {
  const godmothers = [
    "Maria Santos",
    "Angela Reyes",
    "Catherine Cruz",
    "Patricia Garcia",
    "Samantha Mendoza",
    "Nicole Ramirez",
  ];

  const godfathers = [
    "John Santos",
    "Michael Reyes",
    "Christian Cruz",
    "Patrick Garcia",
    "Daniel Mendoza",
    "Anthony Ramirez",
  ];

  return (
    <section className="min-h-screen bg-[#eee9e6] px-0 flex justify-center snap-start snap-always">
      <div className="relative w-full max-w-5xl min-h-screen overflow-hidden bg-[#fffaf7] text-[#6f5960] flex items-center justify-center px-6 py-16">

        {/* Decorative elements */}
        <div className="absolute -top-24 -left-14 text-[120px] opacity-10 pointer-events-none">
          🌸
        </div>

        <div className="absolute -bottom-20 -right-14 text-[120px] opacity-10 pointer-events-none">
          🌸
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">

          {/* Heading */}
          <p className="font-body text-xs sm:text-sm tracking-[0.35em] uppercase text-[#a98691]">
            With Love &amp; Gratitude
          </p>

          <h2 className="font-accent mt-3 text-6xl sm:text-7xl text-[#70535d]">
            Godparents
          </h2>

          {/* Decorative line */}
          <div className="flex items-center gap-3 my-6">
            <span className="h-px w-12 bg-[#d9b8c2]" />
            <span className="text-[#c69aa8]">✦</span>
            <span className="h-px w-12 bg-[#d9b8c2]" />
          </div>

          {/* Intro */}
          <p className="font-body text-sm leading-7 max-w-2xl text-[#70535d]">
            We are grateful to have these wonderful people
            <br className="hidden sm:block" />
            as special witnesses and guides in Bianca&apos;s life.
          </p>

          {/* Godparents */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

            {/* Godmothers */}
            <div className="border border-[#e5cbd2] bg-white/60 px-7 py-8 sm:px-10 sm:py-10">

              <div className="text-3xl text-[#c69aa8] mb-3">
                ♡
              </div>

              <h3 className="font-heading text-3xl text-[#70535d]">
                Godmothers
              </h3>

              <div className="flex items-center justify-center gap-3 my-5">
                <span className="h-px w-8 bg-[#d9b8c2]" />
                <span className="text-[#c69aa8] text-sm">✦</span>
                <span className="h-px w-8 bg-[#d9b8c2]" />
              </div>

              <div className="space-y-4">
                {godmothers.map((name) => (
                  <div
                    key={name}
                    className="border-b border-[#ead8dd] pb-3 last:border-0"
                  >
                    <p className="font-heading text-xl sm:text-2xl text-[#70535d]">
                      {name}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Godfathers */}
            <div className="border border-[#e5cbd2] bg-white/60 px-7 py-8 sm:px-10 sm:py-10">

              <div className="text-3xl text-[#c69aa8] mb-3">
                ♡
              </div>

              <h3 className="font-heading text-3xl text-[#70535d]">
                Godfathers
              </h3>

              <div className="flex items-center justify-center gap-3 my-5">
                <span className="h-px w-8 bg-[#d9b8c2]" />
                <span className="text-[#c69aa8] text-sm">✦</span>
                <span className="h-px w-8 bg-[#d9b8c2]" />
              </div>

              <div className="space-y-4">
                {godfathers.map((name) => (
                  <div
                    key={name}
                    className="border-b border-[#ead8dd] pb-3 last:border-0"
                  >
                    <p className="font-heading text-xl sm:text-2xl text-[#70535d]">
                      {name}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Bottom message */}
          <div className="mt-10">
            <p className="font-accent text-xl sm:text-2xl text-[#8b747b]">
              Thank you for being part of Bianca&apos;s journey.
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-8 flex flex-col items-center gap-2 opacity-50">
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