import CarCategories from "@/components/home/car-categories";
import MainOptionsSwiper from "@/components/home/main-options-swiper";
import HomeSwiper from "@/components/home/main-swiper";
import { getCarDataByCategory } from "@/lib/fetchData";
import { CarByCategory } from "@/types";

export default async function Home() {
  const cars = (await getCarDataByCategory()) as CarByCategory[];
  return (
    <main className="mt-[61px] space-y-14">
      <HomeSwiper />
      <CarCategories cars={cars} />
      <MainOptionsSwiper />
    </main>
  );
}
