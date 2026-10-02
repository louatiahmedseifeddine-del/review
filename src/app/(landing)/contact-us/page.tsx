import type { Metadata } from "next";
import { SimplePage } from "../_shared/simple-page";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function Page() {
  return <SimplePage title="Contact us" />;
}
