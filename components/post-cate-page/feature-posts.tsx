import { Post } from "@/types";
import { FC } from "react";
import LargePostCard from "./large-post-card";
import OldestPosts from "./oldest-posts";
import VerticalLargePostCard from "./vectical-large-post-card";
import NewestPosts from "./newest-posts";

interface Props {
  posts: Post[];
  newestPosts: Post[];
}

const FeaturedPosts: FC<Props> = ({ posts, newestPosts }): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        {newestPosts.slice(0, 2).map((post) => (
          <LargePostCard key={post.title} post={post} />
        ))}
      </div>

      <div className="flex gap-8 mt-14">
        <div className="w-[30%]">
          {/* Mostly Read Posts  */}
          <h3 className="section-title">Xem nhiều</h3>
          <OldestPosts posts={posts} />
        </div>

        <div className="flex-1">
          {/* Newest Posts */}
          <h3 className="section-title">Tin mới</h3>
          <div className="flex gap-7">
            <div className="w-[70%]">
              <VerticalLargePostCard post={newestPosts[2]} />
            </div>
            <div className="w-[30%] flex flex-col gap-7">
              <NewestPosts posts={newestPosts.slice(3, 5)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
