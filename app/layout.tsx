import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter font
import "./globals.css";

// Google font: Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Add a CSS variable for Inter
});

export const metadata: Metadata = {
  title: "APLJ Construction Corp",
  description: "Welcome to APLJ Construction Corp!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
