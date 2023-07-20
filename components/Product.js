import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
function Product({ id, title, description, category, price, images }) {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [ratings] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random < 5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      {/* category name*/}
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </p>

      {/* Product image */}
      <Image src={images[0]} height={200} width={200} objectFit="contain" />

      {/* title name */}
      <h4 className="my-3">{title}</h4>

      {/* display ratings */}
      <div className="flex">
        {Array(ratings)
          .fill()
          .map((v, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
      </div>

      {/* description */}
      <p className="text-xs my-2 line-clamp-2">{description}</p>

      {/* price */}
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      {/* display prime symbol */}
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <CheckIcon className="h-4 text-yellow-200 bg-black" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      {/* button */}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
