import type { Metadata } from "next";
import { Fraunces, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "../globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const text = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: {
    default: "Review",
    template: "%s · Review",
  },
  description:
    "A reading journal by ahmedseifeddine. Short essays on software, attention, and the work of looking twice.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body className="min-h-screen font-serif antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
