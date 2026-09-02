import type { Metadata } from "next";
import { Jaro, Oswald } from "next/font/google";
import "./globals.css";

const jaro = Jaro({
  variable: "--font-jaro",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harry Potter Cards",
  description: "Harry Potter character card gallery",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jaro.variable} ${oswald.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-white">
        {children}
      </body>
    </html>
  );
}
