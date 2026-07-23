import type { Metadata } from "next";
import "./globals.css";

import { Fredoka, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "HLS KIDS",
    template: "%s | HLS KIDS",
  },
  description:
    "HLS KIDS is a premier early learning and play school dedicated to nurturing young minds through joyful learning, creativity, and holistic development.",
  metadataBase: new URL("https://hlskids.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${poppins.variable}`}>
      <body className="bg-white text-foreground font-body antialiased overflow-x-hidden">
        <Navbar />
        {/* pt-[100px] = navbar height (80px) + mt-5 (20px) */}
        <div className="pt25 bg-[#FFF8E7]">
          {children}
        </div>
      </body>
    {/* </body> */}
    </html>
  );
}