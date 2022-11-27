import React from "react";
import { StyledButton } from "../../../styles/Button/style";
import { StyledText, StyledTitle } from "../../../styles/typography";
import { StyledContainerTitleCard, StyledCartAside } from "./style";

export const Cart = () => {
  return (
    <div className="container-cart">
      <StyledContainerTitleCard className="container-title-cart">
        <StyledTitle
          tag="h3"
          fontWeight="700"
          color="var(--white-fixed)"
          fontSize="three"
        >
          Carrinho de compras
        </StyledTitle>
      </StyledContainerTitleCard>
      <StyledCartAside>
        <ul>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </ul>

        <div className="line-grey"></div>

        <div>
          <div className="container-total-cart">
            <StyledText
              tag="p"
              fontWeight="600"
              color="var(--color-gray-100)"
              fontSize="two"
            >
              Total
            </StyledText>

            <StyledText
              tag="p"
              fontWeight="600"
              color="var(--color-gray-50)"
              fontSize="two"
            >
              R$ 666,00
            </StyledText>
          </div>

          <StyledButton
            color="var(--color-gray-50)"
            background="var(--color-gray-20)"
            buttonSize="default"
          >
            Remover Todos
          </StyledButton>
        </div>
      </StyledCartAside>
    </div>
  );
};
