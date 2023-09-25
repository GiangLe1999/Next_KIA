import { sortOldestPosts } from "@/lib/sortPostsByDate";
import { Post } from "@/types";
import { FC } from "react";
import HorizontalSmallPostCard from "./horizontal-small-post-card";

interface Props {
  posts: Post[];
}

const OldestPosts: FC<Props> = ({ posts }): JSX.Element => {
  const oldestPosts = sortOldestPosts(posts);
  return (
    <div className="flex flex-col gap-9">
      {oldestPosts.slice(0, 5).map((post) => (
        <HorizontalSmallPostCard post={post} key={post.title} />
      ))}
    </div>
  );
};

export default OldestPosts;
