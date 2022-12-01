import styled from "styled-components";

export const StyledCartProduct = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 80px 52% 13px;
  gap: 10px;

  height: 80px;
  width: 100%;

  img {
    height: 100%;
    width: 80px;

    background-color: var(--color-gray-20);
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
  }

  & > div {
    height: 100%;
  }
  & > div > h1 {
    margin-top: 13px;
  }
  & > div > p {
    margin-top: 13px;
  }

  & > p {
    color: var(--color-gray-100);
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
  }
  & > p:hover {
    color: var(--color-gray-100);
    text-decoration: underline;
  }
`;
