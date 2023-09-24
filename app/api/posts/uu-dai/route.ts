import { readPostsInfo } from "@/lib/readPostsInfo";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const data = readPostsInfo("uu-dai");
    return NextResponse.json(data);
  } catch (error) {
    console.log("[UU_DAI_POSTS_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
