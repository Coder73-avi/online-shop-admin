import AnalayticOverview from "components/AnalyticOverview";
import Sidebar from "components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name="description" content="Online Shop Admin Panel" />
      </Head>
      <main className="">
        <Sidebar />
        <section className="side-contians">
          <AnalayticOverview />
        </section>
      </main>
    </>
  );
}
