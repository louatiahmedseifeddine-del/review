import { PlaceholderInline } from "../_components/placeholder";
import styles from "../page.module.css";

const SITE = "http://www.bestredlightreview.com";
const MAILTO = "mailto:Hello@getyourapollo.com";

export function LegalNoticeContent() {
  return (
    <>
      <h1 className={styles.headline}>
        <a href={SITE}>www.bestredlightreview.com</a>
      </h1>

      <p>Tests by real people for real people.</p>

      <p>
        <strong>Legal Notice</strong>
      </p>

      <p>
        Effective Date: 23.04.2025
        <br />
        Last Updated: 23.04.2025
      </p>

      <p>
        © 2026 BestRedLightReview.com
        <br />
        Operator: Carthage Retail Co. LLC
        <br />
        Contact: <a href={MAILTO}>Hello@getyourapollo.com</a>
        <br />
        Mailing Address:{" "}
        <PlaceholderInline label="Insert Carthage Retail Co. LLC’s registered business address" />
      </p>

      <h2 className={styles.sectionHeading}>Website Ownership</h2>
      <p>
        This website is owned and operated by Carthage Retail Co. LLC.
      </p>

      <h2 className={styles.sectionHeading}>Independent Evaluation</h2>
      <p>
        We do not conduct hands-on product testing. Our editorial content is
        based on meta-reviews — combining public data, verified user reviews,
        manufacturer specifications, and pricing information to help users make
        informed purchasing decisions. While we aim for accuracy, we cannot
        guarantee the completeness, reliability, or correctness of all
        information presented. Rankings reflect our opinion and should serve as
        a helpful starting point for shopping.
      </p>

      <h2 className={styles.sectionHeading}>Advertising Disclosure</h2>
      <p>
        BestRedLightReview.com is a reader-supported comparison site. We do not
        sell products directly on this website. After reviewing products, we may
        include links to third-party websites (such as the official brand or
        retailer site) where the product can be purchased. If you click on these
        links, you may be redirected to an external site, and we may earn a
        referral commission — at no extra cost to you.
      </p>
      <p>
        Some of the websites we link to may be operated by businesses under
        common ownership with Carthage Retail Co. LLC. Sponsored listings are
        clearly marked, and our editorial content remains based on research,
        reviews, and user value.
      </p>
      <p>
        Some product rankings and placements on this site may be influenced by
        commercial relationships. However, our editorial standards remain
        independent, and we only feature products we believe offer genuine
        value.
      </p>
      <p>
        In some cases, products may appear as sponsored listings. These may be
        presented within comparison sections or as Editor’s Picks and are always
        clearly labeled. While these listings may be promoted, we ensure the
        content remains honest, useful, and aligned with our commitment to
        helprs make informed choices.
      </p>

      <h2 className={styles.sectionHeading}>Health &amp; Wellness Disclaimer</h2>
      <p>
        Statements relating to health or wellness products featured on this site
        have not been evaluated by any medical or governmental authority.
        Products mentioned are not intended to diagnose, treat, cure, or prevent
        any disease. Individual results may vary and are not guaranteed.
      </p>
      <p>
        Use of this website is at your own discretion. Carthage Retail Co. LLC
        assumes no responsibility for errors, omissions, or outcomes from the
        use of any information provided herein.
      </p>

      <h2 className={styles.sectionHeading}>Tracking &amp; Cookie Disclosure</h2>
      <p>
        This website uses cookies and third-party tracking technologies
        (including Google Ads and analytics tools) to improve user experience,
        understand user behavior, and measure advertising effectiveness. By
        continuing to use this site, you consent to the use of these
        technologies.
      </p>
      <p>
        For more information, please review our{" "}
        <a href="/privacy-policy">Privacy Policy</a> and{" "}
        <a href="/terms-of-service">Terms of Service</a>.
      </p>
    </>
  );
}
