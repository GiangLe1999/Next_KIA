import { Post } from "@/types";
import Link from "next/link";
import { FC } from "react";
import NextImage from "../next-image";
import PostCardDate from "./post-card-date";
import { AiOutlineDoubleRight } from "react-icons/ai";

interface Props {
  post: Post;
}

const VerticalSmallPostCard: FC<Props> = ({ post }): JSX.Element => {
  return (
    <div className="w-full">
      <Link
        href={"/tin-tuc" + post.slug}
        className="relative w-full aspect-square block rounded-sm overflow-hidden mb-3"
      >
        <NextImage
          src={post.thumb}
          alt={post.title}
          className="hover:scale-110"
        />
      </Link>

      <Link href={"/tin-tuc" + post.slug}>
        <h4 className="font-bold text-sm line-clamp-2 mb-1">{post.title}</h4>
        <PostCardDate
          date={post.date}
          customClasses="text-xs text-zinc-500/90"
        />
      </Link>

      <Link
        className="text-xs text-zinc-600 mt-2 flex items-center gap-1 hover:text-primary border-b border-transparent hover:border-primary w-fit transition"
        href={"/tin-tuc" + post.slug}
      >
        <span>Xem ngay</span>
        <AiOutlineDoubleRight size={10} />
      </Link>
    </div>
  );
};

export default VerticalSmallPostCard;
