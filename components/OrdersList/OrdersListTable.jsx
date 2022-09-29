import React, { useState } from "react";
import css from "./css/orderstable.module.css";

import { ordersData } from "./ordersData";
import { RiEditBoxLine } from "react-icons/ri";
import { GrDocumentDownload } from "react-icons/gr";
import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const OrdersListTable = () => {
  const [searchKey, setSearchKey] = useState("");
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
                <th scope="col" className="py-4 px-6 text-gray-700" key={indx}>
                  {val}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ordersData.map((val, indx) => (
              <tr
                key={indx}
                className="bg-white odd:text-gray-500 even:text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-600 cursor-pointer"
              >
                <td className="py-2 px-6 text-yellow-600">{val?.id}</td>
                <td className="py-2 px-6  font-bold">{val?.customer}</td>
                <td className="py-2 px-6">{val?.order}</td>
                <td className="py-2 px-6 text-yellow-600">
                  {val?.delivery__date}
                </td>
                <td className="py-4 px-6 font-bold ">{val?.price}</td>
                <td className="py-4 px-6 ">
                  <button
                    className={css.status__btn}
                    id={val.status.toLowerCase()}
                  >
                    {val?.status}
                  </button>
                </td>
                <td className="py-4 px-6  flex flex-row justify-between items-center gap-1">
                  {val?.payment__method}{" "}
                  <span className="text-base font-bold hover:text-red-900">
                    <AiOutlineEye />
                  </span>
                  <span className="text-base font-bold hover:text-red-900">
                    <RiEditBoxLine />
                  </span>
                </td>
              </tr>
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
  "Order",
  "Delivery Date",
  "Delivery Pricing",
  "Delivery Status",
  "Payment Method",
];

export default OrdersListTable;
