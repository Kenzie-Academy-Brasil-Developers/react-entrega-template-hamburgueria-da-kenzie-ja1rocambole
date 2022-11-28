import React from "react";
import { StyledButton } from "../Button/style";
import { StyledInputContainer } from "./style";

export const Input = () => {
  return (
    <StyledInputContainer>
      <input type="search" placeholder="Digitar Pesquisa" />
      <StyledButton
        color="var(--white-fixed)"
        background="var(--color-primary)"
        buttonSize="medium"
      >
        Pesquisar
      </StyledButton>
    </StyledInputContainer>
  );
};
