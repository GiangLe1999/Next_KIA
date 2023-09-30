import { NextResponse } from "next/server";
import { readPostsInfo } from "../posts/tin-tuc-chung/route";
import dbConnect from "@/lib/db";
import Car from "@/model/Car";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    const allPosts = readPostsInfo();

    const postResults = allPosts.filter((post) => {
      return post.title
        .toLocaleLowerCase()
        .includes(query?.toLocaleLowerCase());
    });

    await dbConnect();

    const carResults = await Car.find({
      name: { $regex: query, $options: "i" },
    }).select("_id name slogan avatar priceFrom slug brochure");

    return NextResponse.json({ posts: postResults, cars: carResults });
  } catch (error) {
    console.log("[SEARCH_RESULTS_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
