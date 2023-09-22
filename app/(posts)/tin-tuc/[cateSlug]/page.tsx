import { getAllPostsData } from "@/lib/fetchData";
import { Post } from "@/types";
import { NextPage } from "next";
import Link from "next/link";

interface Props {
  params: { cateSlug: string };
}

const page: NextPage<Props> = async ({ params }) => {
  const posts: Post[] = await getAllPostsData(params.cateSlug);

  return (
    <div>
      {posts.map((post) => (
        <Link key={post.title} href={"/tin-tuc" + post.slug}>
          Hello
        </Link>
      ))}
    </div>
  );
};

export default page;
