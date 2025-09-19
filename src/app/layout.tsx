import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import Wrapper from "./wrapper";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Portfolio",
  description:
    "I invite you to explore my portfolio and discover the projects and skills that I've honed over the years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:title" content="Ashish Kumar's Portfolio" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Hi , I am ashish and am looking to work , so hit me up or check out atleast."
      />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/147980956?s=96&v=4"
      />
      <Suspense
        fallback={
          <div className="animate-pulse font-bold h-screen w-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <ThemeProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Wrapper>{children}</Wrapper>
          </body>
        </ThemeProvider>
      </Suspense>
    </html>
  );
}
