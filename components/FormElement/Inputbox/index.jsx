import React from "react";
import Label from "../Label";

const Inputbox = ({
  title,
  type,
  classNameDiv,
  classNameInput,
  classNameLabel,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <div className={classNameDiv || "mb-6"}>
      <Label title={title} classNameLabel={classNameLabel} />
      <input
        type={type || "text"}
        id={title?.toLowerCase()}
        value={value}
        className={
          classNameInput ||
          "bg-gray-50 outline-none border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
        }
        placeholder={placeholder || "Type"}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Inputbox;
