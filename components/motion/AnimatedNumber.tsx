"use client";

/* Numero que cuenta desde 0 hasta su valor final cuando entra en
   pantalla (IntersectionObserver), estilo dashboard deportivo. Si
   `value` no es numerico (ej. "FR/ES") lo muestra tal cual, sin animar. */

import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({
  value,
  duration = 900,
}: {
  value: number | string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<number | string>(typeof value === "number" ? 0 : value);
  const numeric = typeof value === "number";

  useEffect(() => {
    if (!numeric) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let frame: number;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const target = value;
        function tick(now: number) {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(target * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        }
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
