import React from "react";
import css from "./css/style.module.css";

import { HiOutlineSwitchVertical, HiChevronDown } from "react-icons/hi";

const FilterHeading = ({addnew}) => {
  return (
    <div className="flex flex-row justify-between items-center border-b pb-6">
      <div className={css.searchField}>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search product by title"
        />
      </div>
      <div className={css.btnGroup}>
        <button className={css.singleBtn}>
          Status <HiChevronDown />
          <ul className={css.status__dropDown}>
            <li>Pendding</li>
            <li>Active</li>
            <li>Draft</li>
          </ul>
        </button>
        <button className={css.singleBtn}>
          Show 20 <HiChevronDown />
          <ul className={css.status__dropDown}>
            <li>Show 50</li>
            <li>Show 100</li>
            <li>Show 150</li>
          </ul>
        </button>
        <button
          className={`${css.singleBtn} focus:bg-gray-400 focus:text-white `}
        >
          Date <HiOutlineSwitchVertical />
        </button>
      </div>
    </div>
  );
};

export default FilterHeading;
