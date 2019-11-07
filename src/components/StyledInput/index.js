import React from "react";
import { Input } from "./styles";

export const StyledInput = ({ type, onChange, placeholder }) => {
  return (
    <Input
      required
      minLength="3"
      type={type}
      autoComplete="on"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
