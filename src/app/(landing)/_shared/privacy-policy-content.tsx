import { Placeholder } from "../_components/placeholder";
import styles from "../page.module.css";

const MAILTO = "mailto:Hello@getyourapollo.com";

export function PrivacyPolicyContent() {
  return (
    <>
      <h1 className={styles.headline}>
        <a href="https://bestredlightreview.com/">
          https://bestredlightreview.com/
        </a>
      </h1>

      <p>Tests by real people for real people.</p>

      <p>
        <strong>Privacy Policy</strong>
      </p>

      <p>
        Effective Date: 23.04.2025
        <br />
        Last Updated: 23.04.2025
      </p>

      <h2 className={styles.sectionHeading}>1. Introduction</h2>
      <p>
        Welcome to{" "}
        <a href="https://bestredlightreview.com/">
          https://bestredlightreview.com/
        </a>
        , a website operated by Carthage Retail Co. LLC (&quot;Company&quot;,
        &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to
        protecting your privacy and ensuring your personal data is handled
        responsibly and securely.
      </p>
      <p>
        By using our website, you agree to this Privacy Policy. If you do not
        agree, please do not use the site.
      </p>

      <h2 className={styles.sectionHeading}>2. Information We Collect</h2>
      <p>We may collect:</p>
      <ul className={styles.legalList}>
        <li>
          Personal information you provide, such as your name, email address, or
          any messages submitted via contact forms or newsletters.
        </li>
        <li>
          Automatically collected information, like your IP address, browser
          type, device info, referring URLs, pages visited, time spent on the
          site, clicks on affiliate links, and interactions with ads.
        </li>
        <li>
          Tracking technologies, including cookies and pixels, to analyze
          behavior and deliver relevant content or advertising.
        </li>
        <li>
          Third-party data, from platforms such as Google Analytics or affiliate
          networks.
        </li>
      </ul>

      <h2 className={styles.sectionHeading}>3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul className={styles.legalList}>
        <li>Operate and improve our website</li>
        <li>Analyze performance and user behavior</li>
        <li>Communicate with you (only if you opt in)</li>
        <li>Prevent fraud or misuse</li>
        <li>Comply with legal requirements</li>
      </ul>

      <h2 className={styles.sectionHeading}>4. Cookies and Tracking</h2>
      <p>We use cookies for:</p>
      <ul className={styles.legalList}>
        <li>Essential site functionality</li>
        <li>Analytics (Google Analytics)</li>
        <li>Affiliate tracking</li>
        <li>Advertising and remarketing</li>
      </ul>
      <p>
        You can manage or disable cookies through your browser settings.
        Disabling cookies may affect site functionality.
      </p>

      <h2 className={styles.sectionHeading}>5. Affiliate Disclosure</h2>
      <p>
        Some product links are affiliate links. This means we may earn a small
        commission when you click and make a purchase, at no extra cost to you.
        These links do not influence product prices or our editorial content.
      </p>

      <h2 className={styles.sectionHeading}>6. Google Ads &amp; Analytics</h2>
      <p>We use Google services such as:</p>
      <ul className={styles.legalList}>
        <li>Google Analytics for traffic analysis</li>
        <li>Google Ads for advertising and remarketing</li>
      </ul>
      <p>
        Google may collect information as described in its own Privacy Policy.
        You can opt out of Google Analytics tracking via the Google Analytics
        Opt-out Browser Add-on:{" "}
        <a href="https://tools.google.com/dlpage/gaoptout">
          https://tools.google.com/dlpage/gaoptout
        </a>
      </p>

      <h2 className={styles.sectionHeading}>7. Data Sharing</h2>
      <p>We do not sell your data. We may share information with:</p>
      <ul className={styles.legalList}>
        <li>Service providers (hosting, analytics, email)</li>
        <li>Affiliate networks (when tracking clicks)</li>
        <li>Legal authorities if required by law</li>
      </ul>

      <h2 className={styles.sectionHeading}>8. Data Security</h2>
      <p>
        We take reasonable steps to protect your information. However, no system
        is 100% secure. You use our site at your own risk.
      </p>

      <h2 className={styles.sectionHeading}>9. Your Rights</h2>
      <p>
        Depending on your location, you may have the right to:
      </p>
      <ul className={styles.legalList}>
        <li>Access your data</li>
        <li>Correct or delete your data</li>
        <li>Opt out of marketing</li>
      </ul>
      <p>
        To make a request, contact:{" "}
        <a href={MAILTO}>Hello@getyourapollo.com</a>
      </p>

      <h2 className={styles.sectionHeading}>10. Third-Party Links</h2>
      <p>
        Our site may link to external websites. We are not responsible for their
        privacy practices. Please review their privacy policies before providing
        data.
      </p>

      <h2 className={styles.sectionHeading}>11. Children’s Privacy</h2>
      <p>
        This site is not intended for children under 13. We do not knowingly
        collect data from children. If we learn we have, we will delete it
        immediately.
      </p>

      <h2 className={styles.sectionHeading}>12. Updates to This Policy</h2>
      <p>
        We may update this policy at any time. Changes will be posted on this
        page with an updated date.
      </p>

      <h2 className={styles.sectionHeading}>13. Contact</h2>
      <p>Carthage Retail Co. LLC</p>
      <Placeholder label="Insert Carthage Retail Co. LLC’s registered business address" />
      <p>
        Email: <a href={MAILTO}>Hello@getyourapollo.com</a>
      </p>
    </>
  );
}
