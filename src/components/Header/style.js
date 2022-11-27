import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  h1 {
    margin-top: 16px;
  }

  @media (min-width: 600px) {
    & > div {
      /* background-color: red; */
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    h1 {
      margin-top: 0;
    }
  }
`;
