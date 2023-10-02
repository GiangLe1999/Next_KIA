import Header from "@/components/layout/header";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/layout/footer";
import StyledProgressBar from "@/components/progress-bar";
import StickyBtns from "@/components/layout/sticky-btns";
import { pageConstants } from "@/constants";

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
  title: {
    template: `%s | ${pageConstants.siteTitle}`,
    default: pageConstants.siteTitle,
  },
  description: pageConstants.siteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kiaFont.className}>
        <StyledProgressBar />
        <Header />
        {children}
        <Footer />
        <StickyBtns />
      </body>
    </html>
  );
}
