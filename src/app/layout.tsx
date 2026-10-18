import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TOWFIQUL | Frontend Developer",
  description: "Portfolio of Towfiqul, a frontend developer.",
};

// Mobile Zoom in/out issue fixed
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <div
          aria-hidden
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(5,3,26,0.35), rgba(5,3,26,0.6)), url('/bg/galaxy1.jpg')" }}
        />

        <div aria-hidden className="stars" />
        <div aria-hidden className="shooting-star s1" />
        <div aria-hidden className="shooting-star s2" />
        <div aria-hidden className="shooting-star s3" />

        <Navbar />
        {children}
      </body>
    </html>
  );
}