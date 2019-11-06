import React, { useState } from "react";
import { signUp } from "../../api/auth";
import { StyledInput } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton";
import { Wrapper } from "../LoginPage/styles";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = e => setEmail(e.target.value);

  const handlePassword = e => setPassword(e.target.value);

  const handleName = e => setName(e.target.value);

  const signup = async e => {
    e.preventDefault();
    const response = await signUp(email, password, name);
    console.log(response);
  };

  return (
    <form onSubmit={signup}>
      <Wrapper>
        <div>
          <StyledInput type="text" placeholder="Name" onChange={handleName} />
        </div>
        <div>
          <StyledInput
            type="email"
            placeholder="Email"
            onChange={handleEmail}
          />
        </div>
        <div>
          <StyledInput
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </div>
        <div>
          <StyledButton>Register</StyledButton>
        </div>
      </Wrapper>
    </form>
  );
};
