import styled from "styled-components";
import { ProductsList } from ".";

export const StyledProductsList = styled.ul`
  padding-top: 5px;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  @media (min-width: 600px) {
    width: 65%;
    flex-wrap: wrap;
  }
`;
