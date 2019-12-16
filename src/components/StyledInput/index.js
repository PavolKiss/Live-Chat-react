import React from "react";
import { Input } from "./styles";

export const StyledInput = ({ type, onChange, placeholder, value }) => {
  return (
    <Input
      required
      minLength="3"
      type={type}
      autoComplete="on"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
