import React, { useState } from "react";
import css from "./css/style.module.css";

import { HiOutlineSwitchVertical, HiChevronDown } from "react-icons/hi";

const FilterHeading = ({
  setText,
  text = "",
  status,
  setStatus,
  numberOfItems,
  setNumberOfItems,
}) => {
  const [selectedNumberOfItems, setSelectedNumberOfItems] = useState("Show 20");

  return (
    <div className="flex flex-row justify-between items-center border-b pb-6">
      <div className={css.searchField}>
        <input
          type="search"
          name=""
          value={text}
          onChange={(e) => setText(e.target.value)}
          id=""
          placeholder="Search product by title"
        />
      </div>
      <div className={css.btnGroup}>
        <button className={css.singleBtn}>
          {status} <HiChevronDown />
        
          <ul className={css.status__dropDown}>
            <li onClick={() => setStatus("all")}>All</li>
            <li onClick={() => setStatus("published")}>Published</li>
            <li onClick={() => setStatus("unpublished")}>Unpublished</li>
            <li onClick={() => setStatus("draft")}>Draft</li>
          </ul>
        </button>
        <button className={css.singleBtn}>
          Show {numberOfItems} <HiChevronDown />
          <ul className={css.status__dropDown}>
            <li onClick={() => setNumberOfItems(50)}>Show 50</li>
            <li onClick={() => setNumberOfItems(100)}>Show 100</li>
            <li onClick={() => setNumberOfItems(150)}>Show 150</li>
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
