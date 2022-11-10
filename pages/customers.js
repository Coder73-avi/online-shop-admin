import axios from "controller/axios";
import CustomersList from "components/Customer/CustomersList";
import Sidebar from "components/Sidebar";
import Head from "next/head";

export default function categorys({ customersList }) {
  return (
    <>
      <Head>
        <title>Customers List</title>
      </Head>
      <main className="">
        <Sidebar />
        <section className="side-contians ">
          <CustomersList customersList={customersList} />
        </section>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const getAll = await axios.get("/getusers");
  return { props: { customersList: getAll.data } };
};
