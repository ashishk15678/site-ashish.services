"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import HomeContent from "./page";
import SkillsContent from "./page";
import ArtsContent from "./page";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const renderContent = () => {
    if (pathname === "/") return <HomeContent />
    if (pathname === "/skills") return <SkillsContent />
    if (pathname === "/arts") return <ArtsContent />
    return <HomeContent />
  }
  const [cursor, setCursor] = useState(true)
  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((c) => !c)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Determine which page to show

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >


        <div className="max-w-3xl mx-auto">
          <header className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="text-xs text-gray-500">ashish.services ~ {pathname === "/" ? "home" : pathname.substring(1)}</div>
            </div>
            <nav className="flex space-x-4 text-xs">
              <Link href="/" className={pathname === "/" ? "text-white" : "text-gray-500 hover:text-gray-300"}>
                home
              </Link>
              <Link href="/skills" className={pathname === "/skills" ? "text-white" : "text-gray-500 hover:text-gray-300"}>
                skills
              </Link>
              <Link href="/arts" className={pathname === "/arts" ? "text-white" : "text-gray-500 hover:text-gray-300"}>
                arts
              </Link>
            </nav>
          </header>

          <main className="space-y-6 font-mono">
            {renderContent()}
            <div className="h-4"></div>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="text-green-500 mr-2">$</span>
              <span className="mr-1">_</span>
              <span className={cursor ? "opacity-100" : "opacity-0"}>|</span>
            </div>
          </main>
        </div>

      </body>
    </html>
  );
}
