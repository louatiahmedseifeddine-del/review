import type { Metadata } from "next";
import { SimplePage } from "../_shared/simple-page";

export const metadata: Metadata = {
  title: "About us",
};

export default function Page() {
  return <SimplePage title="About us" />;
}
