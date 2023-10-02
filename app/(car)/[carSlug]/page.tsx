import { getSingleCarContent, getSingleCarData } from "@/lib/fetchData";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import CarPageContent from "@/components/car-page/car-page-content";

interface Props {
  params: { carSlug: string };
}

export const generateMetadata = async ({
  params,
}: {
  params: { carSlug: string };
}) => {
  try {
    const carData = await getSingleCarData(params.carSlug);

    return {
      title: `KIA ${carData?.name}`,
      description: `KIA ${carData?.name} có giá từ ${carData?.priceFrom} VNĐ. Xem thêm thông số kỹ thuật và chương trình ưu đãi đặc biệt của ${carData?.name} tại website chính thức của KIA.`,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${params.carSlug}`,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

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
    carLines,
    registration,
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
    <CarPageContent
      name={name}
      priceFrom={priceFrom}
      slogan={slogan}
      mainInfo={mainInfo}
      category={category}
      tier={tier}
      slug={slug}
      carLines={carLines}
      registration={registration}
      serializedContent={serializedContent}
      promotionContent={promotionContent}
      colors={colors}
    />
  );
};

export default page;
