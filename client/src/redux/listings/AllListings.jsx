import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListings } from "./listingService";
import { useLocation } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard";
import {  STATUS } from "../../utils/constants/common";
import Pagination from "../../components/Pagination";

const AllListings = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const dispatch = useDispatch();
  const callRef = useRef(false);
  const { listings, error } = useSelector(store => store.listing);
  const location = useLocation();

  useEffect(() => {
    const fetch = () => {
      dispatch(getListings())
        .unwrap()
        .then(() => {
          setStatus(STATUS.SUCCEEDED);
        })
        .catch(() => {
          setStatus(STATUS.FAILED);
        });
    };
    if (!callRef.current) {
      callRef.current = true;
      fetch();
    }
  }, [dispatch, location]);

  if (status === STATUS.FAILED) {
    return (
      <div className="max-w-screen-xl mx-4 xl:mx-auto py-4 h-full flex items-center flex-col">
        <p className="text-lg text-medium text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex-grow w-full">
      {listings.length ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {listings.map((property, index) => (
              <PropertyCard key={index} {...property} screen="listings" />
            ))}
          </div>
          <Pagination />
        </div>
      ) : (
        <p className="mt-4 text-lg text-medium text-center col-span-full">
          No Property Available
        </p>
      )}
    </div>
  );
};

export default AllListings;
