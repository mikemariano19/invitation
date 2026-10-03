import Image from "next/image";

const images = [
  {
    src: "/images/baby1.jpg",
    alt: "Bianca Mariano",
  },
  {
    src: "/images/baby2.jpg",
    alt: "Bianca Mariano",
  },
  {
    src: "/images/baby3.jpg",
    alt: "Bianca Mariano",
  },
  {
    src: "/images/baby4.jpg",
    alt: "Bianca Mariano",
  },
  {
    src: "/images/baby5.jpg",
    alt: "Bianca Mariano",
  },
];

export default function Gallery() {
  return (
    <section className="min-h-screen bg-[#eee9e6] px-0 flex justify-center snap-start snap-always">
      <div className="relative w-full max-w-5xl min-h-screen overflow-hidden bg-[#fffaf7] text-[#6f5960] flex items-center justify-center px-6 py-16">

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-10 text-[120px] opacity-10 pointer-events-none">
          🌸
        </div>

        <div className="absolute -bottom-22 -left-12 text-[120px] opacity-10 pointer-events-none">
          🌸
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">

          {/* Heading */}
          <p className="font-body text-xs sm:text-xl tracking-[0.35em] uppercase text-[#a98691]">
            Precious Moments
          </p>

          <h2 className="font-accent mt-3 text-6xl text-[#70535d]">
            Gallery
          </h2>

          {/* Decorative line */}
          <div className="flex items-center gap-3 my-6">
            <span className="h-px w-12 bg-[#d9b8c2]" />
            <span className="text-[#c69aa8]">✦</span>
            <span className="h-px w-12 bg-[#d9b8c2]" />
          </div>

          {/* Gallery */}
          <div className="w-full">

            {/* Featured Image */}
            <div className="relative w-full">

              {/* Decorative frame */}
              <div className="absolute -inset-2 border border-[#e5cbd2]" />

              <div className="relative overflow-hidden bg-white p-2 shadow-[0_15px_45px_rgba(120,80,90,0.12)]">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  width={800}
                  height={600}
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>

            </div>

            {/* Smaller Images */}
            <div className="grid grid-cols-2 gap-4 mt-6">

              {images.slice(1).map((image) => (
                <div
                  key={image.src}
                  className="relative"
                >
                  {/* Decorative frame */}
                  <div className="absolute -inset-1 border border-[#e5cbd2]" />

                  <div className="relative overflow-hidden bg-white p-1.5 shadow-[0_10px_30px_rgba(120,80,90,0.10)]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={500}
                      className="w-full h-40 sm:h-52 object-cover"
                    />
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Caption */}
          <p className="font-accent text-xl sm:text-3xl mt-10 text-[#8b747b]">
            Little moments that make
            <br />
            our hearts full.
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