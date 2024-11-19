import "./global.css";
import { Poppins } from "next/font/google/index";
export const metadata = {
  title: {
    default: "ashish.services",
  },
  description: "Still trying to create big things",
  openGraph: {
    title: "ashish.services",
    description: "Welcome!",
    url: "https://ashish.services",
    siteName: "ashish.services",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={``}>{children}</body>
    </html>
  );
}
