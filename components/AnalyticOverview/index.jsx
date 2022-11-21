import React, { useState, useEffect, useCallback } from "react";
import axios from "controller/axios";

import LeftContain from "./LeftContain";
import RightContain from "./RightContain";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";

import { FullScreenLoader } from "components/Loading";
import { formatingNumber } from "controller/otherFunctions";

const AnalayticOverview = () => {
  const [loading, setLoading] = useState(true);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [ordersData, setOrdersData] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const getStaticData = useCallback(async () => {
    try {
      const staticData = await axios.get("/getstaticdata");
      const ordersData = await axios.get("/getordersdata");
      const lastOrders = await axios.get("/getorderhistory/8");

      if (
        staticData.status == 200 &&
        ordersData.status == 200 &&
        lastOrders.status == 200
      ) {
        setTotalRevenue(staticData.data?.revenue);
        setTotalOrders(staticData.data?.orders);
        setOrdersData(ordersData.data);
        setOrderHistory(lastOrders.data);
        return setLoading(false);
      }
    } catch (error) {
      console.log(error);
      return setLoading(false);
    }
  }, []);

  useEffect(() => {
    getStaticData();
  }, [getStaticData]);

  const chartData = [
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Revenue",
      data: "Rs. " + formatingNumber(totalRevenue),
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
      title: "Total Orders",
      data: totalOrders,
      upStatus: true,
      change: "5.31",
    },
  ];

  return (
    <>
      {loading ? <FullScreenLoader /> : null}
      <div className="py-8 px-6 bg-white">
        <h1 className="text-xl font-bold text-gray-800">Analytics Overview</h1>
      </div>

      <div className="py-8 px-6 flex flex-row items-center gap-6">
        <div className="text-sm font-semibold text-gray-700 flex flex-row justify-center items-center gap-2 px-3 py-2  rounded-md">
          <span className="text-lg font-semibold">
            <AiOutlineCalendar />
          </span>
          Today
        </div>
        <div className="text-sm text-gray-600 font-black">
          Compared to May 27, 2022
        </div>
      </div>

      <section className="grid md:grid-cols-4 p-3">
        <div className="col-span-3">
          <LeftContain chartData={chartData} ordersData={ordersData} />
        </div>
        <div className="col-span-1">
          <RightContain orderHistory={orderHistory} />
        </div>
      </section>
    </>
  );
};

export default AnalayticOverview;
