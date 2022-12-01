import React from "react";
import { StyledButton } from "../../styles/button";
import { StyledText, StyledTitle } from "../../styles/typography";
import { CartProduct } from "../CartProduct";
import { StyledContainerTitleCard, StyledCartAside } from "./style";

export const Cart = ({ products, currentSale, setCurrentSale }) => {
  const productsCurrentSale = products.filter((product) =>
    currentSale.includes(product.id)
  );

  const arrayPrices = [];

  productsCurrentSale.forEach((element) => {
    arrayPrices.push(element.price);
  });
  const totalPrice = arrayPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const clearCurrentSale = () => {
    setCurrentSale([]);
  };

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
          {currentSale.length === 0 ? (
            <div>
              <StyledTitle
                tag="h3"
                fontWeight="700"
                color="var(--color-gray-100)"
                fontSize="three"
              >
                Sua sacola está vazia
              </StyledTitle>
              <StyledText
                tag="p"
                fontWeight="400"
                color="var(--color-gray-50)"
                fontSize="two"
              >
                Adicione itens
              </StyledText>
            </div>
          ) : (
            productsCurrentSale.map((productCurrentSale) => (
              <CartProduct
                key={productCurrentSale.id}
                id={productCurrentSale.id}
                img={productCurrentSale.img}
                name={productCurrentSale.name}
                category={productCurrentSale.category}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            ))
          )}
        </ul>

        {currentSale.length > 0 ? (
          <>
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
                  {totalPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </StyledText>
              </div>

              <StyledButton
                color="var(--color-gray-50)"
                background="var(--color-gray-20)"
                buttonSize="default"
                onClick={clearCurrentSale}
              >
                Remover Todos
              </StyledButton>
            </div>
          </>
        ) : null}
      </StyledCartAside>
    </div>
  );
};
