import { FC, useEffect, useState } from "react";
import Head from "next/head";

interface State {
  title: string;
  body: string;
}

const CSR: FC = () => {
  const [post, setPost] = useState<State>(null);

  const getPost = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const post = await response.json();

    setPost(post);
  };

  useEffect(() => {
    getPost();
  }, []);

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

export default CSR;
