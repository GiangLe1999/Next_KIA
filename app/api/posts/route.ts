import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const readPostsInfo = () => {
  const dirPathToRead = path.join(process.cwd(), "posts");

  const dirs = fs.readdirSync(dirPathToRead);

  const fileContentArr = [] as any;

  dirs.map((childFolderName) => {
    const childFolderPathToRead = path.join(
      process.cwd(),
      "posts",
      childFolderName
    );

    const fileNames = fs.readdirSync(childFolderPathToRead);

    fileNames.map((fileName) => {
      const filePathToRead = path.join(
        process.cwd(),
        "posts",
        childFolderName,
        fileName
      );
      const fileContent = fs.readFileSync(filePathToRead, {
        encoding: "utf-8",
      });
      fileContentArr.push(matter(fileContent).data);
    });
  });

  return fileContentArr;
};

export async function GET(request: Request) {
  const data = readPostsInfo();
  return NextResponse.json(data);
}
