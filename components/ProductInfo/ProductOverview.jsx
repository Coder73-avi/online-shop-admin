import DefaultImage from "components/DefaultImage";
import React from "react";

import demoImage from "images/demopictures/newbed.jpg";

const ProductOverview = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-white items-center p-4">
      <div className="">
        <div>
          <DefaultImage
            src={demoImage}
            alt="demo-image"
            className={"overflow-hidden rounded-lg"}
          />
        </div>
        {/* other images */}
        <div className="grid md:grid-cols-4 my-2 gap-3 ">
          {Array(5)
            .fill()
            .map((val, indx) => (
                <DefaultImage
                  key={indx}
                  src={demoImage}
                  alt="demo-image"
                  className={"overflow-hidden rounded-lg cursor-pointer"}
                />
            ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductOverview;
