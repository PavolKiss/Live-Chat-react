import React, { useState } from "react";
import { signin } from "../../api/auth";
import { Wrapper } from "./styles";
import { Button } from "../../components/StyledButton/styles";
import { StyledInput } from "../../components/StyledInput";
import { navigate } from "@reach/router";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = e => setEmail(e.target.value);

  const handlePassword = e => setPassword(e.target.value);

  const signIn = async e => {
    e.preventDefault();
    try {
      const response = await signin(email, password);
      console.log(response);
      navigate("/chat/general");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={signIn}>
      <Wrapper>
        <h1>Sign In</h1>
        <div>
          <StyledInput
            type="email"
            onChange={handleEmail}
            placeholder="Email"
          />
        </div>
        <div>
          <StyledInput
            type="password"
            onChange={handlePassword}
            placeholder="Password"
          />
        </div>
        <Button>Sign In</Button>
      </Wrapper>
    </form>
  );
};
