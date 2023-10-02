import FeaturedPosts from "@/components/post-cate-page/feature-posts";
import RestPosts from "@/components/post-cate-page/rest-post";
import { linkConstants } from "@/constants";
import { getAllPostsData } from "@/lib/fetchData";
import { sortNewestPosts } from "@/lib/sortPostsByDate";
import { Post } from "@/types";
import { NextPage } from "next";

interface Props {
  params: { cateSlug: string };
}

export const generateMetadata = ({
  params,
}: {
  params: { cateSlug: string };
}) => {
  const cate = params.cateSlug;

  let title = "";

  switch (cate) {
    case "tin-tuc-chung":
      title = "Tin tức KIA 2023";
      break;
    case "uu-dai":
      title = "Ưu đãi KIA 2023";
      break;
    case "su-kien":
      title = "Sự kiện KIA 2023";
      break;
    default:
      title = "Thông tin xe KIA 2023";
  }

  return {
    title,
    description:
      "Cập nhật tin tức, sự kiện, chương trình khuyến mãi mới nhất liên quan đến các dòng xe KIA trong năm 2023. Cập nhật mới nhất tại website chính thức của KIA Việt Nam.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.tintuc}`,
    },
  };
};

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
