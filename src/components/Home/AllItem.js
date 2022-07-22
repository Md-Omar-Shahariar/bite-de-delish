import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../features/allitem/itemSlice";

import SingleItem from "./SingleItem";

const AllItem = () => {
  const { item, loading, error } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  console.log(item);

  return (
    <div className="min-h-screen container mx-auto">
      <h1 className="text-3xl md:text-4xl py-7 font-bold text-center text-primary font-serif">
        Our Products
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 p-5">
        {item.map((single) => (
          <SingleItem single={single} key={single._id}></SingleItem>
        ))}
      </div>
    </div>
  );
};

export default AllItem;
