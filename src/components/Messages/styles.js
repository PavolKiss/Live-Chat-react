import styled from 'styled-components';
import * as variable from '../../variables-css/variables';
import { Link } from '@reach/router';

export const StyledUl = styled.ul`
  max-height: 50rem;
  overflow: auto;
  background: black;
  border: 1.7rem solid black;
  margin-top: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0rem 0.9rem 2.2rem -0.1rem rgba(0, 0, 0, 0.75);
`;

export const StyledLi = styled.li`
  background: white;
  border-bottom: 0.2rem solid ${variable.backgroundColor};
  &:hover {
    transition: background-color 0.5s;
    background: ${variable.backgroundColor};
  }
`;

export const Avatar = styled.img`
  position: relative;
  top: 1.2rem;
  width: 3rem;
  height: 3rem;
`;

export const Username = styled.div`
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: ${variable.darkBlue};
`;

export const Message = styled.div`
  margin-left: 4rem;
  min-width: 72rem;
  max-width: 72rem;
  font-size: 1.4rem;
`;

export const Date = styled.div`
  font-size: 1rem;
  margin-left: 4rem;
`;

export const MessageArea = styled.textarea`
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  width: 100%;
  border-bottom: 0.1rem solid ${variable.darkBlue};
  overflow: auto;
  line-height: normal;
  margin-top: 5rem;
  opacity: 0.5;
  font-size: 1.6rem;
  &:focus {
    border-bottom: 0.1rem solid ${variable.darkBlue};
    box-shadow: 0 0.1rem 0 0 ${variable.darkBlue};
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Room = styled(Link)`
  outline: none;
  border: 0.2rem solid ${variable.darkBlue};
  color: ${variable.darkBlue};
  background: transparent;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.8rem;
  padding: 1.5rem 3rem;
  border-radius: 0.5rem;
  &:not(:first-child) {
    margin-left: 2rem;
  }
  &:hover {
    cursor: pointer;
    background: ${variable.darkBlue};
    transition: background-color 0.3s;
    color: white;
  }
`;

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  background: ${variable.darkBlue};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: white;
  border: 0.2rem solid transparent;
  &:hover {
    color: ${variable.lightBlue};
    cursor: pointer;
  }
`;
