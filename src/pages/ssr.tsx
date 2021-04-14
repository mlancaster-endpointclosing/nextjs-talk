import { FC } from "react";
import Head from "next/head";

interface Props {
  post: {
    title: string;
    body: string;
  };
}

const SSR: FC<Props> = ({ post }) => {
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

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}

export default SSR;
