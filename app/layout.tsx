import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`
  },
  description: site.description,
  metadataBase: new URL(site.url),
  applicationName: site.name,
  manifest: "/site.webmanifest",
  verification: {
    google: "4MwsSrO57ChFIOu7SoBGj4BknGW66QvXJxu2o8Cjcns"
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: absoluteUrl("/"),
    siteName: site.name,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: absoluteUrl(site.ogImage),
        width: 1536,
        height: 1024,
        alt: "HerramientasIA, guía editorial de herramientas de inteligencia artificial"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [absoluteUrl(site.ogImage)]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f1e7"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className={`${inter.variable} site-shell`}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
