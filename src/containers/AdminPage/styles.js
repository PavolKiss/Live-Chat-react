import styled from 'styled-components';
import * as variable from '../../variables-css/variables';
import edit_Icon from '../../images/editIcon/edit-icon1.svg';

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

export const AddAdminForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ActionButton = styled.button`
  outline: none;
  background: url(${edit_Icon}) no-repeat scroll 0 0 transparent;
  cursor: pointer;
  padding: 2rem 2rem;
  border: none;
`;
