import TestDriveForm from "@/components/test-drive-page/test-drive-form";
import { linkConstants } from "@/constants";
import { getCarDataByCategory } from "@/lib/fetchData";
import { CarByCategory } from "@/types";
import { NextPage } from "next";

interface Props {}

export const generateMetadata = () => {
  return {
    title: "Lái thử xe KIA",
    description:
      "Liên hệ ngay với KIA Việt Nam để đặt lịch lái thử các dòng xe KIA mới nhất tại website chính thức của KIA Việt Nam.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.laithu}`,
  };
};

const page: NextPage<Props> = async () => {
  const cars = (await getCarDataByCategory()) as CarByCategory[];

  return (
    <div className="container">
      <TestDriveForm cars={cars} />
    </div>
  );
};

export default page;
