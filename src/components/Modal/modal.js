import React from 'react';
import { OverlayWrapper, ModalWrapper, ContentWrapper } from './styles';

export const Modal = ({ children, openModal }) => {
  return (
    <OverlayWrapper style={{ display: openModal ? 'flex' : 'none' }}>
      <ModalWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </ModalWrapper>
    </OverlayWrapper>
  );
};
