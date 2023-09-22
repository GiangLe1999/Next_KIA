import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(req: Request) {
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

  const filePathToRead = path.join(
    process.cwd(),
    "posts",
    cateSlug,
    postSlug + ".md"
  );
  const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
  const { content, data } = matter(fileContent);

  return NextResponse.json({ content, data });
}
