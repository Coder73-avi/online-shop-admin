import Categorys from "components/Categorys";
import Sidebar from "components/Sidebar";
import Head from "next/head";
import axios from "controller/axios";

export default function categorys({ categoryList }) {
  return (
    <>
      <Head>
        <title>Categorys</title>
      </Head>
      <main className="">
        <Sidebar />
        <section className="side-contians ">
          <Categorys categoryList={categoryList} />
        </section>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const req = await axios.get("/categorys");
  const categoryList = req.data || [];
  return { props: { categoryList } }; 
};
