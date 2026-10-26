import { coursework } from "@/data/portfolio";
import Section from "./ui/Section";
import styles from "./Coursework.module.css";

export default function Coursework() {
  return (
    <Section id="coursework" title="Relevant Coursework" subtitle="University of Maryland, College Park">
      <div className={styles.grid}>
        {coursework.map((group) => (
          <article className={styles.card} key={group.area}>
            <h3 className={styles.area}>{group.area}</h3>
            <ul className={styles.list}>
              {group.courses.map((course) => {
                const [code, ...name] = course.split(" ");
                return (
                  <li key={course}>
                    <span className={styles.code}>{code}</span>
                    {name.join(" ")}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
