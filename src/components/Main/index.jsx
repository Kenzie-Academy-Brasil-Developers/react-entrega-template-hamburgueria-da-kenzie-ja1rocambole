import React from "react";
import { Cart } from "./Cart";
import { ProductsList } from "./ProductsList";
import { StyledMain } from "./style";

export const Main = () => {
  return (
    <StyledMain>
      <div className="container">
        <ProductsList>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </ProductsList>

        <Cart />
      </div>
    </StyledMain>
  );
};
