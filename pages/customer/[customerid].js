import Categorys from "components/Categorys";
import Sidebar from "components/Sidebar";
import Head from "next/head";

export default function customerid() {
  return (
    <>
      <Head>
        <title>Customers List</title>
      </Head>
      <main className="">
        <Sidebar />
        <section className="side-contians ">{/* <Categorys /> */}</section>
      </main>
    </>
  );
}
