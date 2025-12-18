import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Barlow } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair-next",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-barlow-next",
});

export { playfairDisplay, barlow };

export const metadata: Metadata = {
  title: "Elody Psy",
  description: "Elody Psy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${barlow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
