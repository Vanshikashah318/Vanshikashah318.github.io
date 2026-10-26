"use client";

import { useEffect, useRef } from "react";
import styles from "./Timeline.module.css";

function TimelineItem({ role, company, location, dates, current, tech = [], bullets, link }) {
  return (
    <li className={styles.item} data-item>
      <div className={styles.when}>
        <span className={styles.dates}>{dates}</span>
      </div>
      <span className={`${styles.dot} ${current ? styles.dotCurrent : ""}`} data-dot aria-hidden="true" />
      <article className={styles.card}>
        <div className={styles.head}>
          <div>
            <h3 className={styles.role}>{role}</h3>
            <p className={styles.company}>
              {company}
              {location && <span className={styles.location}> · {location}</span>}
            </p>
          </div>
          {current && <span className={styles.now}>Current</span>}
        </div>
        <span className={styles.datesInline}>{dates}</span>
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        {(tech.length > 0 || link) && (
          <div className={styles.footer}>
            {tech.map((t) => (
              <span className={styles.tech} key={t}>
                {t}
              </span>
            ))}
            {link && (
              <a className={styles.link} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </article>
    </li>
  );
}

// Scroll-driven timeline: the rail fills as the reader scrolls, each dot lights up when the
// fill reaches it, and its card slides in the first time. Progress is written to the DOM
// (a CSS variable and data attributes) rather than React state, so scrolling never re-renders.
// Without JS, or with reduced motion, the timeline simply renders fully filled and visible.
export default function Timeline({ items }) {
  const ref = useRef(null);

  useEffect(() => {
    const wrap = ref.current;
    if (!wrap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const entries = [...wrap.querySelectorAll("[data-item]")].map((item) => ({
      item,
      dot: item.querySelector("[data-dot]"),
    }));
    wrap.dataset.animated = "true";

    let frame = 0;
    const update = () => {
      frame = 0;
      // The rail fills to a "reading line" a bit below mid-screen, and dots light up as it
      // passes them. Near the end of the page there is no room left to scroll, so the line
      // slides down to the bottom of the screen: by the time the reader hits the bottom, every
      // timeline on screen is fully filled. Cards slide in earlier, when near the screen's bottom.
      const vh = window.innerHeight;
      const remaining = document.documentElement.scrollHeight - (window.scrollY + vh);
      const line = Math.max(vh * 0.62, vh - Math.max(0, remaining));
      const enter = vh * 0.92;
      const rect = wrap.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (line - rect.top) / rect.height));
      wrap.style.setProperty("--progress", progress.toFixed(4));

      for (const { item, dot } of entries) {
        const top = dot.getBoundingClientRect().top;
        if (top < enter) item.dataset.seen = "true";
        if (top < line) item.dataset.reached = "true";
        else delete item.dataset.reached;
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className={styles.wrap} ref={ref}>
      <span className={styles.tip} aria-hidden="true" />
      <ol className={styles.timeline}>
        {items.map((item) => (
          <TimelineItem key={`${item.company}-${item.dates}`} {...item} />
        ))}
      </ol>
    </div>
  );
}
