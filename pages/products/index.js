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
        <section className="side-contians ">
          <ProductInfo1 />
          {/* <ProductInfo /> */}
        </section>
      </main>
    </>
  );
}

// export const getServerSideProps = async () => {
//   try {
//     const res = await axios.get("/getproducts/5");
//     const data = res.data.getData;
//     // console.log(data);
//     return {
//       props: { productList: data, pagination: res.data?.paginationNum },
//     };
//   } catch (error) {
//     console.log(error);
//     return { props: { productList: [], pagination: 1 } };
//   }
// };
