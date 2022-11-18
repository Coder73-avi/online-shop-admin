import Heading from "components/Heading";
import FilterHeading from "components/Heading/FilterHeading";
import React, { useState, useEffect, useCallback } from "react";
import css from "./css/style.module.css";

import { BsThreeDots } from "react-icons/bs";
import { FullScreenLoader } from "components/Loading";
import axios from "controller/axios";
import ProductRating from "components/ProductRating";
import moment from "moment";
import Pagination from "components/Pagination";
import ReviewsTable from "./ReviewsTable";
import { useRouter } from "next/router";

const Reviews = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [noOfPage, setNoOfPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const getReviews = useCallback(async () => {
    try {
      const getData = await axios.get(`/getreviews/${noOfPage}/${pageNumber}`);
      if (getData.status == 200) {
        setReviews(getData.data.reviews);
        setPagination(getData.data.pagination);
        if (pagination < pageNumber)
          return router.push("/reviews?page=" + pagination);
        return setLoading(false);
      }
    } catch (error) {
      console.error(error);
      return setLoading(false);
    }
  }, [pageNumber]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  useEffect(() => {
    if (router.query.hasOwnProperty("page")) {
      setPageNumber(router.query.page);
    }
  }, [router.query]);

  return (
    <>
      {loading ? <FullScreenLoader /> : null}
      <div className="px-6 my-3">
        <div className="bg-white px-6 py-6 rounded-lg shadow-sm">
          <h1 className="text-xl font-bold">Products Reviews</h1>

          {/*<FilterHeading /> */}
          <div className="mt-6">
            <ReviewsTable
              reviews={reviews}
              setReviews={setReviews}
              setLoading={setLoading}
            />
          </div>

          {/* pagenation */}
          <Pagination pagination={pagination} link={"/reviews"} />
        </div>
      </div>
    </>
  );
};

export default Reviews;
