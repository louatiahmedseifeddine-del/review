import { PageFooter } from "../best-red-light-therapy-mats/_components/page-footer";
import { Placeholder } from "../best-red-light-therapy-mats/_components/placeholder";
import { footerContent } from "../best-red-light-therapy-mats/_content/footer";
import styles from "../best-red-light-therapy-mats/page.module.css";

/**
 * Shell for the footer's linked pages. Same header, footer, and typography as
 * the landing page. The body stays an explicit placeholder until copy is
 * supplied — no invented content.
 */
export function SimplePage({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img className={styles.logo} src="/brr-logo.png" alt="BRR" />
      </header>
      <hr className={styles.headerDivider} />

      <div className={styles.article}>
        {title ? <h1 className={styles.headline}>{title}</h1> : null}
        {children ?? (
          <Placeholder label={`${title} content not supplied`} />
        )}
        <PageFooter content={footerContent} />
      </div>
    </div>
  );
}
