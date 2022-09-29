import Heading from "components/Heading";
import FilterHeading from "components/Heading/FilterHeading";
import Image from "next/image";
import React from "react";
import css from "./css/customerslist.module.css";

const CustomersList = () => {
  return (
    <>
      <Heading title="CustomersList" />
      <div className="px-6">
        <div className="bg-white rounded-md shadow-sm px-4 py-6 my-3">
          <FilterHeading />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array(20)
              .fill()
              .map((val, indx) => (
                <div
                  key={indx}
                  className="border rounded-lg overflow-hidden relative flex flex-col justify-center items-center gap-1 py-2"
                >
                  <div className={css.backlay__bg}></div>
                  <div className="relative h-24 w-24 rounded-full overflow-hidden mt-4">
                    <Image
                      src="/profiledemo.jpg"
                      alt="profile-image"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <h1 className="text-sm font-bold mt-4 ">Abhishek Magar</h1>
                  <h1 className="text-xs font-mono">Customer Id: #123445</h1>
                  <h2 className="text-xs font-mono">aavishek60@gmail.com</h2>
                  <button className="border rounded px-8 py-2 text-sm font-bold my-4 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                    Profile
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersList;
