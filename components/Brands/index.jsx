import React, { useCallback, useEffect, useState } from "react";
import css from "./css/style.module.css";

import DefaultImage from "components/DefaultImage";
import { BiTrash } from "react-icons/bi";
import BrandForm from "./BrandForm";
import { FullScreenLoader } from "components/Loading";
import axios from "controller/axios";
import brands from "pages/brands";

const Brands = () => {
  const [addBrands, setAddBrands] = useState(false);
  const [loading, setLoading] = useState(false);
  const [brandsData, setBrandsData] = useState([]);

  const getBrands = useCallback(async () => {
    try {
      const getData = await axios.get("/getbrands");
      if (getData.status == 200) {
        setBrandsData(getData.data);
        return setLoading(false);
      }
    } catch (error) {
      console.error(error);
      return setLoading(false);
    }
  }, [addBrands]);

  useEffect(() => {
    getBrands();
  }, [getBrands]);

  const deleteBrand = async (id) => {
    try {
      const remove = await axios.delete("/deletebrand/" + id);
      if (remove.status == 200) {
        return setBrandsData(brandsData.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error(error);
      return;
    }
  };

  return (
    <>
      {loading ? <FullScreenLoader /> : null}
      {addBrands ? (
        <BrandForm setAddBrands={setAddBrands} setLoading={setLoading} />
      ) : null}
      <div className="px-6">
        <div className="bg-white px-6 py-6 rounded-lg shadow-sm">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-bold ">Our Brand Lists</h2>
            <button
              onClick={() => setAddBrands(true)}
              className="px-3 py-3 flex flex-row justify-center items-center text-sm bg-blue-500 rounded-md text-white font-bold hover:opacity-50"
            >
              Add New
            </button>
          </div>
          {/* checking brands */}
          {brandsData?.length == 0 ? (
            <div className="text-sm text-gray-600 italic flex flex-row w-full gap-1">
              Here is not any brands,{" "}
              <span
                className="text-sm text-blue-700 font-bold cursor-pointer hover:underline"
                onClick={() => setAddBrands(true)}
              >
                Add New Brands
              </span>{" "}
            </div>
          ) : null}
          <article className="grid md:grid-cols-4 gap-8 mt-4">
            {brandsData?.map((val, indx) => (
              <div
                className="flex flex-col justify-center items-center gap-2 border py-6 px-10 relative"
                key={indx}
              >
                <div
                  className="text-lg absolute bottom-4 right-3 text-red-500 cursor-pointer hover:opacity-50"
                  onClick={() => deleteBrand(val?.id)}
                >
                  <BiTrash />
                </div>
                <div className="h-20">
                  <DefaultImage src={val?.logo} alt="svg-image" />
                </div>
                <div className="text-sm text-gray-700 font-bold capitalize">
                  {val?.name || "Brand name"}
                </div>
              </div>
            ))}
          </article>
        </div>
      </div>
    </>
  );
};

export default Brands;
