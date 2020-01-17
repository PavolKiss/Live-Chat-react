import styled from 'styled-components';
import * as variable from '../../variables-css/variables';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const AdminActionsWrapper = styled.div`
  flex-direction: row;
`;

export const AdminPageButton = styled.button`
  outline: none;
  border: 0.2rem solid ${variable.darkBlue};
  background-color: ${variable.darkBlue};
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 2rem 3rem;
  margin: 10rem 1rem 4rem 1rem;
  &:hover {
    transition: 0.3s;
    background: transparent;
    color: black;
  }
`;
