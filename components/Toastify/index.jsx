import React from "react";
import css from "./style.module.css";

import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineIssuesClose } from "react-icons/ai";

const Toastify = ({ type, text }) => {
  return (
    <>
      <div
        className={`${css.toastDiv} ${
          type == "error" ? css.error : css.success
        }`}
      >
        <div className={css.icon}>
          {type == "error" ? <AiOutlineIssuesClose /> : <BsCheck2Circle />}
        </div>
        <div className={css.text}>{text || "Save"}</div>
      </div>
    </>
  );
};

export default Toastify;
