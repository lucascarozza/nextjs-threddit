import type { Metadata } from "next";
import "./globals.css";

import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

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
      <body className="bg-zinc-900 text-zinc-50">
        {/* Header */}
        <Header />

        {/* Grid */}
        <div className="grid w-screen min-h-screen grid-rows-[5rem_1fr_10rem] md:grid-rows-[5rem_1fr_7rem] pt-10 px-4 lg:px-20">
          {/* Grid Row 2: Main */}
          <main className="flex justify-center row-start-2">{children}</main>
          {/* Grid Row 3: Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
