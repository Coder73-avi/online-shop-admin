import React from "react";
import { Line } from "@ant-design/plots";

const LineChartBox = ({ ordersData }) => {
  const config = {
    data: ordersData,
    padding: "auto",
    xField: "date",
    yField: "price",
    color: "orange",
    legend: {
      layout: "horizontal",
      position: "top",
    },

    smooth: true,
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-xl font-bold text-center py-6">Orders Chart</h1>
        <div>
          <Line {...config} />
        </div>
      </div>
    </>
  );
};

export default LineChartBox;
