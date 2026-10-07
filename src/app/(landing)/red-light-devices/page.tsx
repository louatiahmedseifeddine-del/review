import type { Metadata } from "next";
import { AvailabilityButton } from "../_components/availability-button";
import { CookieConsent } from "../_components/cookie-consent";
import { Faq } from "../_components/faq";
import { PageFooter } from "../_components/page-footer";
import {
  ProductSection,
  type Product,
} from "../_components/product-section";
import { ReviewerBlock, type Reviewer } from "../_components/reviewer-block";
import { productOne } from "./_content/product-1";
import { productTwo } from "./_content/product-2";
import { productThree } from "./_content/product-3";
import { productFour } from "./_content/product-4";
import { productFive } from "./_content/product-5";
import {
  benefits,
  benefitsHeading,
  topPickBody,
  topPickButton,
  topPickHeading,
} from "./_content/top-pick";
import { buyingGuide, buyingGuideHeading } from "./_content/buying-guide";
import { faqEntries, faqHeading } from "./_content/faqs";
import { footerContent } from "../_content/footer";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title:
    "The 5 Best Red & Infrared Light Therapy Mats for At-Home Pain Relief & Recovery in 2026",
};

// ---------------------------------------------------------------------------
// Supplied content lives here. Anything not yet supplied stays null or empty
// so it renders as a labeled placeholder rather than invented copy.
// ---------------------------------------------------------------------------

const reviewer: Reviewer = {
  photo: {
    src: "/reviewer-richard-ellison.png",
    alt: "Richard Ellison",
  },
  name: "Richard Ellison",
  bio: "Richard Ellison is an independent consumer-product researcher based in Denver, Colorado. Since 2013, he has researched and compared wellness, recovery, fitness, and home technology products, focusing on practical differences that help consumers understand what they\u2019re actually buying.",
};

const products: Product[] = [
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
];




export default function Page() {
  return (
    <div className={styles.page}>
      {/* BLOCK A — HEADER */}
      <header className={styles.header}>
        <img className={styles.logo} src="/brr-logo.png" alt="BRR" />
      </header>
      <hr className={styles.headerDivider} />

      <div className={styles.article}>
        {/* BLOCK B — DISCLOSURE */}
        <p className={styles.disclosure}>
          <a href="/privacy-policy">
            We independently evaluate each product based on publicly available
            data. If you click on links on this page, we may earn a commission.
          </a>
        </p>

        {/* BLOCK C — ARTICLE OPENING */}
        <h1 className={styles.headline}>
          The 5 Best Red &amp; Infrared Light Therapy Mats for At-Home Pain
          Relief &amp; Recovery in 2026
        </h1>

        <p className={styles.updateDate}>Updated on October 1st, 2026</p>

        <img
          className={styles.heroImage}
          src="/hero-five-mats.png"
          alt="The five mats side by side on a white background"
          width={2000}
          height={672}
        />

        <div style={{ marginTop: "18px" }}>
          <p>
            Whether you’re seeking{" "}
            <strong>
              natural pain relief, faster muscle recovery, or a drug-free
              approach to chronic inflammation
            </strong>
            , red light therapy mats offer a way to explore light-based
            recovery from the comfort of home. The challenge is finding the
            right one for your needs.
          </p>
          <p>
            With countless options promising everything from wrinkle reduction
            to deep tissue recovery, it’s easy to feel overwhelmed.{" "}
            <strong>
              Every mat promises benefits—but the promises alone won’t tell you
              which to choose.
            </strong>
          </p>
          <p>
            That’s why we analysed five leading red light therapy mats,
            examining{" "}
            <strong>
              LED quality, wavelengths, coverage, power output, and reported
              user experiences
            </strong>
            . Below, we break down where each mat stands out, where it falls
            short, and who it’s best suited for—so you can choose with a clear
            understanding of the differences.
          </p>
          <p>
            <strong>
              These are our top 5 red light therapy mats for 2026:
            </strong>
          </p>
        </div>

        <ReviewerBlock reviewer={reviewer} />

        {/* BLOCK D — FIVE PRODUCT REVIEW SECTIONS */}
        {products.map((product) => (
          <ProductSection key={product.number} product={product} />
        ))}

        {/* BLOCK E — FINAL TOP-PICK RECOMMENDATION */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{topPickHeading}</h2>
          {topPickBody}
          <AvailabilityButton value={topPickButton} />
        </section>

        {/* BLOCK F — TOP-PICK BENEFITS */}
        <section className={styles.section}>
          <div className={styles.benefits}>
            <p className={styles.benefitsHeader}>{benefitsHeading}</p>
            <div className={styles.benefitsBody}>
              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <span aria-hidden className={styles.prosMark}>
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <AvailabilityButton value={topPickButton} />
        </section>

        {/* BLOCK G — BUYING GUIDE */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeadingCentered}>
            {buyingGuideHeading}
          </h2>
          {buyingGuide.map((item) => (
            <p key={item.label}>
              <span className={styles.inlineLabel}>{item.label}</span>{" "}
              {item.body}
            </p>
          ))}
        </section>

        {/* BLOCK H — FAQ */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeadingCentered}>{faqHeading}</h2>
          <Faq entries={faqEntries} />
        </section>

        {/* BLOCK I — REPEATED REVIEWER BLOCK */}
        <section className={styles.section}>
          <ReviewerBlock reviewer={reviewer} />
        </section>

        {/* BLOCK J — FOOTER */}
        <PageFooter content={footerContent} />
      </div>

      {/* BLOCK K — COOKIE CONSENT (reserved, inactive) */}
      <CookieConsent />
    </div>
  );
}
