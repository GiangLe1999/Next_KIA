import FirstBanner from "@/components/first-banner";
import PageSubHeader from "@/components/sub-page-header";
import { serviceSubHeaderItems } from "@/data/service-pages";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ServicePageLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div>
      <FirstBanner />
      <PageSubHeader items={serviceSubHeaderItems} />

      <div className="mt-4 container overflow-hidden">{children}</div>
    </div>
  );
};

export default ServicePageLayout;
