import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nicole Wang: Data Science & Economics @ Berkeley",
  description:
    "Personal portfolio of Nicole Wang, blending data, design, and storytelling across AI engineering, strategy, and research.",
  openGraph: {
    title: "Nicole Wang: Portfolio",
    description:
      "Data Science & Economics @ Berkeley, AI engineering, strategy consulting, research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
