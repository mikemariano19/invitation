"use client";

const petals = [
  { left: 3, delay: -4, duration: 19, size: 16, drift: 35, rotate: 20, opacity: 0.32 },
  { left: 9, delay: -13, duration: 24, size: 11, drift: -45, rotate: 80, opacity: 0.25 },
  { left: 16, delay: -8, duration: 21, size: 14, drift: 55, rotate: 140, opacity: 0.28 },
  { left: 24, delay: -18, duration: 27, size: 10, drift: -35, rotate: 210, opacity: 0.23 },
  { left: 31, delay: -6, duration: 22, size: 17, drift: 45, rotate: 40, opacity: 0.30 },
  { left: 39, delay: -20, duration: 25, size: 12, drift: -55, rotate: 120, opacity: 0.24 },
  { left: 47, delay: -11, duration: 20, size: 15, drift: 40, rotate: 260, opacity: 0.27 },
  { left: 55, delay: -16, duration: 28, size: 10, drift: -45, rotate: 180, opacity: 0.22 },
  { left: 63, delay: -3, duration: 23, size: 16, drift: 50, rotate: 310, opacity: 0.29 },
  { left: 70, delay: -14, duration: 21, size: 11, drift: -40, rotate: 90, opacity: 0.25 },
  { left: 77, delay: -22, duration: 26, size: 14, drift: 45, rotate: 230, opacity: 0.27 },
  { left: 84, delay: -7, duration: 20, size: 10, drift: -50, rotate: 150, opacity: 0.23 },
  { left: 92, delay: -17, duration: 24, size: 15, drift: 35, rotate: 280, opacity: 0.30 },
  { left: 13, delay: -24, duration: 29, size: 9, drift: -40, rotate: 60, opacity: 0.21 },
  { left: 44, delay: -2, duration: 22, size: 13, drift: 55, rotate: 200, opacity: 0.26 },
  { left: 68, delay: -10, duration: 25, size: 9, drift: -35, rotate: 330, opacity: 0.24 },
  { left: 88, delay: -19, duration: 27, size: 12, drift: 50, rotate: 110, opacity: 0.28 },
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
          className="absolute -top-12"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.45}px`,
            opacity: petal.opacity,
            animation: `petalFall ${petal.duration}s linear ${petal.delay}s infinite`,
            ["--drift" as string]: `${petal.drift}px`,
            ["--rotation" as string]: `${petal.rotate}deg`,
          }}
        >
          <svg
            viewBox="0 0 24 34"
            className="w-full h-full"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(180, 120, 140, 0.10))",
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
              d="M12 1
                 C8 5 3 8 3 15
                 C3 23 8 30 12 33
                 C16 30 21 23 21 15
                 C21 8 16 5 12 1Z"
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
            transform: translate3d(
                0,
                110vh,
                0
              )
              rotate(calc(var(--rotation) + 360deg));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          span {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}