import { Post } from "@/types";
import { FC } from "react";
import RelatedPostCard from "./related-post-card";

interface Props {
  data: Post[];
}

const RelatedPosts: FC<Props> = ({ data }): JSX.Element => {
  return (
    <div className="mt-14">
      <h4 className="text-center font-bold text-2xl">TIN TỨC LIÊN QUAN</h4>

      <div className="grid grid-cols-3 gap-5 mt-4">
        {data.map((post) => (
          <RelatedPostCard post={post} key={post.title} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
