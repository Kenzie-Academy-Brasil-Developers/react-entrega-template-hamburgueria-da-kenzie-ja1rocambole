import React from "react";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import { StyledProduct } from "./style";

export const Product = ({
  id,
  img,
  name,
  category,
  price,
  currentSale,
  setCurrentSale,
}) => {
  const addCurrentSale = (event) => {
    const idProduct = parseInt(event.target.parentNode.children[0].innerText);
    setCurrentSale([...currentSale, idProduct]);
  };
  return (
    <>
      <StyledProduct>
        <div className="container-img">
          <img src={img} alt="" />
        </div>

        <div className="container-texts">
          <span className="display-none">{id}</span>
          <StyledTitle
            tag="h3"
            fontWeight="700"
            color="var(--color-gray-100)"
            fontSize="three"
          >
            {name}
          </StyledTitle>

          <StyledText
            tag="p"
            fontWeight="400"
            color="var(--color-gray-50)"
            fontSize="three"
          >
            {category}
          </StyledText>
          <StyledText
            tag="p"
            fontWeight="600"
            color="var(--color-primary)"
            fontSize="two"
          >
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </StyledText>
          <StyledButton
            background="var(--color-primary)"
            color="var(--white-fixed)"
            buttonSize="medium"
            onClick={addCurrentSale}
          >
            Adicionar
          </StyledButton>
        </div>
      </StyledProduct>
    </>
  );
};
