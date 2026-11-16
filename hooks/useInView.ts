"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
  margin = "200px",
  once = true
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: margin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [margin, once]);

  return { ref, inView };
}
