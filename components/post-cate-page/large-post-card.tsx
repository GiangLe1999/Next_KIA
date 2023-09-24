import { Post } from "@/types";
import Link from "next/link";
import { FC } from "react";
import NextImage from "../next-image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { formatShortDate, formatTime } from "@/lib/formatData";
import PostCardDate from "./post-card-date";

interface Props {
  post: Post;
}

const LargePostCard: FC<Props> = ({ post }): JSX.Element => {
  return (
    <div key={post.title} className="group">
      <Link
        href={"/tin-tuc" + post.slug}
        className="block relative w-full aspect-square rounded-sm overflow-hidden"
      >
        <NextImage src={post.thumb} alt={post.title} />
        <div className="absolute w-full bg-black/50 bottom-0 left-0 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 space-y-4 text-white p-[20px] transition duration-1000">
          <h2 className="uppercase font-bold text-[17px] leading-7">
            {post.title}
          </h2>
          <p className="line-clamp-2 text-sm">{post.desc}</p>
          <PostCardDate
            date={post.date}
            customClasses="text-zinc-300/90 text-sm"
          />
        </div>
      </Link>
    </div>
  );
};

export default LargePostCard;
