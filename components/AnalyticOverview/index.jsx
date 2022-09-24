import React from "react";
import LeftContain from "./LeftContain";
import RightContain from "./RightContain";
import { AiOutlineCalendar } from "react-icons/ai";

const AnalayticOverview = () => {
  return (
    <>
      <div className="py-8 px-6 bg-white">
        <h1 className="text-xl font-bold text-gray-800">Analytics Overview</h1>
      </div>

      <div className="py-8 px-6 flex flex-row items-center gap-6">
        <div className="text-sm font-semibold text-gray-700 flex flex-row justify-center items-center gap-2 px-3 py-2 bg-white rounded-md">
          <span className="text-lg font-semibold">
            <AiOutlineCalendar />
          </span>{" "}
          Today
        </div>
        <div className="text-sm text-gray-600 font-black">
          Compared to May 27, 2022
        </div>
      </div>

      <section className="grid md:grid-cols-4">
        <div className="col-span-3">
          <LeftContain />
        </div>
        <div className="col-span-1">
          <RightContain />
        </div>
      </section>
    </>
  );
};

export default AnalayticOverview;
