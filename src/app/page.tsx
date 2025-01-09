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
  const { loading, error, data } = await client.query({
    query: GET_ALL_POSTS,
    fetchPolicy: "no-cache",
  });

  return (
    <main>
      <h1 className="py-7 text-4xl font-bold tracking-tighter sm:text-6xl">
        Welcome to Dusti's blog!
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt,
        urna non hendrerit malesuada, diam diam euismod risus, ac consectetur
        tortor nunc ac magna. Pellentesque non risus ut eros condimentum
        fringilla ac eget orci. In euismod nunc non lectus cursus, ac molestie
        sem fermentum. Sed imperdiet augue quis libero bibendum, a scelerisque
        libero ultricies. Donec suscipit magna nibh, sed mattis diam efficitur
        sit amet. Curabitur consectetur risus et metus aliquam cursus. Proin
        turpis urna, volutpat eget sodales id, dignissim sit amet quam. Nulla
        gravida massa sed augue ornare, sit amet maximus leo dignissim.
        Vestibulum fermentum, nunc non molestie pharetra, nibh erat eleifend
        lectus, eu tincidunt turpis odio a nisl. Duis tempus faucibus bibendum.
        Proin sit amet dui magna. Donec varius vitae sapien non laoreet.
      </p>
      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">All posts</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.blogPosts.map((post: Post, index: number) => {
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
