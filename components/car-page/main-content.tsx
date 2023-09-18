"use client";

import { stickyMenuItems } from "@/data/single-car-page";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import PriceSection from "./price-section";
import { CarLineType } from "@/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";

interface Props {
  name: string;
  slug: string;
  registration: number;
  carLines: CarLineType[];
  serializedContent: MDXRemoteSerializeResult;
}

const components = { Image };

const MainContent: FC<Props> = ({
  name,
  slug,
  registration,
  carLines,
  serializedContent,
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

      if (index === 0) {
        if (position < section.offsetTop - 150) {
          setCurrentSection("");
        }
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
    <div>
      {/* Sticky Menu */}
      <div className="bg-primary flex items-center justify-center gap-4 px-3 py-2 rounded-sm sticky top-[61px] z-50">
        {stickyMenuItems.map((item, index) => (
          <Link
            className={`px-2 py-[6px] rounded-sm border border-transparent text-white text-sm font-bold transition ${
              item.id === currentSection && "!border-white"
            }`}
            href={`/${slug}${item.link}`}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <PriceSection name={name} lines={carLines} registration={registration} />

      <div className="prose postContent overflow-hidden">
        <MDXRemote {...serializedContent} components={components} />
      </div>
    </div>
  );
};

export default MainContent;
