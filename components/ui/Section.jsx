import Link from "next/link";
import Reveal from "./Reveal";
import styles from "./Section.module.css";

// A page section with a serif heading marked by an orange accent bar.
// `action` ({ href, label }) adds a link on the right of the header, e.g. "All projects".
export default function Section({ id, title, subtitle, action, children }) {
  return (
    <section className={styles.section} id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <div className={styles.titleWrap}>
              <h2 className={styles.title} id={`${id}-title`}>
                {title}
              </h2>
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
            {action && (
              <Link href={action.href} className={styles.action}>
                {action.label} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
