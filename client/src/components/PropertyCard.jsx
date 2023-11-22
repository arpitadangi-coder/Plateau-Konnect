import React from 'react';
import {useNavigate} from 'react-router-dom';
import background from '../assets/background.jpg';

const PropertyCard = ({ _id, name, address, price, category,listingType,screen }) => {
  const navigate=useNavigate()
  return (
    <div
      className="bg-gray-300 overflow-hidden shadow-lg rounded hover:shadow-2xl transition duration-300"
      onClick={() => navigate(`/listings/${_id}`)}
    >
      <img
        className="w-full h-auto cursor-pointer hover:opacity-80"
        src={background}
        alt={name}
      />
      <div className="bottom-0 w-full bg-white bg-opacity-75 p-4 h-auto">
        <span
          className={`px-3 py-0.5 font-semibold text-base ${
            listingType === "Sale"
              ? "text-white bg-slate-700"
              : "text-slate-800 bg-slate-300"
          }`}
        >
          On {listingType}
        </span>
        <h2 className="text-base lg:text-lg font-semibold text-slate-800 mt-1" title={name}>
          {name.substring(0,30)}
        </h2>
        <p className="text-gray-600" title={address}>
          {address.length > 30 ? `${address.substring(0, 30)}...` : address}
        </p>
        <hr className="my-3 border-gray-300" />
        <div className="flex justify-between">
          <p className="text-sm lg:text-base font-semibold bg-green-500 text-white rounded-full px-2 py-1">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
            {listingType === "Sale" ? "" : "/Month"}
          </p>
          <p className="text-base text-slate-700 self-center font-medium">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
