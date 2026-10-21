import styles from "../page.module.css";
import { PlaceholderImage, PlaceholderInline } from "./placeholder";

export type Reviewer = {
  photo: { src: string; alt: string } | null;
  name: string | null;
  bio: React.ReactNode | null;
};

/** Blocks C and I use the same reviewer block. */
export function ReviewerBlock({ reviewer }: { reviewer: Reviewer }) {
  return (
    <div className={`${styles.reviewer} ${styles.reviewerSpacing}`}>
      {reviewer.photo ? (
        <img
          className={styles.reviewerPhoto}
          src={reviewer.photo.src}
          alt={reviewer.photo.alt}
        />
      ) : (
        <PlaceholderImage
          label="Reviewer photo"
          className={styles.reviewerPhoto}
        />
      )}
      <div>
        <p className={styles.reviewerName}>
          Reviewed by{" "}
          {reviewer.name ?? <PlaceholderInline label="reviewer name" />}
        </p>
        <p className={styles.reviewerBio}>
          {reviewer.bio ?? (
            <PlaceholderInline label="reviewer biography" />
          )}
        </p>
      </div>
    </div>
  );
}
