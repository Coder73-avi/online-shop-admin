import React from "react";
import css from "./css/style.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";

const Heading = ({ title, button = false, addnew }) => {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between items-center px-6 py-5">
      <h1 className="font-bold text-xl ">{title || "None"}</h1>
      {button ? (
        <button
          className={css.addNew}
          onClick={() => router.push(addnew || "/")}
        >
          <AiOutlinePlus />
          {button || "Add new"}
        </button>
      ) : null}
    </div>
  );
};

export default Heading;
