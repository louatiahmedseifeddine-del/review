import "./layout.css";

/** Root layout for the landing pages: no navigation, no site chrome. */
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
