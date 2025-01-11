import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const circularWeb = localFont({
  src: [
    {
      path: "../../public/fonts/circularweb-book.woff2",
    },
  ],
  variable: "--font-circularWeb",
});

const general = localFont({
  src: [
    {
      path: "../../public/fonts/general.woff2",
    },
  ],
  variable: "--font-general",
});

const robertMedium = localFont({
  src: [
    {
      path: "../../public/fonts/robert-medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-robert-medium",
});

const robertRegular = localFont({
  src: [
    {
      path: "../../public/fonts/robert-regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-robert-regular",
});

const zentry = localFont({
  src: [
    {
      path: "../../public/fonts/zentry-regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-zentry-regular",
});

export const metadata: Metadata = {
  title: "Portfolio - Awwwards",
  description: "This is a sample landing page to showcase my skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${circularWeb.variable} ${general.variable} ${robertMedium.variable} ${robertRegular.variable} ${zentry.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
