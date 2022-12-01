import styled from "styled-components";

export const StyledMain = styled.main`
  @media (min-width: 600px) {
    & > div {
      display: flex;
      justify-content: space-between;

      .container-cart {
        height: fit-content;
        position: sticky;
        top: 20px;
      }
    }

    .container-cart {
      width: 30%;
    }
  }
`;
