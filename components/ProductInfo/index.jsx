import React from "react";
import css from "./css/style.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductTable from "./ProductTable";

const ProductStatusList = [
  "All Products",
  "Draft",
  "Comming soon",
  "Published",
  "On hold",
  "Archived",
];

const ProductInfo = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row gap-3 items-center px-10 py-8">
        <h1 className="text-xl font-bold text-gray-900">Products Details</h1>
      </div>
      <nav className={`px-8 ${css.product__status__nav}`}>
        {ProductStatusList.map((val, indx) => (
          <Link
            href={`/products?q=${val.toLowerCase().replace(" ", "-")}`}
            key={indx}
          >
            <a
              className={`${css.nav__link} ${
                !router.query.hasOwnProperty("q")
                  ? val == "All Products" && css.active
                  : router.query.q == val.toLowerCase().replace(" ", "-")
                  ? css.active
                  : ""
              }`}
            >
              {val}
            </a>
          </Link>
        ))}
      </nav>

      <div className="bg-white w-full h-[400px] px-8 py-4 ">
        <ProductTable />
      </div>
    </>
  );
};

export default ProductInfo;
