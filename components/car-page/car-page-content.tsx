"use client";

import { CarLineType } from "@/types";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { FC, useEffect, useState } from "react";
import GeneralInfo from "./general-info";
import PromotionInfo from "./promotion-info";
import ImageGallery from "./image-gallery";
import MainContent from "./main-content";
import { stickyMenuItems } from "@/data/single-car-page";
import Link from "next/link";

interface Props {
  name: string;
  slogan: string;
  priceFrom: number;
  mainInfo: { seats: number; gear: string; fuel: string; engine: string };
  category: string;
  tier: string;
  slug: string;
  registration: number;
  carLines: CarLineType[];
  serializedContent: MDXRemoteSerializeResult;
  promotionContent: string;
  colors: { color: string; colorImg: string; colorText: string }[];
}

const CarPageContent: FC<Props> = ({
  name,
  slogan,
  priceFrom,
  mainInfo,
  category,
  tier,
  slug,
  registration,
  carLines,
  serializedContent,
  promotionContent,
  colors,
}): JSX.Element => {
  const [currentSection, setCurrentSection] = useState("");

  const scrollHandler = () => {
    const sections = Array.from(document.getElementsByTagName("section"));

    const position =
      document.body.scrollTop || document.documentElement.scrollTop;

    sections.forEach((section, index) => {
      if (
        position >= section.offsetTop - 150 &&
        position < section.offsetTop + section.offsetHeight
      ) {
        setCurrentSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <div className="bg-primary flex items-center justify-center gap-4 px-3 py-2 rounded-sm sticky top-[61px] z-50">
        {stickyMenuItems.map((item, index) => (
          <Link
            className={`car-page-sticky-item ${
              item.id === currentSection && "!border-white hover:after:w-0"
            }`}
            href={`/${slug}${item.link}`}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="container mt-28 space-y-14">
        <div className="grid grid-cols-2 gap-6">
          <GeneralInfo
            name={name}
            priceFrom={priceFrom}
            slogan={slogan}
            mainInfo={mainInfo}
            category={category}
            tier={tier}
          />

          <PromotionInfo name={name} content={promotionContent} />
        </div>

        <ImageGallery colors={colors} />

        <MainContent
          name={name}
          slug={slug}
          carLines={carLines}
          registration={registration}
          serializedContent={serializedContent}
        />
      </div>
    </>
  );
};

export default CarPageContent;
