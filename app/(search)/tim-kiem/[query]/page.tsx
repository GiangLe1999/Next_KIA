import SearchPageContent from "@/components/search-page/search-page-content";
import { NextPage } from "next";

interface Props {
  params: { query: string };
}

const page: NextPage<Props> = ({ params }) => {
  const { query } = params;

  return (
    <div className="container">
      <SearchPageContent query={query} />
    </div>
  );
};

export default page;
