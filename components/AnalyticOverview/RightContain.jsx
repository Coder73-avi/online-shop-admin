import React from "react";

const RightContain = () => {
  return (
    <>
      <div className="bg-white px-6 pt-6 rounded-lg">
        <h1 className="font-bold text-xl text-gray-900">Sales history</h1>
      </div>
      <article className="flex flex-col gap-2 bg-white py-4 px-6">
        {Array(8)
          .fill()
          .map((val, indx) => (
            <div
              key={indx}
              className="flex flex-row justify-between items-center border-b pb-4 "
            >
              <div className="">
                <h1 className="font-bold text-base text-gray-900">
                  Adidas NMD...
                </h1>
                <h4 className="capitalize text-xs font-bold text-gray-500">
                  Canada
                </h4>
              </div>
              <div className="">
                <h1 className="font-bold text-base text-orange-400">$250.00</h1>
                <h4 className="text-xs font-bold text-gray-500">05 min ago</h4>
              </div>
            </div>
          ))}
      </article>
    </>
  );
};

export default RightContain;
