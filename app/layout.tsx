import Header from "@/components/layout/header";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const kiaFont = localFont({
  src: [
    {
      path: "../public/assets/fonts/VN-KiaSignature-Regular.woff",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/assets/fonts/VN-KiaSignature-Bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kiaFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}