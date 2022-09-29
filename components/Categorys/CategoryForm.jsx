import React, { useRef, useState, useEffect } from "react";
import css from "./css/style.module.css";

// form componets
import Inputbox from "FormElement/Inputbox";

import { IoIosClose } from "react-icons/io";

const CategoryForm = ({ router }) => {
  const formRef = useRef();
  const [updateStatus, setUpdateStaus] = useState(false);

  useEffect(() => {
    if (router.query.hasOwnProperty("id")) setUpdateStaus(true);
  }, [router.query]);

  const addCategory = async (e) => {
    e.preventDefault();
  };
  const updateCateogry = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={css.categoryFormDiv}>
      <form
        className={css.categoryForm}
        ref={formRef}
        onSubmit={updateStatus ? updateCateogry : addCategory}
      >
        <div
          className={css.exit}
          title="close"
          onClick={() => router.push("/categorys")}
        >
          <IoIosClose />
        </div>
        <h1 className="text-lg font-bold pb-4">{updateStatus ? "Update" : "Add new"} Category</h1>
        <div>
          <Inputbox title="Category name" placeholder={"Write category name"} />
          <Inputbox
            title="Category search tag"
            placeholder={"Search keywords"}
          />
        </div>
        <div className="flex flex-row gap-5">
          <button className={css.addBtn}>
            {updateStatus ? "Update " : "Add new"}
          </button>
          <button className={css.removeBtn} disabled={!updateStatus}>
            Remove Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
