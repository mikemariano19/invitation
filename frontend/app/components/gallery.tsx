"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const images = [
  { src: "/images/profile.png", alt: "Bianca Mariano" },
  { src: "/images/gallery1.png", alt: "Bianca Mariano" },
  { src: "/images/gallery2.png", alt: "Bianca Mariano" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const changeImage = useCallback((next: number) => {
    setCurrent((next + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="gallery"
      className="min-h-screen bg-[#eee9e6] px-0 flex justify-center snap-start snap-always"
    >
      <div className="relative w-full max-w-5xl min-h-screen overflow-hidden bg-[#fffaf7]/90 text-[#6f5960] flex items-center justify-center px-6 py-16">

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

          {/* Gallery Carousel — updated only this part */}
          <div className="w-full">

            {/* Featured Image */}
            <div className="relative w-full">

              {/* Decorative frame */}
              <div className="absolute -inset-2 border border-[#e5cbd2]" />

              <div className="relative overflow-hidden bg-white p-2 shadow-[0_15px_45px_rgba(120,80,90,0.12)]">

                {/* Carousel viewport */}
                <div className="relative h-72 sm:h-96 overflow-hidden bg-[#eee9e6]">

                  {/* Blurred background */}
                  {images.map((image, index) => (
                    <div
                      key={`bg-${image.src}`}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === current ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 800px"
                        className="scale-110 object-cover opacity-60 blur-xl"
                      />
                    </div>
                  ))}

                  <div className="absolute inset-0 bg-black/10" />

                  {/* Sliding images */}
                  <div
                    className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(-${current * 100}%)`,
                    }}
                  >
                    {images.map((image) => (
                      <div
                        key={image.src}
                        className="relative h-full w-full flex-none"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 800px"
                          className="object-contain"
                          priority={image.src === images[0].src}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Previous */}
                  <button
                    type="button"
                    onClick={() => changeImage(current - 1)}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/70"
                  >
                    &#10094;
                  </button>

                  {/* Next */}
                  <button
                    type="button"
                    onClick={() => changeImage(current + 1)}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition hover:bg-black/70"
                  >
                    &#10095;
                  </button>

                  {/* Counter */}
                  <div className="absolute bottom-3 right-3 z-20 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
                    {current + 1} / {images.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="mt-5 flex justify-center gap-2">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => changeImage(index)}
                  aria-label={`Go to photo ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-7 bg-[#a98691]"
                      : "w-2.5 bg-[#d9b8c2] hover:bg-[#a98691]"
                  }`}
                />
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