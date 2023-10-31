import Header from "@/components/layout/header";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/layout/footer";
import StyledProgressBar from "@/components/progress-bar";
import StickyBtns from "@/components/layout/sticky-btns";
import { pageConstants } from "@/constants";
import ContactBtns from "@/components/layout/contact-btns";

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
  verification: {
    google: "wItXhin9D-BzR7t0Ph9c3O8IUFKrFFK6KrThm3c4f9c",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={kiaFont.className}>
        <StyledProgressBar />
        <Header />
        {children}
        <Footer />
        <StickyBtns />
        <ContactBtns />
      </body>
    </html>
  );
}
