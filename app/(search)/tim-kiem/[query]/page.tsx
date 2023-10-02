import SearchPageContent from "@/components/search-page/search-page-content";
import { NextPage } from "next";

interface Props {
  params: { query: string };
}

export const generateMetadata = ({ params }: { params: { query: string } }) => {
  return {
    title: `Kết quả tìm kiếm cho ${params.query}`,
    description: `Kết quả tìm kiếm cho từ khóa ${params.query} tại website KIA Việt Nam`,
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/timkiem`,
  };
};

const page: NextPage<Props> = ({ params }) => {
  const { query } = params;

  return (
    <div className="container">
      <SearchPageContent query={query} />
    </div>
  );
};

export default page;
