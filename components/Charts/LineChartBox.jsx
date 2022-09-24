import React from "react";
import { Line } from "@ant-design/plots";
import { salesData, ordersData, chartData } from "./chartData.js";

const LineChartBox = () => {
  const newData = salesData.concat(ordersData);
  const config = {
    data: newData,
    padding: "auto",
    xField: "date",
    yField: "value",
    seriesField: "category",

    xAxis: {
      // type: "timeCat",
      tickCount: 10,
    },

    color: ["orange", "#2ca02c", ""],
    legend: {
      layout: "horizontal",
      position: "top",
    },

    smooth: true,
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-xl font-bold text-center py-6">Sales Chart</h1>
        <div>
          <Line {...config} />
        </div>
      </div>
    </>
  );
};

export default LineChartBox;
