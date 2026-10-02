import type { Metadata } from "next";
import { SimplePage } from "../_shared/simple-page";
import { TermsOfServiceContent } from "../_shared/terms-of-service-content";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function Page() {
  return (
    <SimplePage>
      <TermsOfServiceContent />
    </SimplePage>
  );
}
