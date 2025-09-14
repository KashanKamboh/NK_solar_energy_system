import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WhatsAppButton from "./Components/WhatsAppButton"; // ✅ import karlo

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "☀️ NK Solar & Energy Systems",
  description: "generated for innovation ofnsolar energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        
        <WhatsAppButton /> {/* ✅ Har page ke bottom-right par show hoga */}
        <Footer />
      </body>
    </html>
  );
}
