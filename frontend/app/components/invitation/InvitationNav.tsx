"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Welcome", icon: "✦" },
  { id: "event", label: "Event Details", icon: "♡" },
  { id: "for our guests", label: "For Our Guests", icon: "♡" },
  { id: "gallery", label: "Gallery", icon: "♡" },
  { id: "countdown", label: "Countdown", icon: "♡" },
];

export default function InvitationNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Detect which section is currently visible
  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.4, 0.6, 0.8],
      }
    );

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu with Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const goToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Navigation Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open invitation menu"
        className="
          fixed
          right-5
          bottom-5
          z-80
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-[#d9b8c2]/70
          bg-[#fffaf7]/75
          text-[#70535d]
          shadow-[0_5px_20px_rgba(100,70,80,0.12)]
          backdrop-blur-md
          transition-all
          duration-300
          hover:bg-[#fffaf7]
          hover:scale-105
          active:scale-95
        "
      >
        <span className="text-lg leading-none">
          ☰
        </span>
      </button>

      {/* Overlay */}
      <div
        className={`
          fixed
          inset-0
          z-90
          bg-[#4b3c42]/30
          backdrop-blur-[2px]
          transition-opacity
          duration-300
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Bottom Sheet */}
      <div
        className={`
          fixed
          bottom-0
          left-0
          right-0
          z-100
          flex
          justify-center
          transition-transform
          duration-300
          ease-out
          ${isOpen ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div
          className="
            relative
            w-full
            max-w-5xl
            rounded-t-[2rem]
            border
            border-[#e5cbd2]
            bg-[#fffaf7]
            px-6
            pb-8
            pt-7
            shadow-[0_-15px_50px_rgba(80,50,60,0.15)]
          "
          onClick={(event) => event.stopPropagation()}
        >

          {/* Decorative flower */}
          <div className="pointer-events-none absolute -right-8 -top-10 text-[90px] opacity-[0.07]">
            🌸
          </div>

          {/* Handle */}
          <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-[#d9b8c2]" />

          {/* Header */}
          <div className="relative text-center">

            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-[#a98691]">
              Bianca Mariano
            </p>

            <h2 className="font-accent mt-1 text-4xl text-[#70535d]">
              Invitation
            </h2>

            <div className="my-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#d9b8c2]" />
              <span className="text-xs text-[#c69aa8]">✦</span>
              <span className="h-px w-10 bg-[#d9b8c2]" />
            </div>

          </div>

          {/* Navigation */}
          <nav className="relative mx-auto grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-3">

            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToSection(section.id)}
                  className={`
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    transition-all
                    duration-200
                    cursor-pointer
                    ${
                      isActive
                        ? "bg-[#f3e2e7] text-[#70535d]"
                        : "text-[#8b747b] hover:bg-[#fdf1f4]"
                    }
                  `}
                >
                  <span
                    className={`
                      text-sm transition-transform duration-200
                      ${isActive ? "text-[#c69aa8] scale-110" : ""}
                    `}
                  >
                    {section.icon}
                  </span>

                  <span className="font-body text-xs">
                    {section.label}
                  </span>
                </button>
              );
            })}

          </nav>

          {/* Bottom actions */}
          <div className="relative mt-6 flex items-center justify-center gap-5">

            <button
              type="button"
              onClick={goToTop}
              className="
                font-body
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#a98691]
                transition
                hover:text-[#70535d]
                cursor-pointer
              "
            >
              ↑ Back to Beginning
            </button>

            <span className="text-[#d9b8c2]">|</span>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="
                font-body
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#a98691]
                transition
                hover:text-[#70535d]
                cursor-pointer
              "
            >
              Close
            </button>

          </div>

        </div>
      </div>
    </>
  );
}