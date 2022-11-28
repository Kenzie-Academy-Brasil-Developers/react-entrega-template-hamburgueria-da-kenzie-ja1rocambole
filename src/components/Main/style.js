import styled from "styled-components";

export const StyledMain = styled.main`
  @media (min-width: 600px) {
    & > div {
      display: flex;
      justify-content: space-between;
    }

    .container-cart {
      width: 30%;
    }
  }
`;
