import React from "react";
import css from "./style.module.css";

const Loading = () => {
  return <div>Loading . . .</div>;
};

export default Loading;

export const FullScreenLoader = () => {
  return (
    <div className={css.fullscreen__div}>
      <div className={css.fullscreen__spinner}></div>
    </div>
  );
};
