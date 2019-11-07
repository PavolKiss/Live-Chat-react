import styled from "styled-components";
import * as variable from "../../variables-css/variables";

export const Input = styled.input`
  outline: none;
  padding: 1.5rem 5.5rem;
  margin-bottom: 1rem;

  &:focus {
    border: 0.2rem solid ${variable.darkBlue};
  }
`;
