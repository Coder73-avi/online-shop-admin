import React from "react";
import css from "./css/style.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";

const Heading = ({ title, button, addnew }) => {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between items-center px-6 py-8">
      <h1 className="font-bold text-xl ">{title || "None"}</h1>
      <button className={css.addNew} onClick={() => router.push(addnew || "/")}>
        <AiOutlinePlus />
        {button || "Add new"}
      </button>
    </div>
  );
};

export default Heading;
