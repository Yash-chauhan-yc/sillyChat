import { Post as PostData } from "@prisma/client";

interface PostsProps {
  post: PostData;
}

export default function Post({ post }: PostsProps) {
  return <article>{post.content}</article>;
}
