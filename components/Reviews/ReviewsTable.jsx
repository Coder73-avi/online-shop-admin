import ProductRating from "components/ProductRating";
import css from "./css/reviews-table.module.css";
import moment from "moment";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import axios from "controller/axios";

const ReviewsTable = ({ reviews, setLoading, setReviews }) => {
  const updateReview = async (id, status) => {
    try {
      const update = await axios.patch("/updatereviewstatus/" + id, {
        status,
      });
      if (update.status !== 200) throw Error("Update Errors");
      setReviews(
        reviews?.map((item) => {
          if (item.id == id) item.status = status;
          return item;
        })
      );
    } catch (error) {
      console.error(error);
      return setLoading(false);
    }
  };
  if (reviews.length == 0) {
    return (
      <div className="px-6 py-4 text-sm text-gray-600">0 Review Found</div>
    );
  }
  return (
    <>
      <table className="w-full text-xs text-gray-700">
        <thead>
          <tr className="text-left border-b border-t">
            <th className="px-3 py-4" scope="col">
              ID
            </th>
            <th className="px-3 py-4" scope="col">
              Product Name
            </th>
            <th className="px-3 py-4" scope="col">
              Name
            </th>
            <th className="px-3 py-4 w-52">Text</th>
            <th className="px-3 py-4" scope="col">
              Rating
            </th>
            <th className="px-3 py-4" scope="col">
              Date
            </th>
            <th className="px-3 py-4" scope="col">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {reviews?.map((val, indx) => (
            <tr className=" border-b" key={indx}>
              <td className="px-3 py-4">{indx + 1}</td>
              <td className="px-2 py-3 flex flex-row gap-3">
                <div className="font-bold text-gray-900 pt-2">
                  {val?.product?.title || "Product Title"}
                </div>
              </td>
              <td className="px-2 py-3">{val?.fullname || "Customer Name"}</td>
              <td className="px-2 py-3">{val?.text}</td>
              <td className="px-2 py-3">
                <div className={`flex flex-row  items-center`}>
                  <ProductRating maxRating={parseInt(val?.rating || 1)} />
                </div>
              </td>
              <td className="px-2 py-3">
                {moment.utc(new Date(val?.date)).fromNow()}
              </td>
              <td className="px-4 py-3">
                <div className={css.actionDiv}>
                  <div className="flex flex-row gap-1 items-center cursor-pointer capitalize">
                    <div
                      className={`${
                        val.status.toLowerCase() == "enable"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {val.status}
                    </div>
                    <button className={css.actionBtn}>
                      <BsThreeDots />
                    </button>
                  </div>
                  <ul className={css.dropDown__actionListDiv}>
                    <li
                      onClick={() => updateReview(val?.id, "Enable")}
                      className={css.dropDown__actionList}
                    >
                      Enable
                    </li>
                    <li
                      onClick={() => updateReview(val?.id, "Disable")}
                      className={css.dropDown__actionList}
                    >
                      Disable
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ReviewsTable;
