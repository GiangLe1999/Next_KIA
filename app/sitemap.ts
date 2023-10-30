import { linkConstants } from "@/constants";
import dbConnect from "@/lib/db";
import { getAllPostsData } from "@/lib/fetchData";
import Car from "@/model/Car";
import { Post } from "@/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

  dbConnect();
  const cars = await Car.find().select("slug updatedAt");

  const carLinks = cars?.map((car) => ({
    url: `${baseURL}/${car.slug}`,
    lastModified: new Date(car.updatedAt),
  }));

  const posts = await getAllPostsData("tin-tuc-chung");

  const postLinks = posts.map((post: Post) => ({
    url: `${baseURL}/tin-tuc${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.sanpham}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.giaxe}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.tintuc}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.tragop}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.uudai}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.sukien}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.thongtinxe}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.dichvu}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.suachua}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.baoduong}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.baohanh}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.lienhe}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.brochure}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.laithu}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.philanbanh}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.gioithieu}`,
      lastModified: new Date(),
    },
    ...carLinks,
    ...postLinks,
  ];
}
