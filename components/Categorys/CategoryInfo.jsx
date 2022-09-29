import React from "react";
import css from "./css/style.module.css";

import { BsThreeDots } from "react-icons/bs";

const CategoryInfo = () => {
  return (
    <div>
      <table className="text-xs text-gray-700 w-full ">
        <thead>
          <tr className="text-left border-t border-b bg-gray-200">
            <th scope="col" className="px-4 py-2 ">
              SN
            </th>
            <th scope="col" className="px-4 py-2 ">
              Title
            </th>
            <th scope="col" className="px-4 py-2 ">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {Array(3)
            .fill()
            .map((val, indx) => (
              <tr
                key={indx}
                className="text-left hover:bg-gray-100 cursor-pointer border-t border-b"
              >
                <td className="px-4 py-2 ">{indx + 1}</td>
                <td className="px-4 py-2 ">Bed</td>
                <td className="px-4 py-2 ">
                  <button className={css.actionBtn}>
                    <BsThreeDots />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryInfo;
