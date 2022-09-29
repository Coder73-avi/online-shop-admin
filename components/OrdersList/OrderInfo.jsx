import React, { useEffect, useRef, useState } from "react";
import css from "./css/orderinfo.module.css";
import Image from "next/image";
import { useReactToPrint } from "react-to-print";

import { AiOutlinePrinter, AiFillCaretDown } from "react-icons/ai";
import { BsCalendar, BsFillCreditCard2BackFill } from "react-icons/bs";
import { BiSave } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

import demoImage from "images/demopictures/newbed.jpg";

const OptionList = [
  { name: "Processing", icon: "" },
  { name: "Shipping", icon: "" },
  { name: "Complated", icon: "" },
  { name: "Cancelled", icon: "" },
];

const OrderInfo = () => {
  const dropDownRef = useRef();
  const printAreaRef = useRef();
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [dropDownName, setDropDownName] = useState("Change Status");

  const printBtn = useReactToPrint({ content: () => printAreaRef.current });

  useEffect(() => {
    const handle = (e) => {
      if (!dropDownRef.current.contains(e.target)) setDropDownStatus(false);
    };
    addEventListener("mousedown", handle);
    return () => removeEventListener("mousedown", handle);
  }, []);

  return (
    <>
      <h1 className="py-8 font-bold text-xl">Order details</h1>

      <div className="bg-white rounded-xl p-4 " ref={printAreaRef}>
        <div className="flex flex-row justify-between border-b pb-4">
          <div>
            <div className="flex flex-row justify-start items-center gap-3 text-sm font-bold">
              <BsCalendar className="text-base" /> Wed, Aug 13, 2022, 4:30PM
            </div>
            <p className="text-gray-400 text-xs px-7 py-1 font-bold">
              #ID A12DAE21
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-3">
            <div
              className={css.optionBtn}
              ref={dropDownRef}
              onClick={() => setDropDownStatus(!dropDownStatus)}
            >
              <button className="flex flex-row justify-bewteen items-center gap-4">
                {dropDownName} <AiFillCaretDown className={css.downArrow} />
              </button>
              {dropDownStatus && (
                <div className={css.dropDown}>
                  {OptionList.map((val, indx) => (
                    <>
                      <button
                        key={indx}
                        className={css.dropDown__btn}
                        onClick={() => {
                          setDropDownName(val.name);
                          setDropDownStatus(false);
                        }}
                      >
                        {val.name}
                      </button>
                    </>
                  ))}
                </div>
              )}
            </div>
            <button className={css.btn}>
              <BiSave className="text-sm" /> Save
            </button>
            <button className={css.printBtn} onClick={printBtn}>
              <AiOutlinePrinter className="text-sm" /> Print
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 my-3">
          <div className="flex flex-row gap-3">
            <div className="">
              <div className="bg-blue-200 text-blue-800 text-xs p-3 rounded-full ">
                <FaUserAlt />
              </div>
            </div>
            <div className="text-gray-800">
              <h2 className="font-bold text-sm py-1 text-gray-900">
                Customers
              </h2>
              <div className="text-sm mb-0.5">Abhishek Magar</div>
              <div className="text-sm mb-0.5">aavishek60@gmail.com</div>
              <div className="text-sm mb-0.5">+977 9814002250</div>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div className="">
              <div className="bg-blue-200 text-blue-800 text-base p-3 rounded-full ">
                <MdLocalShipping />
              </div>
            </div>
            <div className="text-gray-800">
              <h2 className="font-bold text-sm py-1 text-gray-900">
                Customers
              </h2>
              <div className="text-sm mb-0.5 flex flex-row gap-2">
                Shipping: <span className="text-gray-900">Forgo express</span>
              </div>
              <div className="text-sm mb-0.5 flex flex-row gap-2">
                Payment Method: <span className="text-gray-900">Card Card</span>
              </div>
              <div className="text-sm mb-0.5 flex flex-row gap-2">
                Status:
                <span className="text-red-700">Status</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div className="">
              <div className="bg-blue-200 text-blue-800 text-base p-3 rounded-full ">
                <IoLocation />
              </div>
            </div>
            <div className="text-gray-800">
              <h2 className="font-bold text-sm py-1 text-gray-900">
                Deliver to
              </h2>
              <div className="text-sm mb-0.5 flex flex-row gap-2">
                City:{" "}
                <span className="text-gray-900">Lalitpur, mangal bazzar</span>
              </div>
              <div className="text-sm mb-0.5 flex flex-row gap-2">
                Street: <span className="text-gray-900">Ganesh Mander</span>
              </div>
              <div className="text-sm mb-0.5 flex flex-row gap-2">
                Address:
                <span className="text-gray-900">
                  Block A, House 123, Floor 2
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-14 gap-4">
          <div className="col-span-2">
            <table className="w-full text-xs text-gray-800 border">
              <thead>
                <tr className="border-b border-t font-bold text-gray-600">
                  <td scope="col" className="px-2 py-2">
                    Product
                  </td>
                  <td scope="col" className="px-2 py-2">
                    Quantity
                  </td>
                  <td scope="col" className="px-2 py-2">
                    Unit Price
                  </td>
                  <td scope="col" className="px-2 py-2">
                    Total
                  </td>
                </tr>
              </thead>

              <tbody>
                {Array(2)
                  .fill()
                  .map((val, indx) => (
                    <tr key={indx} className={"border-b text-sm"}>
                      <td className="flex flex-row gap-3 w-full items-center px-2">
                        <div className="h-14 w-16 relative ">
                          <Image
                            src={demoImage}
                            alt="demo-images"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <div className="font-bold text-blue-500">
                          New Doubble Bed
                        </div>
                      </td>
                      <td className="px-2">1</td>
                      <td className="px-2 font-bold">Rs. 15000</td>
                      <td className="px-2 font-bold">Rs. 15000</td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <tr className="font-bold text-gray-400 text-base">
                  <td colSpan={2} className="px-4 pt-4"></td>
                  <td colSpan={1} className="  px-4 pt-2">
                    Sub Total :
                  </td>
                  <td
                    colSapn={1}
                    className="text-base px-2 font-bold text-gray-800"
                  >
                    Rs. 30000
                  </td>
                </tr>
                <tr className="text-base font-bold text-gray-400">
                  <td colSpan={2} className="px-4 pt-4"></td>
                  <td colSpan={1} className=" px-4 pt-2">
                    Shipping Cost :
                  </td>
                  <td
                    colSapn={1}
                    className="text-base px-2 font-bold text-gray-800"
                  >
                    Rs. 1000
                  </td>
                </tr>
                <tr className="text-base font-bold text-gray-400">
                  <td colSpan={2} className="px-4 pt-4"></td>
                  <td colSpan={1} className="  px-4 pt-2">
                    Grand Total :
                  </td>
                  <td
                    colSapn={1}
                    className="text-base px-2 font-bold text-gray-800"
                  >
                    Rs. 31000
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} className="text-right px-8 py-4">
                    <button className="text-xs font-bold text-green-600 bg-green-200 rounded-lg px-2 py-1">
                      Payment made
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="col-span-1">
            <div className="border mb-4 p-3 rounded-lg">
              <h1 className="text-sm font-bold text-gray-800">Payment Info</h1>
              <div className="flex flex-row gap-2 items-center text-sm py-1 text-gray-700">
                <BsFillCreditCard2BackFill className="text-blue-700" /> Master
                Card **** *****122345
              </div>
              <div className="text-sm pb-1 text-gray-700 flex flex-row gap-2 items-center">
                Business name:
                <span className="text-gray-900">Master Card, Inc</span>
              </div>
              <div className="text-sm pb-1 text-gray-700 flex flex-row gap-2 items-center">
                Phone: <span className="text-gray-900">+977 9861856773</span>
              </div>
            </div>
            <div className="border mb-4 h-32 p-3 rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderInfo;
