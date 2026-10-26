import styles from "./Tag.module.css";

export default function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>;
}

export function TagList({ items }) {
  return (
    <div className={styles.wrap}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </div>
  );
}
