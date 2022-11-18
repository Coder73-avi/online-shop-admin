import React, { useRef, useState, useEffect, useCallback } from "react";
import css from "./css/style.module.css";
import Image from "next/image";

// form componets
import Inputbox from "FormElement/Inputbox";
import axios from "controller/axios";
// import axios from "axios";

import { IoIosClose } from "react-icons/io";

const CategoryForm = ({ router }) => {
  const formRef = useRef();
  const [categoryname, setCategoryname] = useState("");
  const [categorySearchTag, setCategorySearchTag] = useState("");
  const [categoryimage, setCategoryimage] = useState([]);
  const [updateStatus, setUpdateStaus] = useState(false);

  const getDataForUpdate = useCallback(async () => {
    const { id } = router.query;
    const getData = await axios.get("/category/" + id);

    if (getData.status == 200) {
      const { name, searchtag, imagesrc } = getData.data[0];
      setCategoryname(name);
      setCategorySearchTag(searchtag);
      if (imagesrc !== "") {
        setCategoryimage(imagesrc);
      } else {
        setCategoryimage("");
      }
    }
  }, [router.query]);

  useEffect(() => {
    if (router.query.hasOwnProperty("id")) {
      setUpdateStaus(true);
      getDataForUpdate();
    }
  }, [getDataForUpdate, router.query]);

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", categoryname);
      data.append("searchtag", JSON.stringify(categorySearchTag));
      if (typeof categoryimage == "object")
        data.append("imagesrc", categoryimage);

      const send = await axios.post("/addcategory", data);
      if (send.status == 201) {
        alert("Category added.");
      }

      console.log(send);
    } catch (error) {
      alert(error.message);
    }
  };

  const updateCateogry = async (e) => {
    e.preventDefault();
    try {
      const { id } = router.query;
      const data = new FormData();
      data.append("name", categoryname);
      data.append("searchtag", JSON.stringify(categorySearchTag));
      if (typeof categoryimage == "object")
        data.append("imagesrc", categoryimage);

      const send = await axios.patch("/updatecategory/" + id, data);
      if (send.status == 200) {
        alert("Category update.");
      }

      console.log(send);
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const req = await axios.delete("/deletecategory/" + id);
      if (req.status == 200) {
        alert("Delete Successfully");
        router.push("/categorys");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // console.log(typeof categoryimage, categoryimage);

  return (
    <div className={css.categoryFormDiv}>
      <form
        className={css.categoryForm}
        ref={formRef}
        encType={"multipart/form-data"}
        onSubmit={updateStatus ? updateCateogry : addCategory}
      >
        <div
          className={css.exit}
          title="close"
          onClick={() => router.push("/categorys")}
        >
          <IoIosClose />
        </div>
        <h1 className="text-lg font-bold pb-4">
          {updateStatus ? "Update" : "Add new"} Category
        </h1>
        <div>
          <Inputbox
            title="Category name"
            placeholder={"Write category name"}
            value={categoryname}
            onChange={(e) => setCategoryname(e.target.value)}
          />
          <Inputbox
            title="Category search tag"
            placeholder={"Search keywords"}
            value={categorySearchTag}
            onChange={(e) => setCategorySearchTag(e.target.value)}
          />
          <div className="my-4">
            <label
              htmlFor="file"
              className=" relative h-40 w-44 mx-auto text-xs text-gray-500 cursor-pointer border-2 border-dashed flex flex-col justify-center items-center"
            >
              {categoryimage.length !== 0 ? (
                <Image
                  src={
                    typeof categoryimage == "object"
                      ? URL.createObjectURL(categoryimage)
                      : categoryimage
                  }
                  alt="category-image"
                  layout={"fill"}
                  objectFit={"cover"}
                  objectPosition={"center"}
                />
              ) : (
                "Choose Image for category"
              )}
            </label>
            <input
              type="file"
              name="category"
              id="file"
              className="hidden"
              onChange={(e) => setCategoryimage(e.target.files[0])}
            />
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <button className={css.addBtn} type="submit">
            {updateStatus ? "Update " : "Add new"}
          </button>
          <button
            className={css.removeBtn}
            type="button"
            onClick={() => deleteCategory(router.query?.id)}
            disabled={!updateStatus}
          >
            Remove Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
