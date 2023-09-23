import HorizontalLargePostCard from "@/components/post-cate-page/horizontal-large-post-card";
import LargePostCard from "@/components/post-cate-page/large-post-card";
import RestPosts from "@/components/post-cate-page/rest-post";
import VerticalLargePostCard from "@/components/post-cate-page/vectical-large-post-card";
import VerticalSmallPostCard from "@/components/post-cate-page/vertical-small-post-card";
import { getAllPostsData } from "@/lib/fetchData";
import { sortNewestPosts } from "@/lib/sortPostsByDate";
import { Post } from "@/types";
import { NextPage } from "next";

interface Props {
  params: { cateSlug: string };
}

const page: NextPage<Props> = async ({ params }) => {
  const posts = await getAllPostsData(params.cateSlug);

  const newestPosts: Post[] = sortNewestPosts(posts);

  return (
    <div>
      {/* Big Cards Section */}
      <div className="grid grid-cols-2 gap-5">
        {newestPosts.slice(0, 2).map((post) => (
          <LargePostCard key={post.title} post={post} />
        ))}
      </div>

      {/* Newest Posts & Mostly Read Posts */}
      <div className="flex gap-8 mt-14">
        <div className="w-[30%]">
          <h3 className="font-bold text-2xl mb-5">Xem nhiều</h3>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-2xl mb-5">Tin mới</h3>
          <div className="flex gap-7">
            <div className="w-[70%]">
              <VerticalLargePostCard post={newestPosts[2]} />
            </div>
            <div className="w-[30%] flex flex-col gap-7">
              {newestPosts.slice(3, 5).map((post) => (
                <VerticalSmallPostCard post={post} key={post.title} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The Rest */}
      <RestPosts posts={newestPosts.slice(5)} />
    </div>
  );
};

export default page;
