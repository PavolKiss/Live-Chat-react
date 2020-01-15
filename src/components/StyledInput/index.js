import React from 'react';
import { Input } from './styles';

export const StyledInput = ({ type, onChange, placeholder, value, name }) => {
  return (
    <Input
      required
      minLength='3'
      type={type}
      autoComplete='on'
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
