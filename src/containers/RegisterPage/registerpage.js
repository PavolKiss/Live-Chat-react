import React, { useState } from 'react';
import { signUp } from '../../api/auth';
import swal from 'sweetalert';
import { StyledInput } from '../../components/StyledInput';
import { StyledButton } from '../../components/StyledButton';
import { Wrapper } from '../LoginPage/styles';

export const RegisterPage = () => {
  const [userCrendetials, setUserCredentials] = useState({
    email: '',
    password: '',
    userName: ''
  });

  const handleUserCredentials = e => {
    setUserCredentials({
      ...userCrendetials,
      [e.target.name]: e.target.value
    });
  };

  const signup = async e => {
    e.preventDefault();
    try {
      const { email, password, userName } = userCrendetials;
      const response = await signUp(email, password, userName);
      swal('Registration was successfull!', 'Now you are logged in', 'success');
      return response;
    } catch (error) {
      const message = error.message;
      swal('Registration was failed!', {
        text: message,
        icon: 'warning'
      });
    }
  };

  const { email, password, userName } = userCrendetials;
  return (
    <form onSubmit={signup}>
      <Wrapper>
        <h1>Sign Up</h1>
        <div>
          <StyledInput
            type='text'
            name='userName'
            value={userName}
            placeholder='Name'
            onChange={handleUserCredentials}
          />
        </div>
        <div>
          <StyledInput
            type='email'
            name='email'
            value={email}
            placeholder='Email'
            onChange={handleUserCredentials}
          />
        </div>
        <div>
          <StyledInput
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={handleUserCredentials}
          />
        </div>
        <div>
          <StyledButton>Register</StyledButton>
        </div>
      </Wrapper>
    </form>
  );
};
