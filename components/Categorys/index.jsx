import React from "react";
import CategoryForm from "./CategoryForm";
import css from "./css/style.module.css";
import { useRouter } from "next/router";

// icons
import { AiFillFolder } from "react-icons/ai";
import Heading from "components/Heading";
import FilterHeading from "components/Heading/FilterHeading";
import Toastify from "components/Toastify";

import defaultimage from "images/defaultimages/noimage.jpg";
import Image from "next/image";

const Categorys = ({ categoryList }) => {
  const router = useRouter();

  return (
    <>
      {router.query?.q == "form" && <CategoryForm router={router} />}

      <Heading title="Category Information" addnew={"/categorys?q=form"} />
      <div className="w-[95%] mx-auto bg-white p-6 rounded-lg shadow-xl my-4">
        <div className="flex flex-row flex-wrap gap-3 py-4">
          {categoryList.map((val, indx) => (
            <div
              key={indx}
              className={css.categoryList__items}
              onClick={() => router.push(`/categorys?q=form&id=${val.id}`)}
            >
              <div className="flex flex-row items-center justify-start gap-4 bg-transparent z-20 relative font-bold capitalize">
                <AiFillFolder />
                {val.name}
              </div>
              {/* <Image
                src={
                  val.imagesrc !== ""
                    ? `http://localhost:4001/${val.imagesrc}`
                    : defaultimage
                }
                alt="category-bg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="z-10 opacity-70"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categorys;
