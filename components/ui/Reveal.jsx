"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

// Fades its children up into place the first time they scroll into view.
// Content is fully visible in the static HTML; it is only hidden once JS
// confirms the element is still below the fold, so nothing is lost without JS
// and above-the-fold content never flickers. Skipped for reduced-motion users.
export default function Reveal({ children }) {
  const ref = useRef(null);
  const [state, setState] = useState("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles[state]}>
      {children}
    </div>
  );
}
