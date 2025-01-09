import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { client } from "~/lib/apollo-client";
import { GET_SINGLE_POST } from "~/lib/gueries";

export default async function Posts({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const urlSlug = (await params).slug;

  const _client = await client.query({
    query: GET_SINGLE_POST,
    variables: { urlSlug },
    fetchPolicy: "no-cache", // TODO: explore caching options
  });

  if (!_client) return null;

  const { data } = _client;

  const post = data.blogPosts[0];
  const date = new Date(post.updatedAt);
  const formattedDate = date.toLocaleString("en-US", { dateStyle: "long" });

  return (
    <div className="pb-8 sm:pb-10">
      <h1 className="text-4xl font-bold tracking-tighter sm:mt-7 sm:text-6xl">
        {post.title}
      </h1>
      <p className="mb-8 mt-2 text-sm text-gray-400 sm:mb-10 sm:mt-4 sm:text-base">
        By Dusti Johnson on {formattedDate}
      </p>
      <Markdown remarkPlugins={[remarkGfm]} className="prose md:prose-lg lg:prose-xl font-geist-sans">
        {post.content}
      </Markdown>
    </div>
  );
}
