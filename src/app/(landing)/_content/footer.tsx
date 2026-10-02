import type { FooterContent, FooterLink } from "../_components/page-footer";

const rows: [string, string][] = [
  ["C:", "Carthage Retail Co. LLC"],
  ["E:", "Hello@getyourapollo.com"],
  ["P:", "+17638783451"],
  ["Hours of operation:", "Monday to Friday, 8 AM - 6 PM CT"],
  ["Response Time:", "Within 24 hours"],
];

const quickLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Legal Notice", href: "/legal-notice" },
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
];

export const footerContent: FooterContent = {
  businessInformation: (
    <>
      {rows.map(([label, value]) => (
        <p key={label} style={{ margin: "0 0 6px" }}>
          <strong>{label}</strong> {value}
        </p>
      ))}
    </>
  ),
  quickLinks,
};
