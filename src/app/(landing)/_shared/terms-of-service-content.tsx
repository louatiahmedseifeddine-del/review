import {
  Placeholder,
  PlaceholderInline,
} from "../_components/placeholder";
import styles from "../page.module.css";

const SITE = "http://www.bestredlightreview.com";
const MAILTO = "mailto:Hello@getyourapollo.com";

export function TermsOfServiceContent() {
  return (
    <>
      <h1 className={styles.headline}>
        <a href={SITE}>www.bestredlightreview.com</a>
      </h1>

      <p>Tests by real people for real people.</p>

      <p>
        <strong>Terms of Service</strong>
      </p>

      <p>
        Effective Date: 23.04.2025
        <br />
        Last Updated: 23.04.2025
      </p>

      <h2 className={styles.sectionHeading}>1. Introduction</h2>
      <p>
        Welcome to <a href={SITE}>www.bestredlightreview.com</a>, a website
        operated by Carthage Retail Co. LLC (&quot;Company,&quot;
        &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
      </p>
      <p>
        By accessing or using our website, you agree to be bound by these Terms
        of Service. If you do not agree with these terms, please do not use this
        website.
      </p>

      <h2 className={styles.sectionHeading}>2. Use of the Website</h2>
      <p>
        This site is intended for users who are of legal age in their country of
        residence. By using this site, you agree not to:
      </p>
      <ul className={styles.legalList}>
        <li>Violate any laws or regulations</li>
        <li>Post or transmit unlawful, harmful, or offensive content</li>
        <li>Attempt to gain unauthorized access to our systems or data</li>
        <li>Reproduce or exploit our content without permission</li>
      </ul>

      <h2 className={styles.sectionHeading}>3. Content and Liability</h2>
      <p>
        All information provided on this site is for general informational
        purposes only. We do not guarantee the accuracy, completeness, or
        reliability of any product descriptions, reviews, or comparisons. You
        are solely responsible for any decisions made based on the information
        provided.
      </p>

      <h2 className={styles.sectionHeading}>4. Affiliate Disclosure</h2>
      <p>
        This website participates in affiliate marketing programs. This means we
        may earn a commission if you click on a product link and make a purchase
        from a third-party site. These commissions do not affect the price you
        pay. We do not control the policies of those third-party websites.
      </p>

      <h2 className={styles.sectionHeading}>
        5. Changes to Website or Services
      </h2>
      <p>
        We reserve the right to modify or discontinue any part of this website
        at any time, without prior notice. We are not liable for any impact
        caused by such changes.
      </p>

      <h2 className={styles.sectionHeading}>6. Disclaimer of Warranties</h2>
      <p>
        This website is provided “as is” and “as available.” We make no
        warranties, expressed or implied, regarding the operation or
        availability of this website.
      </p>

      <h2 className={styles.sectionHeading}>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Carthage Retail Co. LLC shall
        not be held liable for any indirect, incidental, or consequential
        damages arising from your use of this site.
      </p>

      <h2 className={styles.sectionHeading}>8. External Links</h2>
      <p>
        This website may contain links to third-party websites. We are not
        responsible for the content, privacy practices, or policies of any
        external sites.
      </p>

      <h2 className={styles.sectionHeading}>9. Changes to These Terms</h2>
      <p>
        We may update these Terms of Service at any time. Changes will take
        effect when posted on this page. Your continued use of the website
        constitutes your acceptance of any changes.
      </p>

      <h2 className={styles.sectionHeading}>10. Governing Law</h2>
      <p>
        These terms are governed by the laws of{" "}
        <PlaceholderInline label="insert applicable state and country" />. Any
        disputes shall be handled by the courts in that jurisdiction.
      </p>

      <h2 className={styles.sectionHeading}>11. Contact Information</h2>
      <p>Carthage Retail Co. LLC</p>
      <Placeholder label="Insert Carthage Retail Co. LLC’s registered business address" />
      <p>
        Email: <a href={MAILTO}>Hello@getyourapollo.com</a>
      </p>

      <p>
        By using <a href={SITE}>www.bestredlightreview.com</a>, you agree to
        these Terms of Service.
      </p>

      <p>Tests by real people for real people.</p>
    </>
  );
}
