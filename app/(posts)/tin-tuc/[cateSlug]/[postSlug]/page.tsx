import { getPostData, getRelatedPosts } from "@/lib/fetchData";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import PostContent from "@/components/single-post-page/post-content";
import { Post } from "@/types";
import RelatedPosts from "@/components/single-post-page/related-posts";
import { linkConstants } from "@/constants";

interface Props {
  params: { cateSlug: string; postSlug: string };
}

export const generateMetadata = async ({
  params,
}: {
  params: { cateSlug: string; postSlug: string };
}) => {
  const { cateSlug, postSlug } = params;

  const postData = await getPostData(cateSlug, postSlug);

  const { title, desc } = postData.data as Post;

  return {
    title,
    description: desc,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/tin-tuc/${cateSlug}/${postSlug}`,
    },
  };
};

const page: NextPage<Props> = async ({ params }) => {
  const { cateSlug, postSlug } = params;

  const postData = await getPostData(cateSlug, postSlug);

  const { title, desc, date, author } = postData.data as Post;

  const serializedContent = (await serialize(
    postData.content
  )) as MDXRemoteSerializeResult;

  const relatedPostsArr = await getRelatedPosts(cateSlug, postSlug);

  return (
    <div>
      <PostContent content={serializedContent} title={title} date={date} />

      <RelatedPosts data={relatedPostsArr} />
    </div>
  );
};

export default page;
