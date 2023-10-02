import PriceListPageContent from "@/components/car-price-page/price-list-page-content";
import { linkConstants } from "@/constants";
import { NextPage } from "next";

interface Props {}

export const generateMetadata = () => {
  return {
    title: "Tải Brochure KIA",
    description:
      "Download E-Brochure mới nhất của các dòng xe KIA. Đọc thêm về các tính năng, thông số kỹ thuật và chế độ bảo hành đầy đủ của mẫu xe mà bạn yêu thích.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.brochure}`,
    },
  };
};

const page: NextPage<Props> = () => {
  return <PriceListPageContent isBrochurePage />;
};

export default page;
