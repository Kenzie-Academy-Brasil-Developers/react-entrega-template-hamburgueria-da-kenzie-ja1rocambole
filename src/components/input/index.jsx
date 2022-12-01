import React, { useState } from "react";
import { StyledButton } from "../../styles/button";
import { StyledInputContainer } from "./style";

export const Input = ({ products, filteredProducts, setFilteredProducts }) => {
  const [input, setInput] = useState("");

  const searcheProducts = (event) => {
    setFilteredProducts(
      products.filter((product) => {
        const nameLow = product.name.toLowerCase();
        const nameLowNormalize = nameLow.normalize();

        const categoryLow = product.category.toLowerCase();
        const categoryLowNormalize = categoryLow.normalize();

        const inputLow = input.toLowerCase();
        const inputLowNormalize = inputLow.normalize();

        if (
          nameLowNormalize.includes(inputLowNormalize) ||
          categoryLowNormalize.includes(inputLowNormalize)
        ) {
          return true;
        }
        return false;
      })
    );
  };

  return (
    <StyledInputContainer>
      <input
        type="search"
        placeholder="Digitar Pesquisa"
        onChange={(event) => setInput(event.target.value)}
      />
      <StyledButton
        color="var(--white-fixed)"
        background="var(--color-primary)"
        buttonSize="medium"
        onClick={searcheProducts}
      >
        Pesquisar
      </StyledButton>
    </StyledInputContainer>
  );
};
