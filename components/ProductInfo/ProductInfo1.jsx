import React from "react";
import css from "./css/productinfo1.module.css";
import Image from "next/image";

import DefaultImage from "components/DefaultImage";
import Heading from "components/Heading";
import FilterHeading from "components/Heading/FilterHeading";

import demoImage from "images/demopictures/newbed.jpg";
import { BsThreeDots } from "react-icons/bs";
import { useRouter } from "next/router";

const ProductInfo1 = () => {
  const router = useRouter();
  return (
    <>
      <Heading title="Products List" addnew="/products/new" />

      <div className="px-6">
        <div className="bg-white px-6 py-6 rounded-lg shadow-sm">
          <FilterHeading />

          <div className=" mt-8">
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
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {Array(5)
                  .fill()
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
                              src={demoImage}
                              alt="product-image"
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                        </div>
                        <div className="font-bold text-gray-900 pt-2">
                          Gameing Headset New Model
                        </div>
                      </td>
                      <td className="px-2 py-3">Rs. 3000</td>
                      <td className="px-2 py-3">
                        <div className={css.status}>Active</div>
                      </td>
                      <td className="px-2 py-3">1 week ago</td>
                      <td className="px-4 py-3">
                        <div className={css.actionDiv}>
                          <button className={css.actionBtn}>
                            <BsThreeDots />
                          </button>
                          <ul className={css.dropDown__actionListDiv}>
                            <li
                              onClick={() =>
                                router.push(
                                  `/products/${Math.random()}?q=overview`
                                )
                              }
                              className={css.dropDown__actionList}
                            >
                              View
                            </li>
                            <li
                              onClick={() =>
                                router.push(
                                  `/products/${Math.random()}?q=update`
                                )
                              }
                              className={css.dropDown__actionList}
                            >
                              Edit
                            </li>
                            <li className={css.dropDown__actionList}>Delete</li>
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
              <button>Previous</button>
              <button>1</button>
              <button className={css.active}>2</button>
              <button>3</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo1;
