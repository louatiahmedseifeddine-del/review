import type { Metadata } from "next";
import { PrivacyPolicyContent } from "../_shared/privacy-policy-content";
import { SimplePage } from "../_shared/simple-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Page() {
  return (
    <SimplePage>
      <PrivacyPolicyContent />
    </SimplePage>
  );
}
