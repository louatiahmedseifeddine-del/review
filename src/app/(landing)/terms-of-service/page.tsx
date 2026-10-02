import type { Metadata } from "next";
import { SimplePage } from "../_shared/simple-page";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function Page() {
  return <SimplePage title="Terms of Service" />;
}
