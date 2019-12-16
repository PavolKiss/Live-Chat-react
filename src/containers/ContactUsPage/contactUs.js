import React from "react";
import { StyledInput } from "../../components/StyledInput";
import { MessageArea } from "../../components/Messages/styles";
import { StyledButton } from "../../components/StyledButton";
import { Wrapper } from "./styles";

export const ContactUs = () => {
  return (
    <Wrapper>
      <h1>Contact Us</h1>
      <StyledInput placeholder="Enter your e-mail address" type="email" />
      <StyledInput placeholder="Enter your name" type="text" />
      <label htmlFor="message">Your message</label>
      <MessageArea id="message" style={{ width: "30%" }}></MessageArea>
      <StyledButton>SEND</StyledButton>
    </Wrapper>
  );
};
