import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import './style.css';
import { Wrapper } from './styles';
import { Modal } from '../../components/Modal/modal';
import { ButtonClose } from '../../components/Modal/styles-modal';
import { StyledButton } from '../../components/StyledButton';
import { StyledInput } from '../../components/StyledInput';

export const AdminPage = () => {
  const [adminEmail, setAdminEmail] = useState('');
  const [userID, setUserID] = useState('');
  const [users, setUsers] = useState([]);
  const [updateUserCredentials, setUpdateUserCredentials] = useState({
    displayName: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [showAdmins, setShowAdmins] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loadUserUpdateForms, setLoadUserUpdateForms] = useState(false);

  const getAllUsers = async () => {
    try {
      const callListOfUsers = firebase.functions().httpsCallable('listUsers');
      const response = await callListOfUsers();
      setUsers(response.data.result);
      setLoading(true);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const addAdmin = async e => {
    e.preventDefault();
    try {
      const addAdminRole = firebase.functions().httpsCallable('addAdminRole');
      const response = await addAdminRole({ email: adminEmail });
      console.log(response);
      setShowAdmins(false);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUsers = async e => {
    e.preventDefault();
    try {
      const deleteUser = firebase.functions().httpsCallable('deleteUser');
      const response = await deleteUser({ uid: userID });
      console.log(response);
      setOpenModal(false);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async e => {
    e.preventDefault();
    try {
      const updateUsers = firebase.functions().httpsCallable('updateUsers');
      const response = await updateUsers({
        uid: userID,
        displayName: updateUserCredentials.displayName
      });
      setOpenModal(false);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdmin = e => setAdminEmail(e.target.value);

  const handleUserID = event => setUserID(event.target.value);

  const handleUserCredentials = e => {
    const value = e.target.value;
    setUpdateUserCredentials({
      ...updateUserCredentials,
      [e.target.name]: value
    });
  };

  // updateUser() {
  //   const updateUsers = functions.httpsCallable("updateUsers");
  //   updateUsers({
  //     uid: value,
  //     displayName: displayName,
  //     email: email,
  //     photoURL: photoURL
  //   })
  //     .then(result => {
  //       console.log(result);
  //     })
  //     .catch(err => console.log(err));
  // }

  const { displayName, email } = updateUserCredentials;

  console.log(displayName);

  return (
    <div>
      <Wrapper>
        <button onClick={() => setShowAdmins(true)}>Manage Admins</button>
        <button onClick={getAllUsers}>Get all users</button>
        <div>
          <form
            onSubmit={addAdmin}
            style={{ display: showAdmins ? 'flex' : 'none' }}
          >
            <input type='text' onChange={handleAdmin} value={adminEmail} />
            <button>MAKE ADMIN</button>
          </form>
        </div>
        <div>
          <table style={{ display: loading ? 'flex' : 'none', border: '1px' }}>
            <tbody style={{ textAlign: 'center' }}>
              <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Photo URL</th>
              </tr>

              {users.map(user => {
                const { email, uid, displayName, photoURL } = user;
                return (
                  <tr key={uid}>
                    <td>{uid}</td>
                    <td>{email}</td>
                    <td>{displayName}</td>
                    <td>{photoURL}</td>
                    <td>
                      <button
                        value={uid}
                        onClick={() => {
                          handleUserID(event);
                          setOpenModal(true);
                        }}
                      >
                        Manage User
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Wrapper>
      <Modal openModal={openModal}>
        Actions for user with ID: <h3>{userID}</h3>
        <ButtonClose
          onClick={() => {
            setOpenModal(false);
            setLoadUserUpdateForms(false);
          }}
        >
          ×
        </ButtonClose>
        <StyledButton onClick={deleteUsers}>Delete User</StyledButton>
        <StyledButton onClick={() => setLoadUserUpdateForms(true)}>
          Update User
        </StyledButton>
        <div style={{ display: loadUserUpdateForms ? 'block' : 'none' }}>
          <form onSubmit={updateUser}>
            <StyledInput
              type='text'
              name='displayName'
              onChange={handleUserCredentials}
              value={displayName}
              placeholder='User Name'
            />
            {/* <StyledInput
              type='email'
              name='email'
              onChange={handleUserCredentials}
              value={email}
              placeholder='Email Address'
            /> */}
            <StyledButton>SAVE</StyledButton>
          </form>
        </div>
      </Modal>
    </div>
  );
};
