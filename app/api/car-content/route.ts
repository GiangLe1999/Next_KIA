import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug?.trim())
      return NextResponse.json(
        { error: "Invalid slug!" },
        {
          status: 422,
        }
      );

    const filePathToRead = path.join(
      process.cwd(),
      "car-content",
      slug + ".md"
    );
    const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    const { content, data } = matter(fileContent);

    return NextResponse.json({ content, data });
  } catch (error) {
    console.log("CAR_CONTENT_GET", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
