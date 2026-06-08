"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  value,
}: {
  value: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  const startAnimation = () => {
    if (started.current) return;
    started.current = true;

    const numMatch = value.match(/[\d.]+/);
    if (!numMatch) { setDisplay(value); return; }

    const target = parseFloat(numMatch[0]);
    const isDecimal = value.includes(".");
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      const current = target * eased;
      setDisplay(isDecimal
        ? value.replace(numMatch[0], current.toFixed(2))
        : value.replace(numMatch[0], Math.round(current).toString())
      );
      if (step >= steps) { setDisplay(value); clearInterval(timer); }
    }, stepTime);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check immediately if in viewport
    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        startAnimation();
      }
    };

    check(); // run on mount
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return <span ref={ref}>{display}</span>;
}
