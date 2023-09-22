import PostsPageHeader from "@/components/post-page-header";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PostsPageLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <PostsPageHeader />
      <div className="mt-14">
        <div className="container">{children}</div>
      </div>
    </>
  );
};

export default PostsPageLayout;
