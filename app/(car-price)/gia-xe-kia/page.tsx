import PriceListPageContent from "@/components/car-price-page/price-list-page-content";
import { linkConstants } from "@/constants";

export const generateMetadata = () => {
  return {
    title: "Giá xe KIA 2023",
    description:
      "Bảng giá xe Kia mới nhất tại đại lý của các dòng 4 chỗ Morning, 5 chỗ Soluto, 5 chỗ gầm cao Seltos, 7 chỗ Sorento, Carnival.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.giaxe}`,
    },
  };
};

const PriceListPage = () => {
  return <PriceListPageContent />;
};

export default PriceListPage;
