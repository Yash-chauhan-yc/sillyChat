/* eslint-disable @typescript-eslint/no-unused-vars */
import PostEditor from "@/components/posts/editor/PostEditor";
import { useSession } from "./SessionContext";
import prisma from "@/lib/prisma";
import Post from "@/components/posts/Posts";

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          username: true,
          displayName: true,
          avatarUrl: true,
        },
      },
    },
    orderBy: { createdAt: "asc" },
  });
  return (
    <div className="h-[200vh] w-full bg-red-50">
      <div className="w-full">
        <PostEditor />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
