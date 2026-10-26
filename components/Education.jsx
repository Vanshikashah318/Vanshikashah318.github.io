import { awards, education } from "@/data/portfolio";
import Section from "./ui/Section";
import styles from "./Education.module.css";

export default function Education() {
  const [degree, ...schools] = education;
  return (
    <Section id="education" title="Education & Awards" subtitle="Academic foundation and recognition">
      <div className={styles.card}>
        <div className={styles.main}>
          <span className={styles.badge}>{degree.badge}</span>
          <h3 className={styles.degree}>{degree.degree}</h3>
          <p className={styles.minor}>{degree.minor}</p>
          <p className={styles.school}>{degree.school}</p>
          <p className={styles.dates}>{degree.dates}</p>
          <div className={styles.tags}>
            {degree.focus.map((f) => (
              <span className={styles.tag} key={f}>
                {f}
              </span>
            ))}
          </div>
          {schools.map((s) => (
            <p className={styles.earlier} key={s.school}>
              Earlier:{" "}
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.school}
              </a>
            </p>
          ))}
        </div>

        <div className={styles.side}>
          <div className={styles.statCard}>
            <div className={styles.statBig}>{degree.gpa}</div>
            <div className={styles.statLabel}>Grade Point Average</div>
          </div>
          {awards.map((a) => (
            <a className={styles.award} key={a.name} href={a.url} target="_blank" rel="noopener noreferrer">
              <span className={styles.awardIcon} aria-hidden="true">
                ✦
              </span>
              <span>
                <span className={styles.awardName}>{a.name}</span>
                <span className={styles.awardDetail}>{a.detail}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
