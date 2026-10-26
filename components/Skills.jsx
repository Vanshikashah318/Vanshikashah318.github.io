import { skills } from "@/data/portfolio";
import Section from "./ui/Section";
import { TagList } from "./ui/Tag";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Languages, frameworks, and tools I work with"
    >
      <div className={styles.grid}>
        {skills.map((group) => (
          <article className={`${styles.card} ${styles[group.accent]}`} key={group.title}>
            <h3 className={styles.title}>{group.title}</h3>
            <TagList items={group.items} />
          </article>
        ))}
      </div>
    </Section>
  );
}
