import React from "react";
import css from "./css/productinfo1.module.css";
import Image from "next/image";
import axios from "controller/axios";
import Heading from "components/Heading";
import FilterHeading from "components/Heading/FilterHeading";

import demoImage from "images/demopictures/newbed.jpg";
import { BsThreeDots } from "react-icons/bs";
import { useRouter } from "next/router";
import moment from "moment";
import { useState, useEffect, useCallback } from "react";
import { FullScreenLoader } from "components/Loading";
import Link from "next/link";

const ProductInfo1 = () => {
  const router = useRouter();
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [numberOfItems, setNumberOfItems] = useState(20);
  const [totalProduct, setTotalProduct] = useState(0);
  const [status, setStatus] = useState("status");
  const [searchText, setSearchText] = useState("");

  const getProudcts = useCallback(async () => {
    try {
      if (router.query.hasOwnProperty("page")) {
        setPageNumber(Number(router.query.page));
        if (pageNumber > pagination) {
          return router.push("/products?page=" + pagination);
        }
        if (pageNumber <= 0) {
          return router.push("/products?page=1");
        }
      }

      const req = await axios.get(
        `/getproducts/${numberOfItems}/${pageNumber}`
      );

      if (req.status == 200) {
        const { getData, paginationNum } = req.data;
        setProductList(getData);
        setPagination(paginationNum);
        return setLoading(false);
      }
    } catch (error) {
      // console.error(error);
      return setLoading(false);
    }
  }, [pageNumber, pagination, router.query, numberOfItems]);

  useEffect(() => {
    getProudcts();
  }, [getProudcts]);

  const getTotalProduct = useCallback(async () => {
    const res = await axios.get("/totalproduct");
    if (res.status == 200) {
      setTotalProduct(res.data.count);
      return setLoading(false);
    }
    try {
    } catch (error) {
      console.error(error);
      return setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTotalProduct();
  }, [getTotalProduct]);

  const deleteProduct = async (pid) => {
    try {
      setLoading(true);
      const removed = await axios.delete(`/deleteproduct/${pid}`);
      if (removed.status == 200) {
        setProductList(productList?.filter((items) => items?.pid !== pid));
        setLoading(false);
        alert("Product deleted");
        return;
      }
    } catch (error) {
      // console.error(error.response);
      return setLoading(false);
    }
  };

  return (
    <>
      {loading ? <FullScreenLoader /> : null}
      <Heading title="Products List" addnew="/products/new" />

      <div className="px-6">
        <div className="bg-white px-6 py-6 rounded-lg shadow-sm">
          <FilterHeading
            text={searchText}
            setText={setSearchText}
            numberOfItems={numberOfItems}
            setNumberOfItems={setNumberOfItems}
            setStatus={setStatus}
            status={status}
          />
          <div className="text-xs text-red-600 text-right font-bold italic py-2">
            {totalProduct} product is available
          </div>
          <div className="">
            <table className="w-full text-xs text-gray-600">
              <thead>
                <tr className="border-b border-t text-left">
                  <th
                    scope="col"
                    className="px-2 py-3 flex flex-row gap-2 items-center"
                  >
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    Name
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Last Update
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {productList
                  ?.filter((item) => {
                    if (
                      item?.title
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  ?.filter((item) => {
                    if (item?.status.toLowerCase() == status.toLowerCase()) {
                      return item;
                    }
                    if (
                      status.toLowerCase() == "all" ||
                      status.toLowerCase() == "status"
                    )
                      return item;
                  })
                  .map((val, indx) => (
                    <tr className=" border-b" key={indx}>
                      <td className="px-2 py-3 flex flex-row gap-3">
                        <div className="flex flex-row gap-3 items-center">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />

                          <div className="relative h-16 w-16 overflow-hidden rounded-md">
                            <Image
                              src={val?.imageSrc || demoImage}
                              alt="product-image"
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                        </div>
                        <div className="text-sm font-bold text-gray-900 pt-2 capitalize">
                          {val.title}
                        </div>
                      </td>
                      <td className="px-2 py-3 text-orange-400">
                        Rs. {val?.price}
                      </td>
                      <td className="px-2 py-3">
                        <div className={`capitalize text-blue-600 font-bold`}>
                          {val?.status}
                        </div>
                      </td>
                      <td className="px-2 py-3">
                        {moment.utc(new Date(val?.create__date)).fromNow()}
                      </td>
                      <td className="px-2 py-3">
                        {moment.utc(new Date(val?.update__date)).fromNow() ||
                          "not update yet"}
                      </td>
                      <td className="px-4 py-3">
                        <div className={css.actionDiv}>
                          <button className={css.actionBtn}>
                            <BsThreeDots />
                          </button>
                          <ul className={css.dropDown__actionListDiv}>
                            <li
                              onClick={() =>
                                router.push(`/products/${val?.pid}?q=update`)
                              }
                              className={css.dropDown__actionList}
                            >
                              Edit
                            </li>
                            <li
                              className={css.dropDown__actionList}
                              onClick={() => deleteProduct(val?.pid)}
                            >
                              Delete
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* pagenation */}
          <div className="flex flex-row items-center justify-end my-4">
            <div className={css.pagenationDiv}>
              <Link href={`/products?page=${pageNumber - 1}`}>
                <button disabled={pageNumber <= 1 ? true : false}>Prev</button>
              </Link>
              {/* <button className={css.active}>{pagination || 0}</button> */}
              {Array(pagination || 1)
                .fill()
                .map((val, indx) => (
                  <Link href={`/products?page=${indx + 1}`} key={indx}>
                    <button
                      className={pageNumber == indx + 1 ? css.active : ""}
                    >
                      {indx + 1}
                    </button>
                  </Link>
                ))}
              <Link href={`/products?page=${pageNumber + 1}`}>
                <button disabled={pageNumber >= pagination ? true : false}>
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo1;
