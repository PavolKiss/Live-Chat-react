import React from 'react';
import { Button } from './styles';

export const StyledButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
