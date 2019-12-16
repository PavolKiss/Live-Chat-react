import React from "react";
import { OverlayWrapper } from "./styles-modal";

export const Modal = ({ children, openModal }) => {
  return (
    <OverlayWrapper style={{ display: openModal ? "flex" : "none" }}>
      {children}
    </OverlayWrapper>
  );
};
