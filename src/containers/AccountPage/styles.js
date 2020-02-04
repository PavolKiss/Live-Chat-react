import styled from 'styled-components';
import * as variable from '../../variables-css/variables';

export const AccountWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`;

export const Username = styled.div``;

export const Email = styled.div``;

export const UserAvatar = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 40%;
  &:hover {
    cursor: pointer;
  }
`;

export const SetPassOrAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  color: gray;
`;

export const ChangePasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  background: no-repeat;
  margin-top: 5px;
  margin-bottom: 10px;
  &:hover {
    color: ${variable.darkBlue};
    cursor: pointer;
  }
`;

export const ChooseAvatarWrapper = styled.div`
  font-size: 1.3rem;
  color: gray;
  text-align: center;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const StyledH1 = styled.h1`
  color: black;
  margin-bottom: 2rem;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
