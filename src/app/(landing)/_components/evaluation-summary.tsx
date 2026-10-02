import styles from "../page.module.css";
import { PlaceholderImage, PlaceholderInline } from "./placeholder";

/** Block 7. Either a finished supplied image, or the three-column build. */
export type Evaluation =
  | { kind: "image"; src: string; alt: string }
  /** Not yet supplied — renders nothing. */
  | { kind: "none" }
  /** Awaiting a supplied asset — shows a labeled slot. */
  | { kind: "pending"; label: string }
  | {
      kind: "columns";
      productImage: { src: string; alt: string } | null;
      grade: string | null;
      rating: string | null;
      stars: number | null;
      reviewCount: string | null;
    };

/** Supports halves: a clipped gold row of filled stars over an outline row. */
function Stars({ count }: { count: number }) {
  const percent = Math.max(0, Math.min(5, count)) * 20;
  return (
    <p className={styles.stars} aria-hidden>
      <span className={styles.starsTrack}>
        <span className={styles.starsEmpty}>☆☆☆☆☆</span>
        <span className={styles.starsFill} style={{ width: `${percent}%` }}>
          ★★★★★
        </span>
      </span>
    </p>
  );
}

export function EvaluationSummary({ value }: { value: Evaluation }) {
  if (value.kind === "none") {
    return null;
  }

  if (value.kind === "pending") {
    return <PlaceholderImage label={value.label} style={{ height: "160px" }} />;
  }

  // A supplied finished summary is displayed as-is, never recreated.
  if (value.kind === "image") {
    return (
      <img className={styles.heroImage} src={value.src} alt={value.alt} />
    );
  }

  return (
    <div className={styles.evaluation}>
      <div className={styles.evaluationImageCell}>
        {value.productImage ? (
          <img
            className={styles.evaluationImage}
            src={value.productImage.src}
            alt={value.productImage.alt}
          />
        ) : (
          <PlaceholderImage
            label="Product image"
            style={{ aspectRatio: "1 / 1" }}
          />
        )}
      </div>

      <div className={styles.evaluationCol}>
        <p className={styles.evaluationLabel}>Test Result</p>
        {value.grade ? (
          <p className={styles.grade}>{value.grade}</p>
        ) : (
          <p className={styles.grade}>
            <PlaceholderInline label="grade" />
          </p>
        )}
      </div>

      <div className={styles.evaluationCol}>
        <p className={styles.evaluationLabel}>Rating</p>
        {value.rating ? (
          <p className={styles.score}>{value.rating}</p>
        ) : (
          <p className={styles.score}>
            <PlaceholderInline label="score" />
          </p>
        )}
        {value.stars !== null ? (
          <Stars count={value.stars} />
        ) : (
          <p className={styles.reviewCount}>
            <PlaceholderInline label="stars" />
          </p>
        )}
        {value.reviewCount ? (
          <p className={styles.reviewCount}>{value.reviewCount}</p>
        ) : (
          <p className={styles.reviewCount}>
            <PlaceholderInline label="review count" />
          </p>
        )}
      </div>
    </div>
  );
}
