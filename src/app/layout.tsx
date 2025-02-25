import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Honk } from "next/font/google";

export const honk = Honk({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Threddit",
  description: "A new and fun way to use Reddit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full bg-zinc-900 text-zinc-50">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="relative top-20">
          <main>{children}</main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
