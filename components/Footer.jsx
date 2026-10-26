"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./ui/Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const onContact = (usePathname() || "").startsWith("/contact");
  return (
    <footer className={styles.footer}>
      <div className="container">
        {!onContact && (
          <Link href="/contact/" className={styles.cta}>
            <span>
              <span className={styles.ctaKicker}>Open to software engineering roles</span>
              <span className={styles.ctaTitle}>
                Have something in mind? <em>Let’s talk.</em>
              </span>
            </span>
            <span className={styles.ctaArrow}>
              <ArrowUpRightIcon />
            </span>
          </Link>
        )}
        <p className={styles.note}>
          © {new Date().getFullYear()} {profile.name} ·{" "}
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          ·{" "}
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
