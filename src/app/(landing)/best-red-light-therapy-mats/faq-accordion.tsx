"use client";

import { useState } from "react";
import styles from "./page.module.css";

export type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

/**
 * Section 15 — the FAQ accordion. Real buttons with aria-expanded and
 * aria-controls, so the rows work for keyboard and screen-reader users; one
 * answer open at a time, the first open by default.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.fqList}>
      {items.map((item, index) => {
        const open = index === openIndex;
        return (
          <div
            key={item.question}
            className={`${styles.fqItem} ${open ? styles.fqItemOpen : ""}`}
          >
            <h3 className={styles.fqHeading}>
              <button
                type="button"
                className={styles.fqButton}
                id={`faq-q${index}`}
                aria-expanded={open}
                aria-controls={`faq-a${index}`}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span className={styles.fqQuestion}>{item.question}</span>
                <svg
                  className={styles.fqIcon}
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden
                  focusable="false"
                >
                  <path d="M2.5 9h13" />
                  {open ? null : <path d="M9 2.5v13" />}
                </svg>
              </button>
            </h3>

            <div
              className={styles.fqPanel}
              id={`faq-a${index}`}
              role="region"
              aria-labelledby={`faq-q${index}`}
              hidden={!open}
            >
              <p className={styles.fqAnswer}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
