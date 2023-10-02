import CarListPageContent from "@/components/car-list-page/car-list-page-content";
import { linkConstants, pageConstants } from "@/constants";
import { NextPage } from "next";

interface Props {}

export const generateMetadata = () => {
  return {
    title: "Ô tô KIA 2023",
    description: pageConstants.siteDescription,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.sanpham}`,
    },
  };
};

const CarListPage: NextPage<Props> = () => {
  return <CarListPageContent />;
};

export default CarListPage;
