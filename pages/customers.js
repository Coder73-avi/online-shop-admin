import CustomersList from "components/Customer/CustomersList";
import Sidebar from "components/Sidebar";
import Head from "next/head";

export default function categorys() {
  return (
    <>
      <Head>
        <title>Customers List</title>
      </Head>
      <main className="">
        <Sidebar />
        <section className="side-contians ">
          <CustomersList />
        </section>
      </main>
    </>
  );
}
