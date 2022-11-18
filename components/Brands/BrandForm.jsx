import Inputbox from "FormElement/Inputbox";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from "controller/axios";

const BrandForm = ({ setAddBrands, setLoading }) => {
  const divRef = useRef();
  const [brandName, setBrandName] = useState("");
  const [imageFile, setImageFile] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      if (!divRef.current?.contains(e.target)) return setAddBrands(false);
    };
    addEventListener("mousedown", handler);
    return () => removeEventListener("mousedown", handler);
  }, [setAddBrands]);

  const addBrands = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", brandName);
      formData.append("brand-logo", imageFile);
      const send = await axios.post("/addbrands", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (send.status == 201) {
        setBrandName("");
        setImageFile([]);
        alert("Add Successfully !!!");
        return setLoading(false);
      }
    } catch (error) {
      return setLoading(false);
    }
  };

  return (
    <div className="fixed w-full h-full bg-black z-50 bg-opacity-50 left-0 top-0 ">
      <div
        className="w-fit px-14 py-8 bg-white mx-auto my-20 rounded-md relative"
        ref={divRef}
      >
        <div
          className="absolute top-3 right-4 text-3xl cursor-pointer hover:text-blue-700"
          onClick={() => setAddBrands(false)}
        >
          <IoClose />
        </div>
        {/* <div className="text-xs text-green-600 font-bold">Add Complete !!!</div> */}
        <form
          className="flex flex-col justify-center items-start h-full "
          encType="multipart/form-data"
          onSubmit={addBrands}
        >
          <h2 className="py-2 font-bold text-xl border-b mb-3 w-full">
            Brand Information
          </h2>
          <Inputbox
            title={"Brand Name"}
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
          <div className="flex flex-col justify-center items-start w-full ">
            <label
              htmlFor="brand-logo"
              className="text-sm font-bold text-gray-600"
            >
              Brand Logo
            </label>
            <label
              htmlFor="brand-logo"
              className=" border-2 border-dashed border-gray-400 w-full h-[150px] my-2 flex flex-row justify-center items-center text-sm text-gray-600 cursor-pointer relative"
            >
              {imageFile?.length !== 0 ? (
                <Image
                  src={
                    typeof imageFile == "object"
                      ? URL?.createObjectURL(imageFile)
                      : imageFile
                  }
                  alt="category-image"
                  layout={"fill"}
                  objectFit={"cover"}
                  objectPosition={"center"}
                />
              ) : (
                "Select Brand Logo"
              )}
            </label>
            <input
              type="file"
              name="brand_logo"
              id="brand-logo"
              className="hidden"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </div>
          <span className="text-xs text-red-600 italic">
            Note: Must use png images
          </span>
          <button className="w-24 mt-4 py-2 bg-blue-600 cursor-pointer text-white flex flex-row justify-center items-center text-sm rounded-md uppercase font-bold">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrandForm;
