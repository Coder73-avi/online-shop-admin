import OrdersList from "components/OrdersList";
import Sidebar from "components/Sidebar";
import Head from "next/head";
import axios from "controller/axios";

export default function orders() {
  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>
      <main className="p-3">
        <Sidebar />
        <section className="side-contains  py-4 px-2">
          <div className="bg-white rounded-lg overflow-hidden px-6">
            <OrdersList />
          </div>
        </section>
      </main>
    </>
  );
}
