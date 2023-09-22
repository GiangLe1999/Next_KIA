import { readPostsInfo } from "@/lib/readPostsInfo";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const data = readPostsInfo("thong-tin-xe");
    return NextResponse.json(data);
  } catch (error) {
    console.log("[THONG_TIN_XE_POSTS_GET", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
