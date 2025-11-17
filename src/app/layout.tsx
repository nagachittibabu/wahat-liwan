import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import ClientSection from "./components/clientSection";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Wahat Liwan Technical Services L.L.C",
  description:
    "Credible, committed, and cost-efficient electro-mechanical solutions delivered by expert engineers across UAE.",
  keywords: [
    "Wahat Liwan",
    "wahat groups",
    "wahat",
    "MEP services UAE",
    "electro-mechanical contracting",
    "technical services Dubai",
    "man power supply in uae",
    "HVAC, plumbing, electrical",
  ],
  authors: [{ name: "Wahat Liwan Technical Team", url: "https://wahatliwan.com" }],
  creator: "Wahat Liwan Technical Services",
  publisher: "Wahat Liwan Technical Services",
  metadataBase: new URL("https://wahatliwan.com"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Wahat Liwan Technical Services L.L.C",
    description:
      "Trusted partner for high-quality electro-mechanical contracting and technical services in UAE.",
    url: "https://wahatliwan.com",
    siteName: "Wahat Liwan",
    images: [
      {
        url: "https://wahatliwan.com/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Wahat Liwan Technical Services Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahat Liwan Technical Services",
    description:
      "Delivering excellence in electro-mechanical contracting across UAE.",
    images: ["https://wahatliwan.com/images/og-banner.png"],
    creator: "@wahatliwan",
  },
};

export const viewport = {
  themeColor: "#0f766e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
          {children}
        <div className="py-10">
          <ClientSection />
        </div>
        <Footer />
      </body>
    </html>
  );
}
