import { Post } from "@/types";
import { FC } from "react";
import VerticalSmallPostCard from "./vertical-small-post-card";

interface Props {
  posts: Post[];
}

const NewestPosts: FC<Props> = ({ posts }): JSX.Element => {
  return (
    <>
      {posts.map((post) => (
        <VerticalSmallPostCard post={post} key={post.title} />
      ))}
    </>
  );
};

export default NewestPosts;
