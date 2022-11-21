import React from "react";
import CategoryForm from "./CategoryForm";
import css from "./css/style.module.css";
import { useRouter } from "next/router";

// icons
import { AiFillFolder } from "react-icons/ai";
import Heading from "components/Heading";
import FilterHeading from "components/Heading/FilterHeading";

import Image from "next/image";
import DefaultImage from "components/DefaultImage";

const Categorys = ({ categoryList }) => {
  const router = useRouter();

  return (
    <>
      {router.query?.q == "form" && <CategoryForm router={router} />}

      <Heading
        title="Category Information"
        button={"Add New"}
        addnew={"/categorys?q=form"}
      />
      <div className="w-[95%] mx-auto bg-white p-6 rounded-lg shadow-xl my-4">
        <div className="grid md:grid-cols-4 gap-4">
          {categoryList.map((val, indx) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 border p-4 cursor-pointer"
                key={indx}
                onClick={() => router.push(`/categorys?q=form&id=${val.id}`)}
              >
                <div className="relative w-40">
                  <DefaultImage src={val?.imagesrc} alt={val?.originalname} />
                </div>
                <div className="font-bold text-blue-800 capitalize">
                  {val?.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categorys;
