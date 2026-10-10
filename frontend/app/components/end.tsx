"use client";

import { useEffect, useState } from "react";

export default function End() {
  const targetDate = new Date("October 25, 2026 10:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="min-h-screen bg-[#eee9e6] px-0 flex justify-center snap-start snap-always">
      <div className="relative w-full max-w-5xl min-h-screen overflow-hidden bg-[#fffaf7]/90 text-[#6f5960] flex items-center justify-center px-6 py-16">

        {/* Decorative flowers */}
        <div className="absolute -top-24 -left-12 text-[120px] opacity-10 pointer-events-none">
          🌸
        </div>

        <div className="absolute -bottom-24 -right-12 text-[120px] opacity-10 pointer-events-none">
          🌸
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-3xl flex flex-col items-center text-center">

          {/* Small heading */}
          <p className="font-body  text-xs sm:text-xl tracking-[0.35em] uppercase text-[#a98691]">
            The Big Day Is Almost Here
          </p>

          <h2 className="font-accent mt-4 text-6xl sm:text-7xl text-[#70535d]">
            Counting Down
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center gap-3 my-6">
            <span className="h-px w-12 bg-[#d9b8c2]" />
            <span className="text-[#c69aa8]">✦</span>
            <span className="h-px w-12 bg-[#d9b8c2]" />
          </div>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-2 sm:gap-5 mt-4 w-full max-w-2xl">

            {/* Days */}
            <div className="border border-[#e5cbd2] bg-white/60 px-2 py-5 sm:px-6 sm:py-7">
              <p className="font-heading text-4xl sm:text-6xl text-[#70535d]">
                {timeLeft.days}
              </p>

              <p className="font-body text-[9px] sm:text-xs tracking-[0.2em] uppercase text-[#a98691] mt-2">
                Days
              </p>
            </div>

            {/* Hours */}
            <div className="border border-[#e5cbd2] bg-white/60 px-2 py-5 sm:px-6 sm:py-7">
              <p className="font-heading text-4xl sm:text-6xl text-[#70535d]">
                {String(timeLeft.hours).padStart(2, "0")}
              </p>

              <p className="font-body text-[9px] sm:text-xs tracking-[0.2em] uppercase text-[#a98691] mt-2">
                Hours
              </p>
            </div>

            {/* Minutes */}
            <div className="border border-[#e5cbd2] bg-white/60 px-2 py-5 sm:px-6 sm:py-7">
              <p className="font-heading text-4xl sm:text-6xl text-[#70535d]">
                {String(timeLeft.minutes).padStart(2, "0")}
              </p>

              <p className="font-body text-[9px] sm:text-xs tracking-[0.2em] uppercase text-[#a98691] mt-2">
                Minutes
              </p>
            </div>

            {/* Seconds */}
            <div className="border border-[#e5cbd2] bg-white/60 px-2 py-5 sm:px-6 sm:py-7">
              <p className="font-heading text-4xl sm:text-6xl text-[#70535d]">
                {String(timeLeft.seconds).padStart(2, "0")}
              </p>

              <p className="font-body text-[9px] sm:text-xs tracking-[0.2em] uppercase text-[#a98691] mt-2">
                Seconds
              </p>
            </div>

          </div>

          {/* Baby name */}
          <div className="mt-12">

            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#a98691]">
              Until We Celebrate
            </p>

            <h3 className="font-accent text-5xl sm:text-6xl mt-3 text-[#70535d]">
              Bianca Mariano
            </h3>

            <div className="flex items-center justify-center gap-3 my-5">
              <span className="h-px w-10 bg-[#d9b8c2]" />
              <span className="text-[#c69aa8]">♡</span>
              <span className="h-px w-10 bg-[#d9b8c2]" />
            </div>

            <p className="font-heading text-xl sm:text-2xl text-[#70535d]">
              October 25, 2026
            </p>

            <p className="font-body text-sm tracking-[0.15em] uppercase text-[#a98691] mt-2">
              A Day Filled With Love &amp; Blessings
            </p>

          </div>

          {/* Closing message */}
          <div className="mt-10 max-w-xl">

            <p className="font-accent text-2xl sm:text-3xl leading-relaxed text-[#8b747b]">
              We are so grateful to have you
              <br className="hidden sm:block" />
              be part of this special day.
            </p>

            <p className="font-body text-sm leading-7 mt-5 text-[#70535d]">
              Thank you for celebrating with our family
              and for surrounding our little one with
              your love, prayers, and blessings.
            </p>

          </div>

          {/* Final heart */}
          <div className="mt-10 text-[#c69aa8] text-2xl">
            ♡
          </div>

          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-[#a98691] mt-3">
            With love, The Mariano Family
          </p>

        </div>
      </div>
    </section>
  );
}