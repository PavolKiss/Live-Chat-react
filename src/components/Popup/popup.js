import React from "react";
import { PopupWrapper, SucessWrapper, FailedWrapper } from "./styles-popup";
import "./style_popup.css";

export const Popup = ({ sucessChildren, failedChildren }) => {
  return (
    <PopupWrapper>
      <SucessWrapper className="text">{sucessChildren}</SucessWrapper>
      <FailedWrapper className="text">{failedChildren}</FailedWrapper>
    </PopupWrapper>
  );
};
