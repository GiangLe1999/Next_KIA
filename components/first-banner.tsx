"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import NextImage from "./next-image";

interface Props {}

const FirstBanner: FC<Props> = (props): JSX.Element => {
  const path = usePathname();
  return (
    <div className="relative w-full aspect-[2.4] mt-[61px]">
      <NextImage
        src={`/assets/images/first-banners${path}.webp`}
        alt={`${path} banner`}
      />
    </div>
  );
};

export default FirstBanner;
