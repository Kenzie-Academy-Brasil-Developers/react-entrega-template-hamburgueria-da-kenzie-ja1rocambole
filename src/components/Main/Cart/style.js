import styled from "styled-components";

export const StyledContainerTitleCard = styled.div`
  margin-top: 20px;

  padding: 22px 20px 13px 20px;
  border-radius: 5px 5px 0 0;
  background-color: var(--color-primary);

  @media (min-width: 600px) {
    margin-top: 0;
  }
`;

export const StyledCartAside = styled.aside`
  padding: 20px 18.45px;
  background-color: var(--color-gray-0);

  ul {
    height: 320px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    overflow: auto;
    white-space: nowrap;

    margin-bottom: 20px;
  }

  ul div {
    min-height: 80px;
    width: 100%;
    background-color: brown;
  }

  .line-grey {
    background-color: var(--color-gray-20);

    height: 2px;
    width: 100%;

    margin-bottom: 20px;
  }

  .container-total-cart {
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;
  }

  button {
    width: 100%;
  }
  button:hover {
    color: var(--color-gray-20);
    background-color: var(--color-gray-50);
  }
`;
