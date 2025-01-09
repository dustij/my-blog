import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { client } from "~/lib/apollo-client";
import { GET_ALL_POSTS, Post } from "~/lib/gueries";

export default async function Home() {
  const _client = await client.query({
    query: GET_ALL_POSTS,
    fetchPolicy: "no-cache", // TODO: explore caching options
  });

  let data = null;

  if (_client) {
    data = _client?.data;
  } else {
    console.warn("Apollo client is undefined.");
  }

  return (
    <main>
      <h1 className="py-7 text-4xl font-bold tracking-tighter sm:text-6xl">
        Welcome to Dusti's blog!
      </h1>
      <p>
        Hey there, and welcome to my blog! I’m Dusti Johnson, a computer
        information science undergraduate with a passion for all things
        programming. My coding journey started in 2020 when I picked up Python
        to create a budget app for myself. What began as a simple project
        quickly turned into an obsession&mdash;I became addicted to the
        fulfillment from solving problems and building something from scratch.
        From there, I dove into web development, mastering tools like Next.js
        and TypeScript. As a student, I’ve also discovered a love for Java. Its
        type-safe structure aligns perfectly with my preference for clean,
        logical programming, making it a natural fit.
      </p>
      <p>
        Along the way, I’ve realized that becoming a great software developer
        isn’t just about writing better code&mdash;it’s about continuous
        learning, refining habits, and fostering a growth mindset. This blog is
        my way of documenting the process, sharing insights, and connecting with
        others who are as excited about learning as I am. Here, you’ll find
        posts ranging from programming techniques and computer science concepts
        to life lessons and book takeaways. Thanks for stopping by&mdash;I hope
        you find value in what I share and maybe even a bit of inspiration to
        fuel your own journey!
      </p>
      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">Recent posts</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data && data.blogPosts.map((post: Post, index: number) => {
            return (
              <Card key={index} className="hover:shadow-md">
                <Link href={"posts/" + post.urlSlug}>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
