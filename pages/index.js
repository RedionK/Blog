import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm <strong>Redion</strong>, a new software developer and on this
          blog I will be documenting my learning path with articles and videos
          about technical concepts that I am currently learning.
        </p>
      </section>
    </Layout>
  );
}
