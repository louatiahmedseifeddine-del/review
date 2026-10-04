import { MetaPixel } from "./_shared/meta-pixel";
import "./layout.css";

/** Root layout for the landing pages: no navigation, no site chrome. */
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
