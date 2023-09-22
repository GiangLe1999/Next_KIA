import { readPostsInfo } from "@/lib/readPostsInfo";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const data = readPostsInfo("su-kien");
    return NextResponse.json(data);
  } catch (error) {
    console.log("[SU_KIEN_CHUNG_POSTS_GET", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
