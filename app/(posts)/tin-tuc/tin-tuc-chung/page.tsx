import { getAllPostsData } from "@/lib/fetchData";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = async () => {
  const posts = await getAllPostsData();

  console.log(posts);

  return <div>page</div>;
};

export default page;
