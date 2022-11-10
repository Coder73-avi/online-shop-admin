import React, { useState, useEffect, useCallback } from "react";
import css from "./css/orderstable.module.css";

import moment from "moment";
import { RiEditBoxLine } from "react-icons/ri";
import { GrDocumentDownload } from "react-icons/gr";
import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const OrdersListTable = ({ orderList }) => {
  const router = useRouter();
  const [searchKey, setSearchKey] = useState("");
  const [filterVal, setFilterVal] = useState("");

  const queryValue = useCallback(() => {
    if (router.query.hasOwnProperty("q")) return setFilterVal(router.query.q);
    return setFilterVal("");
  }, [router.query]);
  useEffect(() => {
    queryValue();
  }, [queryValue]);

  return (
    <>
      <div className="flex flex-row gap-10 items-center">
        <div className="flex-grow">
          <div className={css.search__filled}>
            <div className={css.search__icon}>
              <BiSearch />
            </div>

            <input
              type="search"
              name="search"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search for order ID, customer, order, status or somthing..."
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <button className={css.filtering}>
            <span>
              <BsFilter />
            </span>
            Filters
          </button>
          <button className={css.filtering}>
            <span>
              <GrDocumentDownload />
            </span>
            Exports
          </button>
        </div>
      </div>
      <span
        className="font-bold text-gray-400 px-2"
        style={{ fontSize: "10px" }}
      >
        * Filter by customer
      </span>

      <div className="overflow-x-auto relative  mt-4">
        <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400 border">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
            <tr>
              {theadData.map((val, indx) => (
                <th scope="col" className="py-4 px-2 text-gray-700" key={indx}>
                  {val}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderList
              ?.filter((item) => {
                const status = item.status?.toLowerCase();
                if (filterVal == "" || filterVal?.toLowerCase() == "all-orders")
                  return item;
                if (status == filterVal?.toLowerCase()) return item;
              })
              ?.map((val, indx) => (
                <Link href={`/orders/${val?.collection__id}`} key={indx}>
                  <tr className="bg-white odd:text-gray-500 even:text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-600 cursor-pointer">
                    <td className="py-2 px-2 text-yellow-600">
                      {val?.collection__id}
                    </td>
                    <td className="py-2 px-2  font-bold min-w-[200px]">
                      {val?.fullname}
                    </td>
                    <td className="py-2 px-2 capitalize">{val?.location}</td>
                    <td className="py-2 px-2 text-yellow-600 min-w-[150px]">
                      {moment.utc(new Date(val?.date)).fromNow()}
                    </td>
                    <td className="py-4 px-2 ">
                      <button
                        className={css.status__btn}
                        id={val.status.toLowerCase()}
                      >
                        {val?.status}
                      </button>
                    </td>
                    <td className="py-4 px-2 flex flex-row justify-between items-center gap-1">
                      {val?.payment__method || " Credit Card "}
                      <Link href={`/orders/${val?.collection__id}`}>
                        <a className="text-base font-bold hover:text-red-900">
                          <AiOutlineEye />
                        </a>
                      </Link>
                      <Link href={`/orders/${val?.collection__id}`}>
                        <a className="text-base font-bold hover:text-red-900">
                          <RiEditBoxLine />
                        </a>
                      </Link>
                    </td>
                  </tr>
                </Link>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const theadData = [
  "Order Id",
  "Customer",
  "Address",
  "Order Date",
  "Delivery Status",
  "Payment Method",
];

export default OrdersListTable;
