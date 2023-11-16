import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

import Enum from "../../models/enum.model.js";

const enums = [
  { category: "waterAvailability", key: "ALWAYS", value: "Always" },
  { category: "waterAvailability", key: "MOSTLY", value: "Mostly" },
  { category: "waterAvailability", key: "PERIODICALLY", value: "Periodically" },
  { category: "waterAvailability", key: "LIMITED", value: "Limited" },
  { category: "waterAvailability", key: "SCARCE", value: "Scarce" },
  { category: "electricityAvailability", key: "ALWAYS", value: "Always" },
  { category: "electricityAvailability", key: "MOSTLY", value: "Mostly" },
  {
    category: "electricityAvailability",
    key: "PERIODICALLY",
    value: "Periodically",
  },
  { category: "electricityAvailability", key: "LIMITED", value: "Limited" },
  { category: "electricityAvailability", key: "SCARCE", value: "Scarce" },
  { category: "furnishing", key: "SEMI", value: "Semi-furnished" },
  { category: "furnishing", key: "UNFURNISHED", value: "Un-furnished" },
  { category: "furnishing", key: "FULL", value: "Fully-furnished" },
  { category: "category", key: "APARTMENT", value: "Apartment" },
  { category: "category", key: "CONDOS", value: "Condo" },
  { category: "category", key: "COMMERCIAL", value: "Commercial" },
  { category: "category", key: "HOUSE", value: "House" },
  { category: "status", key: "AVAILABLE", value: "Available" },
  { category: "status", key: "UNAVAILABLE", value: "Unavailable" },
  { category: "listingType", key: "RENT", value: "Rent" },
  { category: "listingType", key: "SALE", value: "Sale" },
  { category: "facing", key: "EAST", value: "East" },
  { category: "facing", key: "WEST", value: "West" },
  { category: "facing", key: "NORTH", value: "North" },
  { category: "facing", key: "SOUTH", value: "South" },
  { category: "facing", key: "NORTHEAST", value: "North-East" },
  { category: "facing", key: "NORTHWEST", value: "North-West" },
  { category: "facing", key: "SOUTHEAST", value: "South-East" },
  { category: "facing", key: "SOUTHWEST", value: "South-West" },
  { category: "lift", key: "YES", value: "Yes" },
  { category: "lift", key: "NO", value: "No" },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    try {
      await Enum.deleteMany({});
      const response = await Enum.insertMany(enums);
      console.log("successfully inserted");
    } catch (error) {
      
    }
  })
  .catch((err) => {
    console.log(err);
  });
