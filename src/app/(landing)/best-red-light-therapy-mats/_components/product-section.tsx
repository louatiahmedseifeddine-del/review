import styles from "../page.module.css";
import { AvailabilityButton, type Availability } from "./availability-button";
import { EvaluationSummary, type Evaluation } from "./evaluation-summary";
import { Faq } from "./faq";
import { Placeholder, PlaceholderInline } from "./placeholder";
import { ConsBox, ProsBox } from "./pros-cons";
import { ScoreBars, type Scores } from "./score-bars";

export type Product = {
  /** "1." … "5." plus the supplied product name. */
  number: number;
  name: string | null;
  /** Product 1 only, using supplied wording. */
  sponsoredLabel: string | null;
  tagline: React.ReactNode | null;
  evaluation: Evaluation;
  /** Step 5 — after the evaluation summary. */
  availabilityTop: Availability;
  whyWeLoveIt: React.ReactNode | null;
  whoItsFor: React.ReactNode | null;
  priceCheck: React.ReactNode | null;
  specifications: React.ReactNode | null;
  /** Step 11 — only where supplied. */
  availabilityMid: Availability;
  scores: Scores;
  pros: React.ReactNode[];
  cons: React.ReactNode[];
  conclusion: React.ReactNode | null;
  /** Step 16 — only where supplied. */
  availabilityFinal: Availability;
};

function Labeled({
  label,
  value,
  placeholder,
}: {
  label: string;
  value: React.ReactNode | null;
  placeholder: string;
}) {
  return (
    <div className={styles.specs}>
      <span className={styles.inlineLabel}>{label}</span>{" "}
      {value ?? <PlaceholderInline label={placeholder} />}
    </div>
  );
}

/** Block D — the repeated product structure, in the order defined in §6. */
export function ProductSection({ product }: { product: Product }) {
  return (
    <section>
      <h2 className={styles.productHeading}>
        {product.number}.{" "}
        {product.name ?? <PlaceholderInline label="product name" />}
      </h2>

      {product.sponsoredLabel ? (
        <p className={styles.sponsoredLabel}>{product.sponsoredLabel}</p>
      ) : null}

      <p className={styles.tagline}>
        {product.tagline ?? <PlaceholderInline label="product tagline" />}
      </p>

      <EvaluationSummary value={product.evaluation} />

      <AvailabilityButton value={product.availabilityTop} />

      <h3 className={styles.sectionHeading}>Overall Analysis</h3>

      <Labeled
        label="Why We Love It:"
        value={product.whyWeLoveIt}
        placeholder="Why We Love It paragraphs"
      />
      <Labeled
        label="Who It’s For:"
        value={product.whoItsFor}
        placeholder="Who It’s For paragraph"
      />
      <Labeled
        label="Price Check:"
        value={product.priceCheck}
        placeholder="Price Check paragraphs"
      />
      <Labeled
        label="Specifications:"
        value={product.specifications}
        placeholder="specification text"
      />

      <AvailabilityButton value={product.availabilityMid} />

      <ScoreBars scores={product.scores} />

      <ProsBox items={product.pros} />
      <ConsBox items={product.cons} />

      <h3 className={styles.sectionHeading}>Conclusion</h3>
      {product.conclusion ?? (
        <Placeholder label="conclusion paragraph" />
      )}

      <AvailabilityButton value={product.availabilityFinal} />
    </section>
  );
}

export { Faq };
