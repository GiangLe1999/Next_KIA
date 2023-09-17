import GeneralInfo from "@/components/car-page/general-info";
import { getSingleCarContent, getSingleCarData } from "@/lib/fetchData";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import PromotionInfo from "@/components/car-page/promotion-info";
import ImageGallery from "@/components/car-page/image-gallery";

interface Props {
  params: { carSlug: string };
}

const page: NextPage<Props> = async ({ params }) => {
  const carData = await getSingleCarData(params.carSlug);
  const {
    name,
    slogan,
    priceFrom,
    slug,
    category,
    tier,
    mainInfo,
    colors,
    carLInes,
  } = carData;

  const mdContent = (await getSingleCarContent(params.carSlug)) as {
    content: string;
    data: { promotion: string };
  } as any;

  const promotionContent = mdContent.data.promotion as any;

  const serializedContent = (await serialize(
    mdContent.content
  )) as MDXRemoteSerializeResult;

  return (
    <div className="container mt-28 space-y-14">
      <div className="grid grid-cols-2 gap-6">
        <GeneralInfo
          name={name}
          priceFrom={priceFrom}
          slogan={slogan}
          mainInfo={mainInfo}
          category={category}
          tier={tier}
        />

        <PromotionInfo name={name} content={promotionContent} />
      </div>

      <ImageGallery />
    </div>
  );
};

export default page;
