import React from "react";
import { Cart } from "./Cart";
import { ProductsList } from "./ProductsList";
import { Product } from "./ProductsList/Product";
import { StyledMain } from "./style";

export const Main = ({ products }) => {
  return (
    <StyledMain>
      <div className="container">
        <ProductsList>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
        </ProductsList>

        <Cart />
      </div>
    </StyledMain>
  );
};
