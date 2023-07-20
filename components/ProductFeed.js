import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.map(({ id, title, description, category, price, images }) => (
        <Product
          key={title}
          id={id}
          title={title}
          description={description}
          category={category}
          price={price}
          images={images}
        />
      ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      {products
        .slice(5, products.length)
        .map(({ id, title, description, category, price, images }) => (
          <Product
            key={title}
            id={id}
            title={title}
            description={description}
            category={category}
            price={price}
            images={images}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
