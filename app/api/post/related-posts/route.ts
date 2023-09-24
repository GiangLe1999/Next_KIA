import { NextResponse } from "next/server";
import { readPostsInfo } from "@/lib/readPostsInfo";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const cateSlug = searchParams.get("cate_slug");
    const postSlug = searchParams.get("post_slug");

    if (!cateSlug?.trim() || !postSlug?.trim())
      return NextResponse.json(
        { error: "Invalid slug!" },
        {
          status: 422,
        }
      );

    const postsData = readPostsInfo(cateSlug);

    const relatedPostsData = postsData.filter(
      (post) => !post.slug.includes(postSlug)
    );

    const random1 = Math.floor(Math.random() * (relatedPostsData.length - 1));

    let random2 = Math.floor(Math.random() * (relatedPostsData.length - 1));
    while (random1 === random2) {
      random2 = Math.floor(Math.random() * (relatedPostsData.length - 1));
    }

    let random3 = Math.floor(Math.random() * (relatedPostsData.length - 1));
    while (random3 === random2 || random3 === random1) {
      random3 = Math.floor(Math.random() * (relatedPostsData.length - 1));
    }

    return NextResponse.json([
      relatedPostsData[random1],
      relatedPostsData[random2],
      relatedPostsData[random3],
    ]);
  } catch (error) {
    console.log("[RELATED_POSTS_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
