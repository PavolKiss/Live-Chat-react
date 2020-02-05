import React from 'react';
import { LoadingAnimation, Wrapper } from './style';

export const LoadPage = ({ load = false }) => {
  return <Wrapper>{load && <LoadingAnimation />}</Wrapper>;
};
