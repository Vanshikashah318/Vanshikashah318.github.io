import Image from "next/image";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, badge }) {
  const { title, category, date, cover, description, highlights = [], tech, href } = project;
  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        <Image src={cover} alt="" width={800} height={450} className={styles.coverImg} />
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      <div className={styles.body}>
        <p className={styles.meta}>{[date, category].filter(Boolean).join(" · ")}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>

        {highlights.length > 0 && (
          <div className={styles.chips}>
            {highlights.map((h) => (
              <span className={styles.highlight} key={h}>
                {h}
              </span>
            ))}
          </div>
        )}
        <div className={styles.chips}>
          {tech.map((t) => (
            <span className={styles.tech} key={t}>
              {t}
            </span>
          ))}
        </div>

        {href && (
          <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
            View on GitHub <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export function ProjectGrid({ projects, badgeFirst }) {
  return (
    <div className={styles.grid}>
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} badge={badgeFirst && i === 0 ? badgeFirst : null} />
      ))}
    </div>
  );
}
