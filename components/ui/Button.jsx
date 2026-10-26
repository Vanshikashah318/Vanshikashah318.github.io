import Link from "next/link";
import styles from "./Button.module.css";

// Pill-shaped link button. `variant` is "primary" (orange gradient) or
// "ghost" (translucent, for dark backgrounds). External URLs open in a new tab,
// site routes use client-side navigation, and anything else (#anchors, mailto:) is a plain link.
export default function Button({ href, variant = "primary", className = "", children }) {
  const classes = `${styles.btn} ${styles[variant]} ${className}`;
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
