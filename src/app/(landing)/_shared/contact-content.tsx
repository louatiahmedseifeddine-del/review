import styles from "../page.module.css";

const rows: [string, string][] = [
  ["C:", "Carthage Retail Co. LLC"],
  ["E:", "Hello@getyourapollo.com"],
  ["P:", "+17638783451"],
  ["Hours of operation:", "Monday to Friday, 8 AM - 6 PM CT"],
  ["Response Time:", "Within 24 hours"],
];

export function ContactContent() {
  return (
    <>
      <h2 className={styles.sectionHeading}>Business Information</h2>
      {rows.map(([label, value]) => (
        <p key={label}>
          <strong>{label}</strong> {value}
        </p>
      ))}
    </>
  );
}
