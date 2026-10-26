import { certifications } from "@/data/portfolio";
import Section from "./ui/Section";
import styles from "./Certifications.module.css";

function CertificationCard({ name, issuer, date, honors, description, url }) {
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <p className={styles.issuer}>{issuer}</p>
        {honors && <span className={styles.honors}>Honors</span>}
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.desc}>{description}</p>
      <div className={styles.footer}>
        <span className={styles.date}>{date}</span>
        {url && (
          <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
            View credential <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Continued learning beyond the classroom"
    >
      <div className={styles.grid}>
        {certifications.map((cert) => (
          <CertificationCard key={cert.name} {...cert} />
        ))}
      </div>
    </Section>
  );
}
