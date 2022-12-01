import React from "react";
import { Input } from "../input";
import { StyledTitle, StyledText } from "../../styles/typography";
import { StyledHeader } from "./style";

export const Header = ({ products, filteredProducts, setFilteredProducts }) => {
  return (
    <StyledHeader>
      <div className="container">
        <StyledTitle
          tag="h1"
          fontWeight="700"
          color="var(--color-gray-100)"
          fontSize="one"
        >
          Burger{" "}
          <StyledText tag="span" color="var(--color-secondary)" fontSize="one">
            Kenzie
          </StyledText>
        </StyledTitle>

        <Input
          products={products}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
    </StyledHeader>
  );
};
