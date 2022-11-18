import Brands from "components/Brands";
import Sidebar from "components/Sidebar";
import Head from "next/head";

export default function brands() {
  return (
    <>
      <Head>
        <title>Brands</title>
      </Head>
      <main className="">
        <Sidebar />
        <section className="side-contains ">
          <Brands />
        </section>
      </main>
    </>
  );
}
