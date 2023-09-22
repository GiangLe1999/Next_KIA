import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(request: Request) {
  try {
    const data = readPostsInfo();
    return NextResponse.json(data);
  } catch (error) {
    console.log("[TIN_TUC_CHUNG_POSTS_GET", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

const readPostsInfo = () => {
  const postsArr = [] as any[];

  const dirPathToRead = path.join(process.cwd(), "posts");

  const childFolders = fs.readdirSync(dirPathToRead);

  const childFoldersPaths = childFolders.map((folderName) => {
    return path.join(process.cwd(), "posts", folderName);
  });

  childFoldersPaths.forEach((folderPath) => {
    const fileNames = fs.readdirSync(folderPath);

    fileNames.forEach((fileName) => {
      const filePathToRead = path.join(folderPath, fileName);
      const fileContent = fs.readFileSync(filePathToRead, {
        encoding: "utf-8",
      });

      postsArr.push(matter(fileContent).data);
    });
  });

  return postsArr;
};
