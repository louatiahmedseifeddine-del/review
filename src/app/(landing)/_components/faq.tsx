import styles from "../page.module.css";
import { PlaceholderInline } from "./placeholder";

export type FaqEntry = {
  question: string | null;
  answer: React.ReactNode | null;
};

/** Block H. Seven slots. Native details/summary: accessible, independently
    collapsible, and open by default to match the supplied screenshot. */
export function Faq({ entries }: { entries: FaqEntry[] }) {
  return (
    <div className={styles.faqList}>
      {entries.map((entry, index) => (
        <details key={index} className={styles.faqItem} open>
          <summary className={styles.faqQuestion}>
            <span>
              {entry.question ?? (
                <PlaceholderInline label={`FAQ ${index + 1} question`} />
              )}
            </span>
            <span aria-hidden className={styles.faqChevron}>
              ▾
            </span>
          </summary>
          <div className={styles.faqAnswer}>
            {entry.answer ?? (
              <p>
                <PlaceholderInline label={`FAQ ${index + 1} answer`} />
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
