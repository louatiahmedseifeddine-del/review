import type { ReactNode } from "react";

/**
 * BLOCK K — reserved slot for the consent banner.
 *
 * Inactive by design: no text or consent requirements have been supplied, and
 * a decorative banner would imply working consent management that does not
 * exist. When activated, this renders a white bottom banner with small text
 * and compact controls.
 */
export function CookieConsent(): ReactNode {
  return null;
}
