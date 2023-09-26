import PriceListPageContent from "@/components/car-price-page/price-list-page-content";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = () => {
  return <PriceListPageContent isBrochurePage />;
};

export default page;
