import { Post } from "@/types";
import Link from "next/link";
import { FC } from "react";
import NextImage from "../next-image";
import PostCardDate from "./post-card-date";

interface Props {
  post: Post;
}

const HorizontalSmallPostCard: FC<Props> = ({ post }): JSX.Element => {
  return (
    <div className="flex gap-4 items-center">
      <Link
        href={"/tin-tuc" + post.slug}
        className="relative w-[30%] aspect-square block rounded-sm overflow-hidden"
      >
        <NextImage
          src={post.thumb}
          alt={post.title}
          className="hover:scale-110"
        />
      </Link>

      <div className="flex-1 space-y-2">
        <h4 className="line-clamp-1 text-sm font-bold">
          <Link href={"/tin-tuc" + post.slug}>{post.title}</Link>
        </h4>
        <PostCardDate
          date={post.date}
          customClasses="text-xs text-zinc-500/90"
        />
        <p className="text-xs line-clamp-2 leading-6">
          <Link href={"/tin-tuc" + post.slug}>{post.desc}</Link>
        </p>
      </div>
    </div>
  );
};

export default HorizontalSmallPostCard;
