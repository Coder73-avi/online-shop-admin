import Textarea from "FormElement/Textarea";
import Inputbox from "FormElement/Inputbox";
import React, { useState, useEffect } from "react";
import css from "./css/productform.module.css";
import Label from "components/FormElement/Label";
import { newDate } from "controller/newDate";

import demoImage from "images/demopictures/newbed.jpg";

import { BiCloudUpload } from "react-icons/bi";
import { BsImages, BsFillTrashFill } from "react-icons/bs";
import DefaultImage from "components/DefaultImage";

const ProductForm = () => {
  const [selectedImage, setSelectedImage] = useState([]);

  const previewBeforeUploading = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      console.log(i);
      setSelectedImage([...selectedImage, files[i]]);
    }
  };
  useEffect(() => {
    console.log("changes found =>>");
    console.log(selectedImage);
  }, [selectedImage]);

  return (
    <>

      <div className="rounded-lg bg-white px-6 py-8">
        <form
          className="grid md:grid-cols-5 gap-8"
          encType="multipart/form-data"
        >
          <div className={`col-span-2`}>
            <Inputbox title="Product Title" classNameDiv={"mb-0"} />
            <p
              id="helper-text-explanation"
              className="mt-2 text-xs text-gray-500 dark:text-gray-400 mb-6 ml-2"
            >
              Do not exceed 20 characters when entering the product name.
            </p>

            <div className="grid grid-cols-3 gap-2">
              <Inputbox title="SKU" />
              <Inputbox title="Color" />
              <Inputbox title="Size" />
            </div>
            <Inputbox title="Category" placeholder="Category" />
            <Textarea title="Discription" row={6} />
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 mb-6 text-justify">
              Do not exceed 100 characters when entering the product name.
            </p>
          </div>
          <div className={`col-span-3`}>
            <Label title={"Product Images"} />
            <div className="w-full ">
              <label
                htmlFor="image__files"
                className="border-2 border-dashed cursor-pointer flex flex-col items-center justify-center text-sm text-gray-600 py-10"
              >
                Upload Images
                <BiCloudUpload className="text-3xl" />
              </label>
            </div>
            <input
              type="file"
              name="files"
              id="image__files"
              onChange={previewBeforeUploading}
              className="hidden"
              multiple
            />
            <div className="container overflow-y-auto text-sm text-gray-600 border h-32 my-2 ">
              {false ? (
                <div className="flex flex-col justify-center items-center gap-4">
                  <BsImages className="text-3xl" /> 0 Images found
                </div>
              ) : (
                <div className="grid md:grid-cols-4 gap-2">
                  {Array(5)
                    .fill()
                    .map((val, indx) => (
                      <div key={indx} className={css.image__wrapper}>
                        <div className={css.image__overlay}>
                          <button>
                            <BsFillTrashFill /> Remove
                          </button>
                        </div>
                        <DefaultImage src={demoImage} alt="demo-image" />
                      </div>
                    ))}
                </div>
              )}
            </div>
            <p
              id="helper-text-explanation"
              className="mt-2 text-xs text-gray-500 dark:text-gray-400 mb-6 text-justify"
            >
              You need to add at least 4 images.Pay attention to the quality of
              the pic tures you add, comply with the background color standards.
              Pictures must be in certain dimensions. Notice that the product
              shows all the details
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              <Inputbox title="Add Size" />
              <Inputbox title="Product Date" value={newDate.dotDate} />
            </div>

            <div className={css.btn__group}>
              <button>Add Product</button>
              <button>Save Product</button>
              <button>Save Product</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
