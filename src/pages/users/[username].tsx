import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const User: FC = () => {
  const {
    query: { username },
  } = useRouter();

  return (
    <div>
      <Head>
        <title>Hello {username}</title>
      </Head>

      <h1>Hello {username}</h1>
    </div>
  );
};

export default User;
