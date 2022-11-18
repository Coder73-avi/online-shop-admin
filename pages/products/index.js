import axios from "controller/axios";
import ProductInfo from "components/ProductInfo";
import ProductInfo1 from "components/ProductInfo/ProductInfo1";
import Sidebar from "components/Sidebar";
import Head from "next/head";

export default function products() {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <main className="">
        <Sidebar />
        <section className="side-contains ">
          <ProductInfo1 />
          {/* <ProductInfo /> */}
        </section>
      </main>
    </>
  );
}
