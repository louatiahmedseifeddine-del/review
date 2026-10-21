import styles from "../page.module.css";

/** A labeled, clearly identifiable slot for content not yet supplied. */
export function Placeholder({ label }: { label: string }) {
  return <div className={styles.placeholder}>[{label}]</div>;
}

export function PlaceholderInline({ label }: { label: string }) {
  return <span className={styles.placeholderInline}>[{label}]</span>;
}

/** An image slot sized to the supplied asset's eventual footprint. */
export function PlaceholderImage({
  label,
  className,
  style,
}: {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`${styles.placeholderImage} ${className ?? ""}`}
      style={style}
    >
      [{label}]
    </div>
  );
}
