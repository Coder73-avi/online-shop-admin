import React from "react";
import css from "./css/style.module.css";

import {  AiFillEye } from "react-icons/ai";
import { BsGraphUp, BsGraphDown } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import LineChartBox from "components/Charts/LineChartBox";

const LeftContain = () => {
  return (
    <>
   
      {/* reports */}
      <div className="flex flex-row gap-4 px-6">
        {chartData.map(({ icon, title, data, upStatus, change }, indx) => (
          <div
            key={indx}
            className={
              css.card +
              " bg-white p-6 rounded-lg w-[250px] flex flex-col gap-2"
            }
          >
            <div className={css.report__icon}>{icon}</div>
            <div className={css.report__title}>{title || "(None)"}</div>
            <div className={css.report__data}> {data || "0"}</div>
            <div className={css.report__status}>
              <div
                className={`${css.report__small__icon} ${
                  upStatus ? "green" : "red"
                }`}
              >
                <span>{upStatus ? <BsGraphUp /> : <BsGraphDown />}</span>
                {change}%
              </div>
              <div>from Last week</div>
            </div>
          </div>
        ))}
      </div>

      {/* linecharts for sales status */}
      <LineChartBox />
    </>
  );
};

export const chartData = [
  {
    icon: <FaRegMoneyBillAlt />,
    title: "Revenue",
    data: "$ 8,670.19",
    upStatus: true,
    change: "5.32",
  },
  {
    icon: <AiFillEye />,
    title: "Total views",
    data: "15,567",
    upStatus: false,
    change: "5.30",
  },
  {
    icon: <RiShoppingBag3Line />,
    title: "Total order",
    data: "1,456",
    upStatus: true,
    change: "5.31",
  },
];

export default LeftContain;
