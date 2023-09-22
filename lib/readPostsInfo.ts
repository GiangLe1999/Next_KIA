import matter from "gray-matter";
import path from "path";
import fs from "fs";

export const readPostsInfo = (subFolderName: string) => {
  const dirPathToRead = path.join(process.cwd(), "posts", subFolderName);
  const dirs = fs.readdirSync(dirPathToRead);

  return dirs.map((filename) => {
    const filePathToRead = path.join(
      process.cwd(),
      "posts",
      subFolderName,
      filename
    );
    const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    return matter(fileContent).data;
  });
};
