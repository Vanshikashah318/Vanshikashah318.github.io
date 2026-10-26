import styles from "./StatPanel.module.css";

// Glass panel of big serif numbers, used in page-header asides.
export default function StatPanel({ title, stats }) {
  return (
    <div className={styles.panel}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.grid}>
        {stats.map((s) => (
          <div className={styles.stat} key={s.label}>
            <div className={styles.num}>{s.value}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
