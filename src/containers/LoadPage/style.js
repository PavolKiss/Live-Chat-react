import styled from 'styled-components';
import { gray } from '../../variables-css/variables';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingAnimation = styled.div`
  border: 1rem solid #f3f3f3;
  border-radius: 50%;
  border-top: 1rem solid ${gray};
  width: 5rem;
  height: 5rem;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
