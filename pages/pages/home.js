import Sidebar from "components/Sidebar";
import Head from "next/head";
import Home from "components/Pages/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="">
        <Sidebar />
        <section className="side-contains  p-4">
          <Home />
        </section>
      </main>
    </>
  );
}
