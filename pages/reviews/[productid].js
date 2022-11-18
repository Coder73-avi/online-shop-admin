import axios from "controller/axios";
import Sidebar from "components/Sidebar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import ReviewsTable from "components/Reviews/ReviewsTable";
import { FullScreenLoader } from "components/Loading";
import DefaultImage from "components/DefaultImage";
import { formatingNumber } from "controller/otherFunctions";
import Link from "next/link";

export default function Productid() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState({});

  const getReviews = useCallback(async () => {
    try {
      const { productid } = router.query;
      const getData = await axios.get("/getreviewsforproduct/" + productid);
      const getProduct = await axios.get("/getproduct/" + productid);
      if (getData.status == 200 && getProduct.status == 200) {
        setProduct(getProduct.data[0]);
        setReviews(getData.data);
        return setLoading(false);
      }
    } catch (error) {
      console.error(error);
      return setLoading(false);
    }
  }, [router.query]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <>
      <Head>
        <title>Product Reviews</title>
      </Head>
      <main>
        <Sidebar />
        <section className="side-contains ">
          {loading ? <FullScreenLoader /> : null}

          <div className="px-6 my-3">
            <div className="bg-white px-6 py-6 rounded-lg shadow-sm">
              <div className="flex flex-row gap-4 justify-between">
                <h1 className="text-xl font-bold mb-4">Products Reviews</h1>
                <Link href="/products">
                  <a className="px-4 py-1 flex flex-row justify-center items-center text-white bg-blue-500 text-sm font-bold rounded-md hover:opacity-50">
                    Back
                  </a>
                </Link>
              </div>
              {/* product information */}
              <div className="flex flex-row gap-8 my-3">
                <div className="relative w-32 rounded-md overflow-hidden">
                  <DefaultImage
                    src={product?.imageSrc}
                    alt={product?.originalname}
                  />
                </div>
                <div className="font-bold">
                  <div className={`font-bold text-xl`}>{product?.title}</div>
                  <div className="text-orange-600">
                    Rs {formatingNumber(product?.price)}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="py-3 text-sm text-gray-600 italic">
                  Total{" "}
                  <span className="text-blue-600 font-bold text-lg">
                    {reviews?.length}{" "}
                  </span>{" "}
                  Reviews in this product{" "}
                </div>

                <ReviewsTable
                  reviews={reviews}
                  setReviews={setReviews}
                  setLoading={setLoading}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
