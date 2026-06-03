import { useEffect, useRef, useState } from 'react';

export default function useCountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  enabled = true,
}) {
  const [value, setValue] = useState(start);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!enabled) {
      setValue(start);
      return undefined;
    }

    startTimeRef.current = null;

    const tick = (timestamp) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = start + (end - start) * eased;
      setValue(decimals > 0 ? Number(next.toFixed(decimals)) : Math.round(next));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, start, duration, decimals, enabled]);

  return value;
}
