import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import css from "./css/style.module.css";
import OrdersListTable from "./OrdersListTable";

const OrderStatusList = [
  "All Orders",
  "Completed",
  "Continuing",
  "Resititute",
  "Canceled",
];

const OrdersList = () => {
  const router = useRouter();
  return (
    <>
      <div className="pt-6 bg-white flex flex-row gap-3 items-center">
        <h1 className="text-xl font-bold text-gray-900">Orders Details</h1>
        <div className={css.smallIcon}>?</div>
      </div>
      <article className="py-8 text-sm text-justify text-gray-700">
        In the order details section, you can review and manage all orders with
        their details. YOu can view and edit many information sUch as iDs ot all
        orders, ordered roduct, order date, price and order status. Access to
        this area IS limited. Only administrators and team leaders can reach.the
        changes you make will be approved after they are checked.
      </article>

      <nav className={css.order__status__nav}>
        {OrderStatusList.map((val, indx) => (
          <Link
            href={`/orders?q=${val.toLowerCase().replace(" ", "-")}`}
            key={indx}
          >
            <a
              className={`${css.nav__link} ${
                !router.query.hasOwnProperty("q")
                  ? val == "All Orders" && css.active
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

      <div className="py-8">
        <OrdersListTable />
      </div>
    </>
  );
};

export default OrdersList;
