import Reviews from "components/Reviews";
import Sidebar from "components/Sidebar";
import Head from "next/head";

export default function reviews() {
  return (
    <>
      <Head>
        <title>Reviews</title>
      </Head>
      <main className="">
        <Sidebar />
        <section className="side-contains ">
          <Reviews />
        </section>
      </main>
    </>
  );
}
