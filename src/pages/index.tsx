import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings">
            <a>Settings</a>
          </Link>
        </li>
        <li>
          <Link href="/users/jane">
            <a>User Jane</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
