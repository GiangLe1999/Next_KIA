"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  items: { title: string; link: string }[];
  customClasses?: string;
}

const PageSubHeader: FC<Props> = ({ items, customClasses }): JSX.Element => {
  const path = usePathname();
  return (
    <div className={`posts-page-header ${customClasses}`}>
      <div className="container flex justify-around">
        {items.map((item) => (
          <Link
            href={item.link}
            key={item.title}
            className={`${
              path.includes(item.link)
                ? "border-b-[3px] border-primary hover:after:!w-0"
                : "opacity-50"
            } `}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PageSubHeader;
