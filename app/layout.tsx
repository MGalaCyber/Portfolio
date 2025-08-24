import { Geist } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { MeshGradientComponent } from "@/components/mesh-gradient";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GXD Portfolio",
  description: "Enjoy working on various projects and exploring new technologies. 5+ years experience. Passionate about React, Node.js, Express.js, Discord.js, baileys, and modern web technologies.",
};

export const dynamic = "force-static"
export const revalidate = 30

export const viewport: Viewport = {
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* AdSense global script */}
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8954392795677883"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-8954392795677883"></meta>
      </head>
      <body
        className={`${geistSans.className} antialiased max-w-screen min-h-svh bg-slate-1 text-slate-12 opacity-0 duration-75 transition-opacity`}
      >
        <MeshGradientComponent
          colors={["#001c80", "#1ac7ff", "#04ffb1", "#ff1ff1"]}
          speed={2.5}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div className="min-h-screen flex items-center justify-center relative z-[1] p-4">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
