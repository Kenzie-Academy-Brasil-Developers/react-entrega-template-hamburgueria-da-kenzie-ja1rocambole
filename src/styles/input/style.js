import styled from "styled-components";

export const StyledInputContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 60px;
  width: 100%;
  max-width: 365px;

  padding: 0 15px;
  input {
    height: 100%;
    width: 100%;

    padding: 10px 50px 10px 15px;
    border: 2px solid var(--color-gray-20);

    border-radius: 8px;
  }
  button {
    position: absolute;
    right: 20px;
  }

  @media (min-width: 600px) {
    margin-bottom: 0;
  }
`;
