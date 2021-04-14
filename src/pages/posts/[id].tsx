import { FC } from "react";
import Head from "next/head";

interface Props {
  post: {
    title: string;
    body: string;
  };
}

const Post: FC<Props> = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>

      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();

  return { props: { post } };
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await response.json();
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Post;
