import { FullScreenLoader } from "components/Loading";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback } from "react";
import css from "./css/style.module.css";
import axios from "controller/axios";

import OrdersListTable from "./OrdersListTable";

const OrderStatusList = [
  "All Orders",
  "Processing",
  "Shipping",
  "Completed",
  "Canceled",
];

const OrdersList = () => {
  const router = useRouter();
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getOrders = useCallback(async () => {
    try {
      const req = await axios.get("/getallorders");
      const ordersList = req.data;

      if (req.status == 200) {
        setOrderList(ordersList);
        return setLoading(false);
      }
    } catch (error) {
      console.error(error);
      return setLoading(false);
    }
  }, []);
  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <>
      {loading ? <FullScreenLoader /> : null}
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
        <OrdersListTable orderList={orderList} />
      </div>
    </>
  );
};

export default OrdersList;
