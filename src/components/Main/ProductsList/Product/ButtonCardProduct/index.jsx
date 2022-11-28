import { StyledButton } from "../../../../../styles/Button/style";

import React from "react";

export const ButtonCardProduct = ({ children }) => {
  return (
    <StyledButton
      background="var(--color-primary)"
      color="var(--white-fixed)"
      buttonSize="medium"
    >
      {children}
    </StyledButton>
  );
};
