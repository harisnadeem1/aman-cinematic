"use client";

import { useEffect, useState } from "react";

type DaysCounterProps = {
  startDate: string;
};

export default function DaysCounter({ startDate }: DaysCounterProps) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const start = new Date(startDate);

    const updateDays = () => {
      const now = new Date();
      const diff = now.getTime() - start.getTime();
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDays(totalDays);
    };

    updateDays();

    const interval = setInterval(updateDays, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-6xl font-semibold leading-none tracking-tight text-white md:text-8xl">
        {days}
      </span>
      <span className="mt-3 text-[11px] uppercase tracking-[0.35em] text-zinc-400 md:text-xs">
        days since we first met
      </span>
    </div>
  );
}