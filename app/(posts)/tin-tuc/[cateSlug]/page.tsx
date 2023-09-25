import FeaturedPosts from "@/components/post-cate-page/feature-posts";
import HorizontalSmallPostCard from "@/components/post-cate-page/horizontal-small-post-card";
import LargePostCard from "@/components/post-cate-page/large-post-card";
import NewestPosts from "@/components/post-cate-page/newest-posts";
import OldestPosts from "@/components/post-cate-page/oldest-posts";
import RestPosts from "@/components/post-cate-page/rest-post";
import VerticalLargePostCard from "@/components/post-cate-page/vectical-large-post-card";
import VerticalSmallPostCard from "@/components/post-cate-page/vertical-small-post-card";
import { getAllPostsData } from "@/lib/fetchData";
import { sortNewestPosts, sortOldestPosts } from "@/lib/sortPostsByDate";
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
      <FeaturedPosts posts={posts} newestPosts={newestPosts} />

      {/* The Rest */}
      <RestPosts posts={newestPosts.slice(5)} />
    </div>
  );
};

export default page;
