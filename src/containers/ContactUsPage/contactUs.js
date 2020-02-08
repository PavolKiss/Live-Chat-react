import React, { useState } from 'react';
import * as firebase from '../../firebase/index';
import swal from 'sweetalert';
import { StyledInput } from '../../components/StyledInput';
import { MessageArea } from '../../components/Messages/styles';
import { StyledButton } from '../../components/StyledButton';
import { Wrapper, Form } from './styles';

export const ContactUs = () => {
  const [message, setMessage] = useState({
    email: '',
    name: '',
    messageText: ''
  });

  const handleMessage = e => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    });
  };

  const sendMessage = async e => {
    e.preventDefault();
    try {
      const userEmail = message.email;
      const userName = message.name;
      const userMessage = message.messageText;
      const database = firebase.db.collection('contact-us');
      const mssg = {
        userEmail,
        userName,
        userMessage
      };
      const response = await database.add(mssg);
      swal('Success!', 'Your message has been send.', 'success');
      handleFormReset();
      return response;
    } catch (error) {
      swal('Oops!', 'Something went wrong.', 'error');
    }
  };

  const autoResizeTextArea = e => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleFormReset = () => {
    setMessage({
      email: '',
      name: '',
      messageText: ''
    });
  };

  const { email, name, messageText } = message;
  return (
    <Wrapper>
      <h1>Contact Us</h1>
      <Form onSubmit={sendMessage}>
        <StyledInput
          placeholder='Enter your e-mail address'
          name='email'
          type='email'
          onChange={handleMessage}
          value={email}
        />
        <StyledInput
          placeholder='Enter your name'
          name='name'
          type='text'
          value={name}
          onChange={handleMessage}
        />
        <MessageArea
          id='message'
          name='messageText'
          value={messageText}
          onKeyDown={autoResizeTextArea}
          style={{ width: '150%', marginTop: '2rem' }}
          onChange={handleMessage}></MessageArea>
        <label htmlFor='message'>Your message</label>
        <StyledButton>SEND</StyledButton>
      </Form>
    </Wrapper>
  );
};
