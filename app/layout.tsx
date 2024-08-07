/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// import "./main.js";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ParcelDelivery",
  description: "Description of my landing page to delivery parcel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
