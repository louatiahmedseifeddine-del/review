import styles from "../page.module.css";

/** Block 8. Fixed categories, in this order. */
export const SCORE_CATEGORIES = [
  "Effectiveness",
  "Ease of Use",
  "Quality & Design",
  "Safety & Certifications",
  "Value for Money",
  "Customer Satisfaction",
] as const;

export type ScoreCategory = (typeof SCORE_CATEGORIES)[number];

/** A score out of 10, or null where none has been supplied. */
export type Scores = Record<ScoreCategory, number | null>;

export const EMPTY_SCORES: Scores = {
  Effectiveness: null,
  "Ease of Use": null,
  "Quality & Design": null,
  "Safety & Certifications": null,
  "Value for Money": null,
  "Customer Satisfaction": null,
};

export function ScoreBars({ scores }: { scores: Scores }) {
  return (
    <div className={styles.scoreBars}>
      {SCORE_CATEGORIES.map((category) => {
        const score = scores[category];

        // No supplied score: draw the empty track, never an invented fill.
        if (score === null) {
          return (
            <div
              key={category}
              className={`${styles.scoreTrack} ${styles.scoreTrackEmpty}`}
            >
              <span className={styles.scoreLabelEmpty}>{category}</span>
              <span className={styles.scoreValueEmpty}>[score]/10</span>
            </div>
          );
        }

        return (
          <div key={category} className={styles.scoreTrack}>
            <div
              className={styles.scoreFill}
              style={{ width: `calc(${Number(((score / 10) * 100).toFixed(2))}% - 6px)` }}
            >
              <span className={styles.scoreLabel}>{category}</span>
              <span className={styles.scoreValue}>{score}/10</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
