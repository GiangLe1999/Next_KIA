import { Post } from "@/types";
import Link from "next/link";
import { FC } from "react";
import NextImage from "../next-image";

interface Props {
  post: Post;
}

const RelatedPostCard: FC<Props> = ({ post }): JSX.Element => {
  return (
    <div className="border rounded-sm overflow-hidden">
      <Link
        href={"/tin-tuc" + post.slug}
        className="relative w-full aspect-square block overflow-hidden"
      >
        <NextImage
          src={post.thumb}
          alt={post.title}
          className="hover:scale-110"
        />
      </Link>

      <div className="p-5">
        <h5 className="uppercase font-bold mb-5 line-clamp-2 text-center text-sm leading-6">
          <Link href={"/tin-tuc" + post.slug}>{post.title}</Link>
        </h5>
        <div className="w-full bg-black h-[1px] mb-4"></div>

        <p className="text-sm line-clamp-3 leading-6">
          <Link href={"/tin-tuc" + post.slug}>{post.desc}</Link>
        </p>
      </div>
    </div>
  );
};

export default RelatedPostCard;
