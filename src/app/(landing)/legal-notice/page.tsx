import type { Metadata } from "next";
import { LegalNoticeContent } from "../_shared/legal-notice-content";
import { SimplePage } from "../_shared/simple-page";

export const metadata: Metadata = {
  title: "Legal Notice",
};

export default function Page() {
  return (
    <SimplePage>
      <LegalNoticeContent />
    </SimplePage>
  );
}
