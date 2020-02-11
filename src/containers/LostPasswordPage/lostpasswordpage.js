import React, { useState, useEffect } from 'react';
import { Modal } from '../../components/Modal/modal';
import { auth } from '../../firebase/index';
import swal from 'sweetalert';
import { ButtonClose } from '../../components/Modal/styles';
import { StyledInput } from '../../components/StyledInput/index';
import { StyledButton } from '../../components/StyledButton/index';

export const LostPasswordPage = ({ closeModal = false }) => {
  const [userEmail, setUserEmail] = useState('');
  const [isClosedModal, setIsClosedModal] = useState(false);

  useEffect(() => {
    setIsClosedModal(closeModal);
  }, [closeModal]);

  const handleUserEmail = e => setUserEmail(e.target.value);

  const resetUserPassword = async e => {
    e.preventDefault();
    try {
      const response = await auth.sendPasswordResetEmail(userEmail);
      swal(
        'Success!',
        `Link for password recovery was send to ${userEmail}`,
        'success'
      );
      setIsClosedModal(false);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  console.log('close modal:', closeModal, 'isClosed:', isClosedModal);

  return (
    <Modal openModal={isClosedModal}>
      <h1>Lost Password</h1>
      <ButtonClose
        onClick={() => {
          setIsClosedModal(false);
        }}>
        ×
      </ButtonClose>
      <form onSubmit={resetUserPassword}>
        <StyledInput
          type='email'
          name='email'
          placeholder='Email Address'
          value={userEmail}
          onChange={handleUserEmail}
        />
        <div>Please enter your email address</div>
        <StyledButton>Send</StyledButton>
      </form>
    </Modal>
  );
};
