import TestDriveForm from "@/components/test-drive-page/test-drive-form";
import { getCarDataByCategory } from "@/lib/fetchData";
import { CarByCategory } from "@/types";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = async () => {
  const cars = (await getCarDataByCategory()) as CarByCategory[];

  return (
    <div className="container">
      <TestDriveForm cars={cars} />
    </div>
  );
};

export default page;
