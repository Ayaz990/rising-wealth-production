import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import SocialLink from "./_components/SocialLink";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Rising Wealth - We craft strategies that grow (Sustainably)",
  description:
    "Do you want your financial future to shine? We are a team of experts in wealth management and financial consulting, dedicated to creating personalized strategies that help you achieve lasting success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Google Tag Manager Script */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WFF595RC');
        `}
      </Script>
      
      {/* Google Analytics Script */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2BW649SZK6" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2BW649SZK6');
        `}
      </Script>

      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
