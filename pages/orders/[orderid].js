import OrderInfo from "components/OrdersList/OrderInfo";
import Sidebar from "components/Sidebar";
import Head from "next/head";

export default function orderid() {
  return (
    <>
      <Head>
        <title>Order Details</title>
      </Head>
      <main className="p-3">
        <Sidebar />
        <section className="side-contians  py-4 px-2">
          <div className=" px-4">
            <OrderInfo />
          </div>
        </section>
      </main>
    </>
  );
}
