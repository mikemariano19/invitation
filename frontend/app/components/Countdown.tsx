
"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-10-25T00:00:00+08:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = targetDate - Date.now();
      const remaining = Math.max(0, difference);

      setTimeLeft({
        days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((remaining / (1000 * 60)) % 60),
        seconds: Math.floor((remaining / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 text-center mt-4">
      {[
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-white/70 rounded-xl w-16 h-16 flex items-center justify-center shadow-sm">
            <span className="text-2xl font-heading">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs mt-2 tracking-widest">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}