import styled, { css } from "styled-components";
import { Button } from ".";

export const StyledButton = styled(Button)`
  border: 2px solid var(--color-primary);
  border-radius: 8px;

  color: ${({ color }) => color};
  font-weight: 500;
  font-size: 14px;

  background: ${({ background }) => background};

  ${({ buttonSize }) => {
    if (buttonSize === "medium") {
      return css`
        padding: 10px 20px;
      `;
    } else if (buttonSize === "default") {
      return css`
        padding: 20px 20px;
      `;
    }
  }};
`;
