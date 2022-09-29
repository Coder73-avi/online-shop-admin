import React, { useState, useEffect } from "react";
import css from "./css/newproduct.module.css";
import { newDate } from "controller/newDate";
import Link from "next/link";

import demoImage from "images/demopictures/newbed.jpg";

import DefaultImage from "components/DefaultImage";
import ProductForm from "./ProductForm";
import { useRouter } from "next/router";
import ProductOverview from "./ProductOverview";

const ProductStatusList = ["Overview", "Product Form"];

const NewProducts = () => {
  const router = useRouter();
  const [activeValue, setActiveValue] = useState("");
  useEffect(() => {
    setActiveValue(router.query?.q || "");
  }, [router.query]);

  return (
    <>
      {router.query.productid}
      <h1 className="font-bold text-xl py-8 ">
        {router.query.productid == "new" ? "Add New " : "Update "} Product
      </h1>
      {router.query?.productid !== "new" && (
        <nav className={` ${css.product__status__nav}`}>
          <Link href={`/products/${router.query?.productid}?q=overview`}>
            <a
              className={`${css.nav__link} ${
                activeValue == "" || activeValue.toLowerCase() == "overview"
                  ? css.active
                  : " "
              } `}
            >
              Overview
            </a>
          </Link>
          <Link href={`/products/${router.query?.productid}?q=update`}>
            <a
              className={`${css.nav__link} ${
                activeValue.toLowerCase() == "update" ? css.active : ""
              } `}
            >
              Product Update
            </a>
          </Link>
        </nav>
      )}

      {router.query?.productid == "new" ? (
        <ProductForm />
      ) : router.query?.q == "overview" || !router.query.hasOwnProperty("q") ? (
        <ProductOverview />
      ) : (
        <ProductForm />
      )}
    </>
  );
};

export default NewProducts;
