"use client";

import styles from "./ThemeToggle.module.css";

export const THEME_KEY = "theme";

// Sun/moon button that flips <html data-theme> between "light" and "dark" and remembers the
// choice. It holds no React state: the icon is chosen in CSS from the data-theme attribute,
// which the inline script in the layout sets before first paint, so the server-rendered
// button never mismatches and the page never flashes the wrong theme.
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage blocked (private mode etc.): the theme still applies for this visit.
    }
  };

  return (
    <button type="button" className={styles.toggle} onClick={toggle} aria-label="Toggle dark mode" title="Toggle dark mode">
      {/* Moon: shown in light mode (click for dark). */}
      <svg className={styles.moon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
      </svg>
      {/* Sun: shown in dark mode (click for light). */}
      <svg className={styles.sun} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
      </svg>
    </button>
  );
}
