import styles from "../page.module.css";
import { PlaceholderInline } from "./placeholder";

export type FooterLink = { label: string; href: string };

export type FooterContent = {
  businessInformation: React.ReactNode | null;
  quickLinks: FooterLink[];
};

/** Block J. Business Information left, Quick Links right; stacked on mobile. */
export function PageFooter({ content }: { content: FooterContent }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <p className={styles.footerHeading}>Business Information</p>
          {content.businessInformation ?? (
            <PlaceholderInline label="business details" />
          )}
        </div>
        <div className={styles.quickLinks}>
          <p className={styles.footerHeading}>Quick Links</p>
          {content.quickLinks.length > 0 ? (
            <ul className={styles.footerList}>
              {content.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          ) : (
            <PlaceholderInline label="quick links" />
          )}
        </div>
      </div>
    </footer>
  );
}
