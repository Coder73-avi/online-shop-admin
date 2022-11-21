import React from "react";
import moment from "moment";
import Link from "next/link";
import { formatingNumber } from "controller/otherFunctions";

const RightContain = ({ orderHistory }) => {
  return (
    <>
      <div className="bg-white px-6 pt-6 rounded-lg">
        <h1 className="font-bold text-xl text-gray-900">Sales history</h1>
      </div>
      <article className="flex flex-col gap-2 bg-white py-4 px-6">
        {orderHistory?.map((val, indx) => (
          <Link href={`/orders/${val?.collection__id}`} key={indx}>
            <a className="flex flex-row justify-between items-center border-b pb-4 ">
              <div className="">
                <h1 className="font-bold text-sm text-gray-600">
                  {val?.fullname}
                </h1>
                <h4
                  className="capitalize font-bold text-gray-400"
                  style={{ fontSize: "10px" }}
                >
                  {val?.location}
                </h4>
              </div>
              <div className="">
                <h1 className="font-bold text-sm text-orange-400">
                  Rs. {formatingNumber(val?.price)}
                </h1>
                <h4
                  className="text-xs font-bold text-gray-400"
                  style={{ fontSize: "10px" }}
                >
                  {moment.utc(new Date(val?.date)).fromNow()}
                </h4>
              </div>
            </a>
          </Link>
        ))}
      </article>
    </>
  );
};

export default RightContain;
