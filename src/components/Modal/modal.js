import React from "react";
import {
  OverlayWrapper,
  ModalWrapper,
  ButtonClose,
  ContentWrapper
} from "./styles-modal";
import { Popup } from "../Popup/popup";

const scss = "test";
const faild = "test";

export const Modal = ({ children }) => {
  return (
    <OverlayWrapper>
      <ModalWrapper>
        <ButtonClose>×</ButtonClose>
        <ContentWrapper>{children}</ContentWrapper>
      </ModalWrapper>

      <Popup sucessChildren={scss} failedChildren={faild} />
    </OverlayWrapper>
  );
};
