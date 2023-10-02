import CarCategories from "@/components/home/car-categories";
import MainOptionsSwiper from "@/components/home/main-options-swiper";
import HomeSwiper from "@/components/home/main-swiper";
import FeaturedPosts from "@/components/post-cate-page/feature-posts";
import RestPosts from "@/components/post-cate-page/rest-post";
import { pageConstants } from "@/constants";
import { getAllPostsData, getCarDataByCategory } from "@/lib/fetchData";
import { sortNewestPosts } from "@/lib/sortPostsByDate";
import { CarByCategory, Post } from "@/types";

export const generateMetadata = () => {
  return {
    title: "Xe KIA chính hãng | KIA Việt Nam",
    description: pageConstants.siteDescription,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
};

export default async function Home() {
  const cars = (await getCarDataByCategory()) as CarByCategory[];

  const posts = await getAllPostsData("tin-tuc-chung");
  const newestPosts: Post[] = sortNewestPosts(posts);

  return (
    <main className="mt-[61px] space-y-14">
      <HomeSwiper />
      <CarCategories cars={cars} />
      <MainOptionsSwiper />

      <div className="container">
        <h3 className="section-title">Tin tức KIA</h3>
        <FeaturedPosts posts={posts} newestPosts={newestPosts} />

        <div className="max-[1000px]:block hidden">
          <RestPosts posts={posts} />
        </div>
      </div>
    </main>
  );
}
