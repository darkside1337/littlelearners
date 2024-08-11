import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Little Learners 🐞",
  description: "Start learning now!",
};

import { Outfit } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative min-h-screen scroll-smooth antialiased">
      <body className={`${outfit.className} h-full`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
