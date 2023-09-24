import { getPostData } from "@/lib/fetchData";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import PostContent from "@/components/single-post-page/post-content";
import { Post } from "@/types";

interface Props {
  params: { cateSlug: string; postSlug: string };
}

const page: NextPage<Props> = async ({ params }) => {
  const { cateSlug, postSlug } = params;

  const postData = await getPostData(cateSlug, postSlug);

  const { title, desc, date, author } = postData.data as Post;

  const serializedContent = (await serialize(
    postData.content
  )) as MDXRemoteSerializeResult;

  return (
    <div>
      <PostContent content={serializedContent} title={title} date={date} />
    </div>
  );
};

export default page;