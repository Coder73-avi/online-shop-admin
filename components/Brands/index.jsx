import React from "react";
import css from "./css/style.module.css";

import DefaultImage from "components/DefaultImage";
import FilterHeading from "components/Heading/FilterHeading";
import Heading from "components/Heading";

const Brands = () => {
  return (
    <>
      <Heading title="Brand" />
      <div className="px-6">
        <div className="bg-white px-6 py-6 rounded-lg shadow-sm">
          <FilterHeading />

          <article className="grid md:grid-cols-4 gap-8 mt-4">
            {Array(10)
              .fill()
              .map((val, indx) => (
                <div
                  className="flex flex-col justify-center items-center gap-2 border py-6 px-10"
                  key={indx}
                >
                  <div className="h-20">
                    <DefaultImage src="/microsoft-logo.svg" alt="svg-image" />
                  </div>
                  <div className="text-sm text-gray-700 font-bold">
                    Microsoft
                  </div>
                  <div className="text-xs text-gray-400 font-bold">
                    (289 items)
                  </div>
                </div>
              ))}
          </article>
        </div>
      </div>
    </>
  );
};

export default Brands;
