import styled from "styled-components";
import * as variable from "../../variables-css/variables";

export const Button = styled.button`
  display: flex;
  margin: 0.5rem auto;
  padding: 1.5rem 3rem;
  border: none;
  background: ${variable.darkBlue};
  outline: none;
  color: white;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
