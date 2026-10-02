import styles from "../page.module.css";
import { Placeholder } from "./placeholder";

/** Block 9. Stacked, never side by side. */
export function ProsBox({ items }: { items: React.ReactNode[] }) {
  if (items.length === 0) {
    return <Placeholder label="Pros not supplied" />;
  }

  return (
    <div className={styles.box}>
      <p className={`${styles.boxHeader} ${styles.prosHeader}`}>Pros</p>
      <div className={`${styles.boxBody} ${styles.prosBody}`}>
        <ul className={styles.boxList}>
          {items.map((item, index) => (
            <li key={index}>
              <span aria-hidden className={styles.prosMark}>
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ConsBox({ items }: { items: React.ReactNode[] }) {
  if (items.length === 0) {
    return <Placeholder label="Cons not supplied" />;
  }

  return (
    <div className={styles.box}>
      <p className={`${styles.boxHeader} ${styles.consHeader}`}>Cons</p>
      <div className={`${styles.boxBody} ${styles.consBody}`}>
        <ul className={styles.boxList}>
          {items.map((item, index) => (
            <li key={index}>
              <span aria-hidden className={styles.consMark}>
                ✕
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
