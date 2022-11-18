import Head from "next/head";
import axios from "controller/axios";

import Sidebar from "components/Sidebar";
import NewProducts from "components/ProductInfo/NewProducts";

export default function productid() {
  return (
    <>
      <Head>
        <title>Product Details</title>
      </Head>
      <main className="">
        <Sidebar />
        <section className="side-contains px-8 py-6">
          <NewProducts />
        </section>
      </main>
    </>
  );
}
