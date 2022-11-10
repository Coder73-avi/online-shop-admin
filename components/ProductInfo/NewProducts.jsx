import React from "react";
import css from "./css/newproduct.module.css";
import Link from "next/link";

import ProductForm from "./ProductForm";
import { useRouter } from "next/router";

const NewProducts = () => {
  const router = useRouter();
  return (
    <>
      <div className="py-4 flex flex-row justify-between">
        <h1 className="font-bold text-xl  ">
          {router.query.productid?.toLowerCase() == "new"
            ? "Add New "
            : "Update "}{" "}
          Product
        </h1>
        <Link
          href={
            router.query.productid?.toLowerCase() !== "new"
              ? "/products/new"
              : "/products"
          }
        >
          <button className={css.addNew}>
            {router.query.productid?.toLowerCase() !== "new"
              ? "Add New "
              : "Product List"}
          </button>
        </Link>
      </div>

      {router.query?.productid?.toLowerCase() == "new" ? (
        <ProductForm status="new" />
      ) : (
        <ProductForm status="update" />
      )}
    </>
  );
};

export default NewProducts;
