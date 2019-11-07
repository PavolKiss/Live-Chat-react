import React from "react";
import LeftPicture from "../../images/lefthand.png";
import RightPicture from "../../images/righthand.png";
import {
  WrapperRow,
  LeftWrapper,
  ContentWrapper,
  RightWrapper
} from "./styles";
import { Messages } from "../../components/Messages/messages";

export const ChatPage = ({ chatId }) => {
  return (
    <WrapperRow>
      <LeftWrapper>
        <img src={LeftPicture} />
      </LeftWrapper>
      <ContentWrapper>
        <Messages chatId={chatId} />
      </ContentWrapper>
      <RightWrapper>
        <img src={RightPicture} />
      </RightWrapper>
    </WrapperRow>
  );
};
