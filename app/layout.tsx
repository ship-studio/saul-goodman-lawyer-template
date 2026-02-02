import type { Metadata } from "next";
import { Playfair_Display, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saul Goodman | Attorney at Law",
  description:
    "Criminal defense attorney with a 95% acquittal rate. When the law fails you, I won't. Available 24/7 for consultations. Better Call Saul.",
  keywords: [
    "criminal defense attorney",
    "criminal lawyer",
    "defense attorney",
    "DUI lawyer",
    "drug charges",
    "white collar crime",
    "federal defense",
    "Saul Goodman",
  ],
  openGraph: {
    title: "Saul Goodman | Attorney at Law",
    description:
      "Criminal defense attorney with a 95% acquittal rate. Better Call Saul.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${libreFranklin.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
