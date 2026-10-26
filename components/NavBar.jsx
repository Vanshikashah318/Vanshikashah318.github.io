"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import styles from "./NavBar.module.css";

const normalize = (path) => (path.endsWith("/") ? path : `${path}/`);

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = normalize(usePathname() || "/");

  // Close the mobile menu with Escape, and whenever the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 761px)");
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.topbar}>
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.brand} onClick={close}>
          <span className={styles.brandName}>{profile.name}</span>
          <span className={styles.brandSub}>{profile.tagline}</span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.menuIcon} ${open ? styles.menuIconOpen : ""}`} />
        </button>

        <nav id="site-nav" className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={active ? styles.active : undefined}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            className={`${styles.cta} ${pathname === "/contact/" ? styles.ctaActive : ""}`}
            href="/contact/"
            onClick={close}
            aria-current={pathname === "/contact/" ? "page" : undefined}
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
