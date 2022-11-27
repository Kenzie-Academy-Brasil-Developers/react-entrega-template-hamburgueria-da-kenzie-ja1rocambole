import styled from "styled-components";
import { ProductsList } from ".";

export const StyledProductsList = styled.ul`
  padding-top: 5px;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  /* depois tenho que apagar isso prq isso é só pra simular um card */
  div {
    height: 346px;
    min-width: 300px;
    background-color: brown;
  }

  @media (min-width: 600px) {
    width: 65%;
    flex-wrap: wrap;
  }
`;
