import React from "react";
import { Cart } from "../Cart";
import { Product } from "../Product";
import { StyledProductsList } from "../ProductsList/style";
import { StyledMain } from "./style";

export const Main = ({ products, currentSale, setCurrentSale }) => {
  return (
    <StyledMain>
      <div className="container">
        <StyledProductsList>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              category={product.category}
              price={product.price}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          ))}
        </StyledProductsList>

        <Cart
          products={products}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      </div>
    </StyledMain>
  );
};
