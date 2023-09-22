"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {}

const items: { title: string; link: string }[] = [
  { title: "Tin tức chung", link: "/tin-tuc-chung" },
  { title: "Ưu đãi", link: "/uu-dai" },
  { title: "Sự kiện", link: "/su-kien" },
  { title: "Thông tin xe", link: "/thong-tin-xe" },
];

const PostsPageHeader: FC<Props> = (props): JSX.Element => {
  const path = usePathname();
  return (
    <div className="posts-page-header">
      <div className="container flex justify-around">
        {items.map((item) => (
          <Link
            href={"/tin-tuc" + item.link}
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

export default PostsPageHeader;
