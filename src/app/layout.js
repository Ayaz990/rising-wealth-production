import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
//import { GoogleTagManager } from "@next/third-parties/google";
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '');
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
