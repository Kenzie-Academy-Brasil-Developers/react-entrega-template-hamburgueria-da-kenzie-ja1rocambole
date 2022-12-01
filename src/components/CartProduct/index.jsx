import React from "react";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledCartProduct } from "./style";

export const CartProduct = ({
  id,
  img,
  name,
  category,
  currentSale,
  setCurrentSale,
}) => {
  const removeCurrentSale = (event) => {
    const idProductRemoved = parseInt(
      event.target.parentNode.children[0].innerText
    );

    const newCurrentSale = currentSale.filter(
      (idProduct) => idProduct !== idProductRemoved
    );

    setCurrentSale(newCurrentSale);
  };

  return (
    <StyledCartProduct>
      <span className="display-none">{id}</span>

      <img src={img} alt="" />

      <div className="container-infos">
        <StyledTitle
          tag="h4"
          fontWeight="700"
          color="var(--color-gray-100)"
          fontSize="for"
        >
          {name}
        </StyledTitle>
        <StyledText
          tag="p"
          fontWeight="400"
          color="var(--color-gray-50)"
          fontSize="two"
        >
          {category}
        </StyledText>
      </div>

      <p onClick={removeCurrentSale}>Remover</p>
      {/* <StyledText
        tag="p"
        fontWeight="500"
        color="var(--color-gray-50)"
        fontSize="three"
      >
        Remover
      </StyledText> */}
    </StyledCartProduct>
  );
};
