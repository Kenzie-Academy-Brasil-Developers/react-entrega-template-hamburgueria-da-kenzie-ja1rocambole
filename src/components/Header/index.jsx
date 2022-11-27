import React from "react";
import { Input } from "../../styles/input";
import { StyledTitle, StyledText } from "../../styles/typography";
import { StyledHeader } from "./style";

export const Header = () => {
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

        <Input />
      </div>
    </StyledHeader>
  );
};
