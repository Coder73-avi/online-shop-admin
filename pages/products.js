import ProductInfo from "components/ProductInfo";
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
        <section className="side-contians ">
          <ProductInfo />
        </section>
      </main>
    </>
  );
}
