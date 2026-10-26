import styles from "./PageHeader.module.css";

// Dark green banner at the top of each inner page, echoing the home hero.
// `accent` is rendered in the orange italic used for "Shah" on the home page.
// `asideFirst` moves the aside above the text once the layout stacks on narrow screens.
export default function PageHeader({ kicker, title, accent, subtitle, aside, asideFirst, children }) {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={`${styles.card} ${aside ? styles.withAside : ""}`}>
          <div className={styles.body}>
            <div className={styles.kicker}>{kicker}</div>
            <h1 className={styles.title}>
              {title} {accent && <em>{accent}</em>}
            </h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {children}
          </div>
          {aside && <div className={`${styles.aside} ${asideFirst ? styles.asideFirst : ""}`}>{aside}</div>}
        </div>
      </div>
    </section>
  );
}
