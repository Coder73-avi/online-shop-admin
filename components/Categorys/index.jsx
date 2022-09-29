import React from "react";
import CategoryForm from "./CategoryForm";
import CategoryInfo from "./CategoryInfo";
import css from "./css/style.module.css";
import { useRouter } from "next/router";

// icons
import { AiFillFolder } from "react-icons/ai";
import Heading from "components/Heading";
import FilterHeading from "components/Heading/FilterHeading";

const Categorys = () => {
  const router = useRouter();

  return (
    <>
      {router.query?.q == "form" && <CategoryForm router={router} />}

      <Heading title="Category Information" addnew={"/categorys?q=form"} />
      <div className="w-[95%] mx-auto bg-white p-6 rounded-lg shadow-xl my-4">
        <FilterHeading />
        <div className="flex flex-row flex-wrap gap-3 py-4">
          {Array(20)
            .fill()
            .map((val, indx) => (
              <div key={indx} className={css.categoryList__items}>
                <AiFillFolder />
                Category {indx}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Categorys;
