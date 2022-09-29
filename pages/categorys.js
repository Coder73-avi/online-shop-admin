import Categorys from "components/Categorys";
import Sidebar from "components/Sidebar";
import Head from "next/head";

export default function categorys() {
  return (
    <>
      <Head>
        <title>Categorys</title>
      </Head>
      <main className="">
        <Sidebar />
        <section className="side-contians ">
          <Categorys />
        </section>
      </main>
    </>
  );
}
