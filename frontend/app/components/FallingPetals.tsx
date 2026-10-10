"use client";

const petals = [
  { left: 3, duration: 18, size: 16, drift: 35, rotate: 20, opacity: 0.32 },
  { left: 9, duration: 23, size: 11, drift: -45, rotate: 80, opacity: 0.25 },
  { left: 16, duration: 20, size: 14, drift: 55, rotate: 140, opacity: 0.28 },
  { left: 24, duration: 25, size: 10, drift: -35, rotate: 210, opacity: 0.23 },
  { left: 31, duration: 21, size: 17, drift: 45, rotate: 40, opacity: 0.30 },
  { left: 39, duration: 24, size: 12, drift: -55, rotate: 120, opacity: 0.24 },
  { left: 47, duration: 19, size: 15, drift: 40, rotate: 260, opacity: 0.27 },
  { left: 55, duration: 27, size: 10, drift: -45, rotate: 180, opacity: 0.22 },
  { left: 63, duration: 22, size: 16, drift: 50, rotate: 310, opacity: 0.29 },
  { left: 70, duration: 20, size: 11, drift: -40, rotate: 90, opacity: 0.25 },
  { left: 77, duration: 25, size: 14, drift: 45, rotate: 230, opacity: 0.27 },
  { left: 84, duration: 19, size: 10, drift: -50, rotate: 150, opacity: 0.23 },
  { left: 92, duration: 23, size: 15, drift: 35, rotate: 280, opacity: 0.30 },

  { left: 13, duration: 28, size: 9, drift: -40, rotate: 60, opacity: 0.21 },
  { left: 20, duration: 22, size: 12, drift: 40, rotate: 170, opacity: 0.23 },
  { left: 36, duration: 25, size: 10, drift: -45, rotate: 250, opacity: 0.25 },
  { left: 44, duration: 21, size: 13, drift: 55, rotate: 200, opacity: 0.26 },
  { left: 59, duration: 23, size: 13, drift: 35, rotate: 70, opacity: 0.24 },
  { left: 68, duration: 24, size: 9, drift: -35, rotate: 330, opacity: 0.24 },
  { left: 81, duration: 21, size: 11, drift: -50, rotate: 300, opacity: 0.25 },
  { left: 88, duration: 26, size: 12, drift: 50, rotate: 110, opacity: 0.28 },
];

export default function FallingPetals() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    >
      {petals.map((petal, index) => (
        <span
          key={index}
          className="absolute -top-12 will-change-transform"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.45}px`,
            opacity: petal.opacity,

            animationName: "petalFall",
            animationDuration: `${petal.duration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",

            // IMPORTANT:
            // No negative animationDelay.
            // Every petal starts immediately after refresh.
            animationDelay: "0s",

            ["--drift" as string]: `${petal.drift}px`,
            ["--rotation" as string]: `${petal.rotate}deg`,
          }}
        >
          <svg
            viewBox="0 0 24 34"
            className="w-full h-full"
            style={{
              filter:
                "drop-shadow(0 2px 4px rgba(180, 120, 140, 0.10))",
            }}
          >
            <defs>
              <linearGradient
                id={`petalGradient-${index}`}
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#f8dfe6" />
                <stop offset="45%" stopColor="#eabfc9" />
                <stop offset="100%" stopColor="#dcaab8" />
              </linearGradient>
            </defs>

            <path
              d="M12 1 C8 5 3 8 3 15 C3 23 8 30 12 33 C16 30 21 23 21 15 C21 8 16 5 12 1Z"
              fill={`url(#petalGradient-${index})`}
            />

            <path
              d="M12 4 C11 11 11 21 12 29"
              stroke="#fff7f9"
              strokeWidth="1"
              opacity="0.5"
              fill="none"
            />
          </svg>
        </span>
      ))}

      <style jsx>{`
        @keyframes petalFall {
          0% {
            transform: translate3d(0, -60px, 0)
              rotate(var(--rotation));
          }

          20% {
            transform: translate3d(
                var(--drift),
                20vh,
                0
              )
              rotate(calc(var(--rotation) + 80deg));
          }

          40% {
            transform: translate3d(
                calc(var(--drift) * -0.7),
                40vh,
                0
              )
              rotate(calc(var(--rotation) + 160deg));
          }

          60% {
            transform: translate3d(
                calc(var(--drift) * 0.8),
                60vh,
                0
              )
              rotate(calc(var(--rotation) + 240deg));
          }

          80% {
            transform: translate3d(
                calc(var(--drift) * -0.5),
                80vh,
                0
              )
              rotate(calc(var(--rotation) + 300deg));
          }

          100% {
            transform: translate3d(0, 110vh, 0)
              rotate(calc(var(--rotation) + 360deg));
          }
        }
      `}</style>
    </div>
  );
}