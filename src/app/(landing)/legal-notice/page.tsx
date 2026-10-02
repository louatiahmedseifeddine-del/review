import type { Metadata } from "next";
import { SimplePage } from "../_shared/simple-page";

export const metadata: Metadata = {
  title: "Legal Notice",
};

export default function Page() {
  return <SimplePage title="Legal Notice" />;
}
