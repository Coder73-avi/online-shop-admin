import React from "react";
import Label from "../Label";

const Inputbox = ({
  title,
  name,
  type,
  classNameDiv,
  className,
  classNameInput,
  classNameLabel,
  placeholder,
  value,
  onChange,
  onFocus,
  onMouseOver,
  required,
}) => {
  return (
    <div className={classNameDiv || "mb-6"}>
      <Label title={title} classNameLabel={classNameLabel} />
      <input
        type={type || "text"}
        id={title?.toLowerCase()}
        name={name}
        value={value}
        className={
          classNameInput ||
          className +
            " bg-gray-50 outline-none border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-gray-500 focus:border-gray-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400 dark:focus:border-gray-400"
        }
        placeholder={placeholder || title || "Type"}
        onChange={onChange}
        onFocus={onFocus}
        onMouseOver={onMouseOver}
        required={required || false}
      />
    </div>
  );
};

export default Inputbox;
