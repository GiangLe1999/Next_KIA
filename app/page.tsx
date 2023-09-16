import CarCategories from "@/components/home/car-categories";
import HomeSwiper from "@/components/home/main-swiper";
import { getCarDataByCategory } from "@/lib/fetchData";
import { CarByCategory } from "@/types";

export default async function Home() {
  // const cars = (await getCarDataByCategory()) as CarByCategory[];
  return (
    <main className="mt-[61px] space-y-14">
      <HomeSwiper />
      {/* <CarCategories cars={cars} /> */}
      <div className="">Hello</div>
    </main>
  );
}
