import React from 'react';
import { PopupWrapper, SucessWrapper, FailedWrapper } from './styles-popup';
import './style_popup.css';

export const Popup = ({ sucessChildren, failedChildren, style }) => {
  return (
    <PopupWrapper style={style}>
      {sucessChildren ? (
        <SucessWrapper className='text'>{sucessChildren}</SucessWrapper>
      ) : (
        <FailedWrapper className='text'>{failedChildren}</FailedWrapper>
      )}
    </PopupWrapper>
  );
};
