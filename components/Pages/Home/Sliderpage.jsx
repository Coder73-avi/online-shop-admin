import DefaultImage from "components/DefaultImage";
import React, { useState } from "react";
import { BsImages } from "react-icons/bs";

const Sliderpage = () => {
  const [imageList, setImageList] = useState({});
  const fileHandle = (e) => {
    setImageList(e.target.files);
  };

  console.log(imageList);
  return (
    <div className="slider-page mb-4">
      <h1 className="text-xl font-bold mb-5 text-gray-700">Slider Images</h1>
      <div className="border  p-4 grid md:grid-cols-3 lg:grid-cols-4 gap-7">
        <form action="" encType="multipary/form-data">
          <label
            htmlFor="slider-images"
            className="h-[300px] w-full flex flex-col gap-3 justify-center items-center border-2 border-dashed text-gray-600 text-sm cursor-pointer"
          >
            {" "}
            <BsImages className="text-3xl" />
            Choose images
          </label>
          <input
            type="file"
            name="slider-images"
            id="slider-images"
            onChange={fileHandle}
            multiple
            className="hidden"
          />
        </form>

        {Array(Object.keys(imageList).length)
          .fill()
          ?.map((val, indx) => (
            <div
              key={indx}
              className="h-[300px] border-2 border-dashed relative"
            >
              <DefaultImage />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sliderpage;
