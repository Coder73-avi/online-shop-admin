import React, { useEffect, useRef, useState } from "react";
import css from "./css/productTable.module.css";

import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BsCheck, BsTrash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import DefaultImage from "components/DefaultImage";

import demoImage from "images/demopictures/smartwatch.jpg";
import { useRouter } from "next/router";

const TableHeading = [
  "ID",
  "title",
  "category",
  "code",
  "featured",
  "status",
  "action",
];

const ProductTable = () => {
  const [searchKey, setSearchKey] = useState("");
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [optionName, setOptionName] = useState("Filter");
  const dropDownRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const handler = (e) => {
      if (!dropDownRef.current.contains(e.target)) setDropDownStatus(false);
    };
    addEventListener("mousedown", handler);
    return () => removeEventListener("mousedown", handler);
  }, [dropDownStatus]);
  return (
    <>
      <div className="flex flex-row">
        <div
          className={`${css.filtering} `}
          onClick={() => {
            setDropDownStatus(!dropDownStatus);
          }}
          ref={dropDownRef}
        >
          {optionName}
          <span>
            <IoIosArrowDown />
          </span>
          <div
            className={`${css.dropDown} ${
              dropDownStatus && css.show__dropDown
            }`}
          >
            <ProductFilterDropDown setOptionName={setOptionName} />
          </div>
        </div>
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
        <div className={css.addNewProduct}>
          <button>Add New Product</button>
        </div>
      </div>
      <span
        className="font-bold text-gray-300 px-2"
        style={{ fontSize: "10px" }}
      >
        * Filter by {optionName}
      </span>

      <div className="my-5 overflow-auto">
        <table className="w-full text-gray-500 text-xs">
          <thead>
            <tr className="bg-orange-200 rounded-lg">
              {TableHeading.map((val, indx) => (
                <th
                  key={indx}
                  scope="col"
                  className="uppercase border-b border-t py-4 px-2 text-orange-500"
                >
                  {val}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array(5)
              .fill()
              .map((val, indx) => (
                <tr
                  key={indx}
                  className="text-center cursor-pointer hover:bg-orange-200"
                  onClick={() => router.push("/products/1234")}
                >
                  <td className="py-2">{indx + 1}</td>
                  <td className="py-2">
                    <div className="flex flex-row justify-center items-center gap-3">
                      <div className="relative h-14">
                        <DefaultImage src={demoImage} alt="product-images" />
                      </div>
                      <div className="font-bold">Apple Watch III</div>
                    </div>
                  </td>
                  <td className="py-2">Apple Watch</td>
                  <td className="py-2">WAFA 360</td>
                  <td className="py-2">
                    <div className="flex flex-row justify-center text-lg text-green-600">
                      <BsCheck />
                      <GrFormClose />
                    </div>
                  </td>
                  <td className="py-2">Published</td>
                  <td className="py-2">
                    <div className="flex flex-row gap-2 text-gray-700 text-sm justify-center">
                      <div className="hover:text-red-500">
                        <AiOutlineEye />
                      </div>

                      <div className="hover:text-green-600">
                        <FiEdit />
                      </div>
                      <div className="hover:text-red-800">
                        <BsTrash />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;

export const ProductFilterDropDown = ({ setOptionName }) => {
  return (
    <>
      {Array(5)
        .fill()
        .map((val, indx) => (
          <div
            className={css.listStyle}
            key={indx}
            onClick={() => setOptionName(`Product ${indx}`)}
          >
            Product {indx}
          </div>
        ))}
    </>
  );
};
