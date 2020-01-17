import React, { useState, useEffect } from 'react';
import * as firebase from '../../firebase/index';
import {
  AccountWrapper,
  Username,
  Email,
  UserAvatar,
  Admin,
  TextWrapper,
  ChangePasswordWrapper,
  SetPassOrAvatarWrapper,
  ChooseAvatarWrapper,
  StyledLabel
} from './styles';
import { StyledInput } from '../../components/StyledInput';
import { StyledButton } from '../../components/StyledButton';
import { Modal } from '../../components/Modal/modal';
import {
  ModalWrapper,
  ButtonClose,
  ContentWrapper
} from '../../components/Modal/styles-modal';

export const AccountPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    avatar: '',
    isAdmin: false
  });

  const [password, setPassword] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState(null);
  const [progressBar, setProgressBar] = useState(0);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(async user => {
      const isAdmin = user
        ? (await user.getIdTokenResult()).claims.admin
        : false;

      if (user) {
        if (isAdmin) {
          setUserCredentials({
            username: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            isAdmin: true
          });
        } else {
          setUserCredentials({
            username: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            isAdmin: false
          });
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleUsername = e =>
    setUserCredentials({ ...userCredentials, username: e.target.value });
  const handleEmail = e =>
    setUserCredentials({ ...userCredentials, email: e.target.value });
  const handlePassword = e => setPassword(e.target.value);

  const handleImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage(image);
      setDisabled(false);
    }
  };

  const handleUpload = () => {
    const metadata = {
      contentType: 'image/jpeg'
    };
    const name = Date.now();
    const user = firebase.auth.currentUser;
    const uploadTask = firebase.storageRef
      .child(`userAvatar/${name}`)
      .put(image, metadata);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressBar(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        firebase.storageRef
          .child(`userAvatar/${name}`)
          .getDownloadURL()
          .then(url => {
            user.updateProfile({ photoURL: url });
            setUserCredentials({ ...userCredentials, avatar: url });
          });
      }
    );
  };

  const { username, email, avatar, isAdmin } = userCredentials;

  const userUpdateProfile = async e => {
    e.preventDefault();
    const user = firebase.auth.currentUser;

    const response = await user.updateProfile({
      displayName: username,
      email: email
    });
    return response;
  };

  const changePassword = async e => {
    e.preventDefault();
    e.target.reset();
    const user = firebase.auth.currentUser;
    const response = await user.updatePassword(password);
    setOpenModal(false);
    return response;
  };

  return (
    <AccountWrapper>
      <h1>Account Details</h1>
      <Admin>{isAdmin ? 'You are Admin' : ''}</Admin>
      <div>
        <StyledLabel htmlFor='file-input'>
          <UserAvatar src={avatar} />
          <ChooseAvatarWrapper>Change Avatar</ChooseAvatarWrapper>
          <div>
            <progress hidden={disabled} value={progressBar} max='100'>
              0%
            </progress>
          </div>
          <button onClick={handleUpload} hidden={disabled} disabled={disabled}>
            Save img
          </button>
        </StyledLabel>
        <input
          style={{ display: 'none' }}
          id='file-input'
          type='file'
          onChange={handleImage}
        />
      </div>

      <form style={{ marginTop: 15 }} onSubmit={userUpdateProfile}>
        <Email>
          <StyledInput
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={handleEmail}
          />
        </Email>
        <Username>
          <StyledInput
            type='text'
            placeholder='User Name'
            value={username}
            onChange={handleUsername}
          />
        </Username>
        <SetPassOrAvatarWrapper>
          <div>or</div>
          <ChangePasswordWrapper onClick={() => setOpenModal(true)}>
            Change Password
          </ChangePasswordWrapper>
        </SetPassOrAvatarWrapper>
        <StyledButton>SAVE</StyledButton>
      </form>
      <TextWrapper>
        <Modal openModal={openModal}>
          <ButtonClose onClick={() => setOpenModal(false)}>×</ButtonClose>
          <h1>Change Password</h1>
          <form onSubmit={changePassword}>
            <StyledInput type='password' onChange={handlePassword} />
            <StyledButton>SAVE</StyledButton>
          </form>
        </Modal>
      </TextWrapper>
    </AccountWrapper>
  );
};
