import styled from 'styled-components';
import { Link } from '@reach/router';
import * as variable from '../../variables-css/variables';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const RegisterAndLostPassWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.7rem;
`;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: 0.3s;
  &:hover {
    color: ${variable.darkBlue};
  }
`;

export const LostPasswordLink = styled.div`
  color: black;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${variable.darkBlue};
  }
`;
