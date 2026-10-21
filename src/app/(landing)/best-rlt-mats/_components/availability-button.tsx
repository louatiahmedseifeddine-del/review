import styles from "../page.module.css";
import { Placeholder } from "./placeholder";

export type Availability =
  | { kind: "button"; label: React.ReactNode; href: string }
  | { kind: "text"; text: React.ReactNode }
  /** Deliberately absent — e.g. a competitor section with no button. */
  | { kind: "none" }
  /** Not yet supplied — shows a placeholder in the development version. */
  | { kind: "pending" };

/** Block 10. Renders only what is supplied — no default label or destination. */
export function AvailabilityButton({ value }: { value: Availability }) {
  if (value.kind === "none") {
    return null;
  }

  if (value.kind === "pending") {
    return <Placeholder label="Availability button or text not supplied" />;
  }

  if (value.kind === "text") {
    return <p className={styles.availabilityText}>{value.text}</p>;
  }

  return (
    <p className={styles.buttonRow}>
      <a className={styles.button} href={value.href}>
        {value.label}
      </a>
    </p>
  );
}
