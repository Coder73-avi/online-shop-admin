import React from "react";
import css from "./css/style.module.css";

import { BsGraphUp, BsGraphDown } from "react-icons/bs";
import LineChartBox from "components/Charts/LineChartBox";

const LeftContain = ({ chartData, ordersData }) => {
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
              {/* <div
                className={`${css.report__small__icon} ${
                  upStatus ? "green" : "red"
                }`}
              >
                <span>{upStatus ? <BsGraphUp /> : <BsGraphDown />}</span>
                {change}%
              </div>
              <div>from Last week</div> */}
            </div>
          </div>
        ))}
      </div>

      {/* linecharts for sales status */}
      <LineChartBox ordersData={ordersData} />
    </>
  );
};

export default LeftContain;
