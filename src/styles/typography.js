import styled, { css } from "styled-components";
import { Title } from "./Title";
import { Text } from "./Text";

export const StyledTitle = styled(Title)`
  font-weight: ${({ fontWeight }) => fontWeight};

  color: ${({ color }) => (color ? color : "black")};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-size: 1.625rem;
        `;
      case "two":
        return css`
          font-size: 1.375rem;
        `;
      case "three":
        return css`
          font-size: 1.125rem;
        `;
      case "for":
        return css`
          font-size: 0.875rem;
        `;

      default:
        break;
    }
  }}
`;
export const StyledText = styled(Text)`
  font-weight: ${({ fontWeight }) => fontWeight};

  color: ${({ color }) => (color ? color : "black")};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-size: 1rem;
        `;
      case "two":
        return css`
          font-size: 0.875rem;
        `;
      case "three":
        return css`
          font-size: 0.75rem;
        `;

      default:
        break;
    }
  }}
`;
