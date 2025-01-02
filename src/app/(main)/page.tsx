/* eslint-disable @typescript-eslint/no-unused-vars */
import PostEditor from "@/components/posts/editor/PostEditor";
import { useSession } from "./SessionContext";
import prisma from "@/lib/prisma";
import Post from "@/components/posts/Post";
import { postDataInclude } from "@/lib/types";
import TrendsSidebar from "@/components/TrendsSidebar";
import ForYouFeed from "./ForYouFeed";

export default async function Home() {
  // const posts = await prisma.post.findMany({
  //   include: postDataInclude,
  //   orderBy: { createdAt: "asc" },
  // });
  return (
    <div className="flex gap-5 w-full min-w-0">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        {/* {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))} */}
        <ForYouFeed />
      </div>
      <TrendsSidebar />
    </div>
  );
}
