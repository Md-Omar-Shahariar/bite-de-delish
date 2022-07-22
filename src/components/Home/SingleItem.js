import React from "react";

const SingleItem = ({ single }) => {
  return (
    <div>
      <div class="card  bg-base-100 shadow-xl">
        <figure>
          <img
            style={{ height: "300px", width: "100%" }}
            src={single.img}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title ">
            <span className="font-bold text-primary font-serif lg:text-3xl md:text-2xl">
              {single.item}
            </span>
          </h2>
          <p className="text-3xl text-neutral font-serif font-bold">
            $ {single.price}
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
