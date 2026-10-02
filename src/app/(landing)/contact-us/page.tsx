import type { Metadata } from "next";
import { ContactContent } from "../_shared/contact-content";
import { SimplePage } from "../_shared/simple-page";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function Page() {
  return (
    <SimplePage title="Contact us">
      <ContactContent />
    </SimplePage>
  );
}
