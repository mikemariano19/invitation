"use client";

import Image from "next/image";
import { useState } from "react";

export default function SafetyAndGifts() {
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [giftMethod, setGiftMethod] = useState<"number" | "qr">("number");
  const [copied, setCopied] = useState(false);

  const gcashNumber = "09914662226";
  const gcashName = "EL***A D.";

  const copyGcashNumber = async () => {
    await navigator.clipboard.writeText(gcashNumber.replace(/\s/g, ""));
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-[#eee9e6] px-0 flex justify-center snap-start snap-always">

      <div className="relative w-full max-w-5xl min-h-screen overflow-hidden bg-[#fffaf7] text-[#6f5960] flex items-center justify-center px-6 py-16">

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-12 text-[120px] opacity-10 pointer-events-none z-0">
          🌸
        </div>

        <div className="absolute -bottom-22 -left-12 text-[120px] opacity-10 pointer-events-none z-0">
          🌸
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-4xl flex flex-col items-center text-center">

          {/* Heading */}
          <p className="font-body text-xs sm:text-xl tracking-[0.35em] uppercase text-[#a98691]">
            A Few Gentle Notes
          </p>

          <h2 className="font-accent mt-3 text-6xl sm:text-7xl text-[#70535d]">
            For Our Guests
          </h2>

          {/* Decorative line */}
          <div className="flex items-center gap-3 my-6">
            <span className="h-px w-12 bg-[#d9b8c2]" />
            <span className="text-[#c69aa8]">✦</span>
            <span className="h-px w-12 bg-[#d9b8c2]" />
          </div>

          {/* Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

            {/* Safety Protocols */}
            <div className="border border-[#e5cbd2] bg-white/60 px-7 py-8 sm:px-10 sm:py-10">

              <div className="text-3xl text-[#c69aa8] mb-4">
                ♡
              </div>

              <h3 className="font-heading text-3xl text-[#70535d]">
                Safety & Comfort
              </h3>

              <div className="flex items-center justify-center gap-3 my-5">
                <span className="h-px w-8 bg-[#d9b8c2]" />
                <span className="text-[#c69aa8] text-sm">✦</span>
                <span className="h-px w-8 bg-[#d9b8c2]" />
              </div>

              <p className="font-body text-sm leading-7 text-[#70535d]">
                To keep our little one and all our guests comfortable,
                we kindly ask everyone to observe these simple reminders:
              </p>

              <div className="mt-6 space-y-4 text-left">

                <div className="flex gap-3">
                  <span className="text-[#c69aa8]">♡</span>
                  <p className="font-body text-sm leading-6">
                    Please stay home if you are feeling unwell.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#c69aa8]">♡</span>
                  <p className="font-body text-sm leading-6">
                    Kindly sanitize or wash your hands before holding the baby.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#c69aa8]">♡</span>
                  <p className="font-body text-sm leading-6">
                    Please avoid kissing the baby on the face or hands.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#c69aa8]">♡</span>
                  <p className="font-body text-sm leading-6">
                    Give our little one some space if she becomes tired or fussy.
                  </p>
                </div>

              </div>

              <p className="font-accent text-xl mt-7 text-[#8b747b]">
                Thank you for helping us keep
                <br />
                our little blessing safe.
              </p>

            </div>

            {/* Gift Guide */}
            <div className="border border-[#e5cbd2] bg-white/60 px-7 py-8 sm:px-10 sm:py-10">

              <div className="text-3xl text-[#c69aa8] mb-4">
                🎁
              </div>

              <h3 className="font-heading text-3xl text-[#70535d]">
                Gift Guide
              </h3>

              <div className="flex items-center justify-center gap-3 my-5">
                <span className="h-px w-8 bg-[#d9b8c2]" />
                <span className="text-[#c69aa8] text-sm">✦</span>
                <span className="h-px w-8 bg-[#d9b8c2]" />
              </div>

              <p className="font-body text-sm leading-7 text-[#70535d]">
                Your presence is already the greatest gift.
                But if you wish to give something for our little one,
                here are a few things we would truly appreciate.
              </p>

              {/* Gift List */}
              <div className="mt-6 space-y-4 text-left">

                <div className="flex gap-3">
                  <span className="text-[#c69aa8]">♡</span>
                  <p className="font-body text-sm leading-6">
                    Cetaphil Baby Gentle Wash
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#c69aa8]">♡</span>
                  <p className="font-body text-sm leading-6">
                    EQ Dry diapers (Large)
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-[#c69aa8]">♡</span>
                  <p className="font-body text-sm leading-6">
                    Educational toys and books suitable for a 1-year-old
                  </p>
                </div>

              </div>

              {/* Monetary Gift Button */}
              <button
                type="button"
                onClick={() => setShowGiftModal(true)}
                className="mt-8 w-full border border-[#d9b8c2] bg-[#fffaf7] px-5 py-4
                           transition hover:bg-[#fdf1f4] cursor-pointer
                           focus:outline-none focus:ring-2 focus:ring-[#d9b8c2]"
              >
                <span className="block font-heading text-2xl text-[#70535d]">
                  Monetary Gift
                </span>

                <span className="block font-body text-xs mt-1 tracking-wide text-[#a98691]">
                  GCash • Tap to view details
                </span>
              </button>

              <p className="font-accent text-xl mt-7 text-[#8b747b]">
                Most of all, thank you for celebrating
                <br />
                this precious milestone with us.
              </p>

            </div>

          </div>

          {/* Bottom message */}
          <div className="mt-10">
            <p className="font-accent text-xl sm:text-2xl text-[#8b747b]">
              With love, gratitude &amp; blessings
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

      {/* =========================================================
          MONETARY GIFT MODAL
      ========================================================= */}

      {showGiftModal && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center px-5 py-8 bg-[#4b3c42]/50 backdrop-blur-sm"
          onClick={() => setShowGiftModal(false)}
        >
          <div
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#fffaf7] border border-[#e5cbd2] shadow-[0_20px_60px_rgba(80,50,60,0.25)] px-6 py-8 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setShowGiftModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                         text-[#8b747b] hover:text-[#70535d] hover:bg-[#f7e9ed]
                         rounded-full cursor-pointer transition"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Modal heading */}
            <div className="text-center">

              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#a98691]">
                A Little Something
              </p>

              <h3 className="font-accent text-4xl mt-2 text-[#70535d]">
                Monetary Gift
              </h3>

              <div className="flex items-center justify-center gap-3 my-5">
                <span className="h-px w-10 bg-[#d9b8c2]" />
                <span className="text-[#c69aa8] text-sm">♡</span>
                <span className="h-px w-10 bg-[#d9b8c2]" />
              </div>

              <p className="font-body text-xs leading-6 text-[#8b747b]">
                Your presence is already more than enough.
                If you wish to bless Bianca with a monetary gift,
                you may use either option below.
              </p>

            </div>

            {/* Method Toggle */}
            <div className="grid grid-cols-2 mt-6 border border-[#e5cbd2]">

              <button
                type="button"
                onClick={() => setGiftMethod("number")}
                className={`py-3 font-body text-xs tracking-wide transition cursor-pointer ${
                  giftMethod === "number"
                    ? "bg-[#ead3da] text-[#70535d]"
                    : "bg-transparent text-[#a98691] hover:bg-[#fdf1f4]"
                }`}
              >
                GCash Number
              </button>

              <button
                type="button"
                onClick={() => setGiftMethod("qr")}
                className={`py-3 font-body text-xs tracking-wide transition cursor-pointer ${
                  giftMethod === "qr"
                    ? "bg-[#ead3da] text-[#70535d]"
                    : "bg-transparent text-[#a98691] hover:bg-[#fdf1f4]"
                }`}
              >
                QR Code
              </button>

            </div>

            {/* GCash Number */}
            {giftMethod === "number" && (
              <div className="mt-6 text-center">

                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#a98691]">
                  GCash Account Name
                </p>

                <p className="font-heading text-2xl mt-1 text-[#70535d]">
                  {gcashName}
                </p>

                <p className="font-body text-[10px] uppercase tracking-[0.25em] mt-6 text-[#a98691]">
                  GCash Number
                </p>

                <p className="font-heading text-3xl mt-1 tracking-wide text-[#70535d]">
                  {gcashNumber}
                </p>

                {/* Copy */}
                <button
                  type="button"
                  onClick={copyGcashNumber}
                  className="mt-5 inline-flex items-center justify-center gap-2
                             border border-[#d9b8c2] px-6 py-3
                             font-body text-xs text-[#70535d]
                             hover:bg-[#fdf1f4] transition cursor-pointer"
                >
                  {copied ? "✓ Number Copied" : "Copy GCash Number"}
                </button>

                <p className="font-body text-[10px] mt-4 text-[#a98691]">
                  Tap the button to copy the number
                </p>

              </div>
            )}

            {/* QR Code */}
            {giftMethod === "qr" && (
              <div className="mt-6 text-center">

                <div className="inline-block bg-white p-3 border border-[#ead8dd] shadow-sm">

                  <Image
                    src="/images/gcash-qr2.png"
                    alt="GCash QR Code"
                    width={220}
                    height={220}
                    className="w-52 h-52 object-contain"
                  />

                </div>

                <p className="font-body text-[10px] uppercase tracking-[0.25em] mt-4 text-[#a98691]">
                  Scan to send via GCash
                </p>

                <p className="font-heading text-xl mt-2 text-[#70535d]">
                  {gcashName}
                </p>

              </div>
            )}

            {/* Closing */}
            <p className="font-accent text-lg text-center mt-7 text-[#8b747b]">
              Thank you for your love and generosity. ♡
            </p>

          </div>
        </div>
      )}

    </section>
  );
}