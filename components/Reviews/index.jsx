import Heading from "components/Heading";
import FilterHeading from "components/Heading/FilterHeading";
import React from "react";
import css from "./css/style.module.css";

import { BsThreeDots } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";

const Reviews = () => {
  return (
    <>
      <Heading title="Reviews" />
      <div className="px-6">
        <div className="bg-white px-6 py-6 rounded-lg shadow-sm">
          <FilterHeading />

          <div className="mt-6">
            <table className="w-full text-xs text-gray-700">
              <thead>
                <tr className="text-left border-b border-t">
                  <th className="px-3 py-4" scope="col">
                    ID
                  </th>
                  <th className="px-3 py-4" scope="col">
                    Product Name
                  </th>
                  <th className="px-3 py-4" scope="col">
                    Name
                  </th>
                  <th className="px-3 py-4" scope="col">
                    Rating
                  </th>
                  <th className="px-3 py-4" scope="col">
                    Date
                  </th>
                  <th className="px-3 py-4" scope="col">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {Array(5)
                  .fill()
                  .map((val, indx) => (
                    <tr className=" border-b" key={indx}>
                      <td className="px-3 py-4">{indx + 1}</td>
                      <td className="px-2 py-3 flex flex-row gap-3">
                        <div className="font-bold text-gray-900 pt-2">
                          Gameing Headset New Model
                        </div>
                      </td>
                      <td className="px-2 py-3">Sagar Tamang</td>
                      <td className="px-2 py-3">
                        <div className={`flex flex-row  items-center`}>
                          {Array(5)
                            .fill()
                            .map((val, indx) => (
                              <div
                                className={`${css.star} ${
                                  indx < 3 && css.colored
                                }`}
                                key={indx}
                              >
                                <AiTwotoneStar />
                              </div>
                            ))}
                        </div>
                      </td>
                      <td className="px-2 py-3">21.12.2022</td>
                      <td className="px-4 py-3">
                        <div className={css.actionDiv}>
                          <button className={css.actionBtn}>
                            <BsThreeDots />
                          </button>
                          <ul className={css.dropDown__actionListDiv}>
                            <li
                              onClick={() => router.push(`/reviews`)}
                              className={css.dropDown__actionList}
                            >
                              View
                            </li>
                            <li
                              onClick={() => router.push(`/reviews`)}
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

export default Reviews;
