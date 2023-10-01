import { Post } from "@/types";
import Link from "next/link";
import { FC } from "react";
import NextImage from "../next-image";
import PostCardDate from "./post-card-date";
import BtnWithIcon from "../btn-with-icon";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  post: Post;
}

const HorizontalLargePostCard: FC<Props> = ({ post }): JSX.Element => {
  return (
    <div className="flex gap-5 flex-wrap">
      <div className="w-[25%] max-[650px]:w-full">
        <Link
          href={"/tin-tuc" + post.slug}
          className="relative w-full aspect-square block rounded-sm overflow-hidden"
        >
          <NextImage
            src={post.thumb}
            alt={post.title}
            className="hover:scale-110"
          />
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-between max-[650px]:w-full">
        <Link href={"/tin-tuc" + post.slug} className="space-y-3">
          <h4 className="text-xl font-bold">{post.title}</h4>

          <PostCardDate date={post.date} customClasses="text-zinc-500/90" />

          <p className="mb-3 text-zinc-500/90 italic text-sm">
            Viết bởi {post.author}
          </p>

          <p className="leading-8">{post.desc}</p>
        </Link>

        <BtnWithIcon
          content="Xem thêm"
          iconBehind={BsArrowRightShort}
          iconSize={24}
          customClasses="!bg-primary w-fit ml-auto"
          to={"/tin-tuc" + post.slug}
        />
      </div>
    </div>
  );
};

export default HorizontalLargePostCard;
