import Textarea from "FormElement/Textarea";
import Inputbox from "FormElement/Inputbox";
import React, { useState, useEffect, useCallback } from "react";
import css from "./css/productform.module.css";
import Label from "components/FormElement/Label";
import TextEditor from "components/FormElement/TextEditor";
import { FullScreenLoader } from "components/Loading";

import defaultImage from "images/default-image-300x300.png";

import { BiCloudUpload, BiCheckCircle } from "react-icons/bi";
import { BsImages, BsFillTrashFill } from "react-icons/bs";
import { useRouter } from "next/router";
import axios from "controller/axios";
import Image from "next/image";
import Link from "next/link";

const dataObj = {
  title: "",
  price: "",
  discount__price: "",
  category: "uncategorized",
  short__discription: "",
  on__sale: "1",
  status: "draft",
};
const ProductForm = ({ status }) => {
  const router = useRouter();
  const [changeData, setChangeData] = useState(0);
  const [dropStatus, setDropStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [imageLists, setImageLists] = useState([]);
  const [data, setData] = useState({ ...dataObj });
  const [text, setText] = useState("");
  const [sizeOfProduct, setSizeOfProduct] = useState("");
  const [ProductSizes, setProductSizes] = useState([]);
  const [editIndx, setEditIndx] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  const getCategorys = useCallback(async () => {
    try {
      const req = await axios.get("/categorys");
      if (req.status == 200) {
        setCategoryList(req.data);
        return setLoading(false);
      }
    } catch (error) {
      // console.error(error);
      return setLoading(false);
    }
  }, []);

  const getUpdateData = useCallback(async () => {
    try {
      setLoading(true);
      const { productid, q } = router.query;
      if (status == "update" && q == "update") {
        const reqData = await axios.get("/getproduct/" + productid);
        if (reqData.data?.length == 0) {
          return alert("data not found");
        }

        if (reqData.status !== 200) return;
        const {
          title,
          price,
          discount__price,
          category,
          short__discription,
          product__options,
          more__info,
          on__sale,
          status,
          images,
        } = reqData.data[0];

        setData({
          title,
          price,
          discount__price,
          category,
          short__discription,
          on__sale,
          status,
        });
        setText(more__info);
        setProductSizes(JSON.parse(product__options));
        setImageLists(images);
        // console.log(data);
        return setLoading(false);
      }
      setData({ ...dataObj });
      setProductSizes([]);
      setText("");
      setFiles([]);
      setImageLists([]);
      return setLoading(false);
    } catch (error) {
      setData({ ...dataObj });

      // console.error(error.response);
      return setLoading(false);
    }
  }, [router.query, status, changeData]);

  useEffect(() => {
    getCategorys();
    getUpdateData();
  }, [getUpdateData, status]);

  const inputHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    return setData((pre) => ({ ...pre, [name]: value }));
  };

  const addProdutSizes = () => {
    if (editIndx !== null) {
      setProductSizes(
        ProductSizes.map((item, indx) => {
          if (indx == editIndx) {
            return sizeOfProduct;
          }
          return item;
        })
      );
      setEditIndx(null);
      return setSizeOfProduct("");
    }

    setProductSizes((prev) => [...prev, sizeOfProduct]);
    return setSizeOfProduct("");
  };

  const editProductSizes = (val, indx) => {
    setSizeOfProduct(val);
    return setEditIndx(indx);
  };

  const deleteProductSizes = (indx) => {
    return setProductSizes(
      ProductSizes.filter((item, index) => index !== indx)
    );
  };

  const onUploadFileHandle = (e) => {
    const file = e.target.files;
    const maxLength = 4 - parseInt(imageLists?.length || 0);
    if (file.length > maxLength) alert("Maximum file uploaded is 4");
    if (file?.length > maxLength) return;
    return setFiles(file);
  };

  const createProduct = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();
      formData.append("more__info", text);

      const dataKeys = Object.keys(data);
      for (let i = 0; i < dataKeys.length; i++) {
        const name = dataKeys[i];
        const value = data?.[dataKeys[i]] || "";
        formData.append(name, value);
      }

      if (files.length !== 0) {
        const fileLength = files.length < 4 ? files.length : 4;
        for (let i = 0; i < fileLength; i++) {
          formData.append("product-images", files[i]);
        }
      }
      formData.append("product__options", JSON.stringify(ProductSizes));

      const create = await axios.post("/addproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (create.status == 201) {
        setData({ ...dataObj });
        changeData(Math.random());
        setFiles([]);
        setLoading(false);
      }
    } catch (error) {
      alert("Error found");
      // console.error(error);
      return setLoading(false);
    }
  };

  const updateProduct = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const { productid } = router.query;
      const formData = new FormData();
      formData.append("more__info", text);

      const dataKeys = Object.keys(data);
      for (let i = 0; i < dataKeys.length; i++) {
        const name = dataKeys[i];
        const value = data?.[dataKeys[i]] || "";
        formData.append(name, value);
      }

      if (files.length !== 0) {
        const maxLength = 4 - parseInt(imageLists?.length);
        const fileLength = files.length < maxLength ? files.length : maxLength;
        for (let i = 0; i < fileLength; i++) {
          formData.append("product-images", files[i]);
        }
      }
      formData.append("product__options", JSON.stringify(ProductSizes));

      const update = await axios.patch(
        "/updateproduct/" + productid,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (update.status == 200) {
        // alert("Update successfully");
        setLoading(false);
        setFiles([]);
        return setChangeData(Math.random());
      }
    } catch (error) {
      // console.log(error);
      return setLoading(false);
    }
  };

  return (
    <>
      {loading ? <FullScreenLoader /> : null}
      <div className="rounded-lg bg-white px-6 py-8">
        <form
          className="grid md:grid-cols-4 gap-8"
          encType="multipart/form-data"
          method="post"
          onSubmit={status == "update" ? updateProduct : createProduct}
        >
          <div className={`col-span-2`}>
            <Inputbox
              title="Product Title"
              classNameDiv={"mb-0"}
              name="title"
              onChange={inputHandle}
              value={data?.title}
              placeholder="Product Title"
            />
            <p
              id="helper-text-explanation"
              className="mt-2 text-xs text-gray-500 dark:text-gray-400 mb-6 ml-2"
            >
              Do not exceed 20 characters when entering the product name.
            </p>

            <div className="grid grid-cols-2 gap-2">
              <Inputbox
                title="Price"
                name="price"
                placeholder={"Price"}
                onChange={inputHandle}
                value={data?.price}
              />
              <Inputbox
                title="Discount Price"
                name="discount__price"
                placeholder={"Discount Price"}
                required={false}
                onChange={inputHandle}
                value={data?.discount__price}
              />
            </div>

            <div className="mb-4">
              <Label title={"Category"} />
              <select
                name="category"
                value={data?.category.toLowerCase()}
                className={css.category__list}
                onChange={inputHandle}
              >
                <option value="Uncategorized">Uncategorized</option>
                {categoryList?.sort()?.map((val, indx) => (
                  <option
                    key={indx}
                    value={val?.name?.toLowerCase()}
                    className="capitalize"
                  >
                    {val?.name}
                  </option>
                ))}
              </select>
            </div>

            <Textarea
              title="Short Discription"
              row={6}
              name="short__discription"
              onChange={inputHandle}
              value={data?.short__discription}
              placeholder={`Write short Discription about product at list 40 words.`}
            />

            <div className="mb-4">
              <Label title="More Info" />
              <TextEditor text={text} setText={setText} refresh={changeData} />
            </div>
          </div>
          <div className={`col-span-2`}>
            <Label title={"Product Images"} />
            <div className="w-full ">
              <label
                htmlFor="image__files"
                className={`${
                  imageLists?.length === 4 ? "hidden" : ""
                } border-2 border-dashed cursor-pointer flex flex-col items-center justify-center text-xs text-gray-600 py-8`}
              >
                Upload Images
                <BiCloudUpload className="text-3xl" />
              </label>
            </div>
            <input
              type="file"
              name="files"
              id="image__files"
              onChange={onUploadFileHandle}
              className="hidden"
              disabled={imageLists?.length === 4 ? true : false}
              multiple
            />
            <PreviewImages
              imageLists={imageLists}
              files={files}
              setImageLists={setImageLists}
            />
            <p className="text-xs text-gray-600">
              {`>>>`} Note:{" "}
              <storng className="font-bold text-red-600">
                {4 - (files?.length + imageLists?.length) || 0}
              </storng>{" "}
              No of photo upload available.
            </p>
            <p
              id="helper-text-explanation"
              className="mt-2 text-xs text-gray-500 dark:text-gray-400 mb-6 text-justify"
            >
              You need to add at least 4 images.Pay attention to the quality of
              the pictures you add, comply with the background color standards.
              Pictures must be in certain dimensions. Notice that the product
              shows all the details
            </p>

            <div className="mb-4">
              <Label title="Size of Product" />
              <div className={css.inputDiv}>
                <input
                  type="text"
                  placeholder="Size of Product"
                  id="size-of-product"
                  value={sizeOfProduct}
                  onChange={(e) => setSizeOfProduct(e.target.value)}
                />
                <button type="button" onClick={addProdutSizes}>
                  {editIndx !== null ? "Edit" : "Add"}
                </button>
              </div>
              {ProductSizes?.length !== 0 ? (
                <ul className="text-sm py-2 text-gray-700">
                  {ProductSizes?.map((val, indx) => (
                    <li
                      className="flex flex-row items-center justify-between "
                      key={indx}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 text-base">
                          <BiCheckCircle />
                        </span>
                        {val}
                      </div>
                      <div
                        className="flex flex-row gap-2 cursor-pointer"
                        style={{ fontSize: "10px" }}
                      >
                        <span
                          className="hover:text-green-600"
                          onClick={() => editProductSizes(val, indx)}
                        >
                          edit
                        </span>
                        <span
                          className="hover:text-red-600"
                          onClick={() => deleteProductSizes(indx)}
                        >
                          remove
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-4">
              <div>
                <Label title="On Sale Status" />
                <select
                  name="on__sale"
                  id=""
                  value={data?.on__sale}
                  onChange={inputHandle}
                  className={css.on__sale__status}
                >
                  <option value="0">Not on Sale</option>
                  <option value="1">On Sale</option>
                </select>
              </div>
              <div>
                <Label title="Product Status" />
                <select
                  name="status"
                  id=""
                  value={data?.status}
                  onChange={inputHandle}
                  className={css.product__status}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="unpublished">Unpublished</option>
                </select>
              </div>
            </div>

            <div className={css.btn__group}>
              <button type="submit">
                {status !== "update" ? "Add Product" : "Update Product"}
              </button>
              <Link href="/products">
                <button type="button">Canceled</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;

const PreviewImages = ({ imageLists, setImageLists, files }) => {
  const prevImageSrc = (file) => {
    if (file == undefined) return;
    if (files.length == 0) return;
    const url = URL?.createObjectURL(file);
    return url;
  };

  const removeImages = async (id) => {
    try {
      const remove = await axios.delete("/deleteproductimage/" + id);
      if (remove.status == 200) {
        setImageLists(imageLists?.filter((val) => val.id !== id));
        return alert("Removed");
      }
    } catch (error) {
      alert("Error::");
      // console.error(error);
    }
  };
  return (
    <>
      <div className="container overflow-y-auto text-sm text-gray-600 border  my-2 ">
        <div className="grid md:grid-cols-4 justify-center items-center gap-2 p-4">
          {imageLists?.map((val, indx) => {
            return (
              <div
                key={indx}
                className="border border-dashed w-full h-24 relative"
                onClick={() => removeImages(val?.id)}
              >
                <Image
                  src={val?.url || defaultImage}
                  alt={"default-images"}
                  layout="fill"
                  objectFit={"cover"}
                  objectPosition="center"
                />
              </div>
            );
          })}
          {Array(4 - parseInt(imageLists?.length || 0))
            .fill()
            .map((val, indx) => {
              return (
                <div
                  key={indx}
                  className="border border-dashed w-full h-24 relative"
                >
                  <Image
                    src={prevImageSrc(files[indx]) || defaultImage}
                    alt={"default-images"}
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition="center"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
