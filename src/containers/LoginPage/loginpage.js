import React, { useState } from 'react';
import { signin } from '../../api/auth';
import swal from 'sweetalert';
import {
  Wrapper,
  RegisterAndLostPassWrapper,
  RegisterLink,
  LostPasswordLink
} from './styles';
import { Button } from '../../components/StyledButton/styles';
import { StyledInput } from '../../components/StyledInput';
import { navigate } from '@reach/router';

export const LoginPage = () => {
  const [userCrendetials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const handleUserCredentials = e => {
    setUserCredentials({
      ...userCrendetials,
      [e.target.name]: e.target.value
    });
  };

  const signIn = async e => {
    e.preventDefault();
    try {
      const { email, password } = userCrendetials;
      const response = await signin(email, password);
      navigate('/chat/general');
      return response;
    } catch (error) {
      const message = error.message;
      swal('Login was failed!', {
        text: message,
        icon: 'warning'
      });
    }
  };

  const { email, password } = userCrendetials;
  return (
    <form onSubmit={signIn}>
      <Wrapper>
        <h1>Sign In</h1>
        <div>
          <StyledInput
            type='email'
            name='email'
            value={email}
            onChange={handleUserCredentials}
            placeholder='Email'
          />
        </div>
        <div>
          <StyledInput
            type='password'
            name='password'
            value={password}
            onChange={handleUserCredentials}
            placeholder='Password'
          />
          <RegisterAndLostPassWrapper>
            <RegisterLink to='/signup'>Register now</RegisterLink>
            <LostPasswordLink to='#'>Lost Password</LostPasswordLink>
          </RegisterAndLostPassWrapper>
        </div>
        <Button>Sign In</Button>
      </Wrapper>
    </form>
  );
};
