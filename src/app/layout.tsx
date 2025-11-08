import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientSection from "./components/clientSection";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
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
  authors: [{ name: "Wahat Liwan Technical Team", url: "https://infowahat.com" }],
  creator: "Wahat Liwan Technical Services",
  publisher: "Wahat Liwan Technical Services",
  metadataBase: new URL("https://infowahat.com"),
  themeColor: "#0f766e",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Wahat Liwan Technical Services L.L.C",
    description:
      "Trusted partner for high-quality electro-mechanical contracting and technical services in UAE.",
    url: "https://infowahat.com",
    siteName: "Wahat Liwan",
    images: [
      {
        url: "https://infowahat.com/images/og-banner.png",
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
    images: ["https://infowahat.com/images/og-banner.png"],
    creator: "@wahatliwan",
  },
};

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Toaster />{children}
        <div className="py-10">
          <ClientSection />
        </div>
        <Footer />
      </body>
    </html>
  );
}
