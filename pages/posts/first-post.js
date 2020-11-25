import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, ut odit,
        modi nam quae accusamus enim nesciunt cum at facilis provident eos
        aliquid fugiat mollitia sapiente non? Placeat, nesciunt eligendi!
      </p>
    </Layout>
  );
}
