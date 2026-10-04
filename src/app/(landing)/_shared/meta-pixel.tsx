import Script from "next/script";

/**
 * Meta Pixel — Pavra Recovery's Pixel.
 *
 * The same pixel ID is installed on the Shopify store, so a visitor who
 * clicks through from here is matched to the purchase recorded there.
 *
 * A Pixel ID is public by design: it appears in the page source of every
 * site that uses it, so it is not a secret and lives here rather than in an
 * environment variable.
 *
 * The base code fires PageView on load. Every internal link on this site is
 * a plain anchor rather than a client-side route change, so each navigation
 * is a full page load and fires its own PageView.
 */
const PIXEL_ID = "1423169692671158";

export function MetaPixel() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
