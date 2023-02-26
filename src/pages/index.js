import Head from "next/head";

import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import axios from "axios";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout data={data} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const { data } = await axios({
    method: "get",
    url: "http://localhost:3000/api/test",
  });
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
