import { Post } from "@/types";
import Link from "next/link";
import { FC } from "react";
import NextImage from "../next-image";
import PostCardDate from "./post-card-date";

interface Props {
  post: Post;
}

const VerticalLargePostCard: FC<Props> = ({ post }): JSX.Element => {
  return (
    <div className="w-full">
      <Link
        href={"/tin-tuc" + post.slug}
        className="relative aspect-square w-full block rounded-sm overflow-hidden mb-5"
      >
        <NextImage
          src={post.thumb}
          alt={post.title}
          className="hover:scale-110 transition"
        />
      </Link>

      <Link href={"/tin-tuc" + post.slug}>
        <h4 className="font-bold mb-2">{post.title}</h4>
        <PostCardDate
          date={post.date}
          customClasses="text-zinc-500/90 text-xs mb-3"
        />
        <p className="line-clamp-2 text-sm leading-6">{post.desc}</p>
      </Link>
    </div>
  );
};

export default VerticalLargePostCard;
