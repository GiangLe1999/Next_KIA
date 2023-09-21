import { FC } from "react";
import PriceListPageContent from "../car-price-page/price-list-page-content";

interface Props {}

const CarListPageContent: FC<Props> = (props): JSX.Element => {
  return <PriceListPageContent isCarListPage />;
};

export default CarListPageContent;
