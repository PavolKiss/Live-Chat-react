import React, { useState } from 'react';
import './style.css';
import { admin_actions } from '../../api/admin_actions';
import { Wrapper, AdminPageButton, AdminActionsWrapper } from './styles';
import { Modal } from '../../components/Modal/modal';
import { ButtonClose } from '../../components/Modal/styles-modal';
import { StyledButton } from '../../components/StyledButton';
import { StyledInput } from '../../components/StyledInput';
import { Popup } from '../../components/Popup/popup';

export const AdminPage = () => {
  const [adminEmail, setAdminEmail] = useState('');
  const [userID, setUserID] = useState('');
  const [users, setUsers] = useState([]);
  const [updateUserCredentials, setUpdateUserCredentials] = useState({
    displayName: '',
    email: ''
  });
  const [popUpSucessMessage, setpopUpSucessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAdmins, setShowAdmins] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loadUserUpdateForms, setLoadUserUpdateForms] = useState(false);

  const findUserByID = async () => {
    const response = await admin_actions('findUsersByUID', {
      uid: userID
    });
    const { displayName, email } = response.data;
    setUpdateUserCredentials({
      ...updateUserCredentials,
      displayName: displayName,
      email: email
    });
    setLoadUserUpdateForms(true);
    return response;
  };

  const getAllUsers = async () => {
    try {
      const response = await admin_actions('listUsers');
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
      const response = await admin_actions('addAdminRole', {
        email: adminEmail
      });
      setShowAdmins(false);
      setpopUpSucessMessage(response.data.message);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUsers = async e => {
    e.preventDefault();
    try {
      const response = await admin_actions('deleteUser', { uid: userID });
      setOpenModal(false);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async e => {
    e.preventDefault();
    try {
      const response = await admin_actions('updateUsers', {
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

  const { displayName, email } = updateUserCredentials;

  return (
    <div>
      <Wrapper>
        <AdminActionsWrapper>
          <AdminPageButton onClick={() => setShowAdmins(true)}>
            Manage Admins
          </AdminPageButton>
          <AdminPageButton onClick={getAllUsers}>Get all users</AdminPageButton>
        </AdminActionsWrapper>
        <div>
          <form
            onSubmit={addAdmin}
            style={{ display: showAdmins ? 'flex' : 'none' }}
          >
            <input
              type='text'
              onChange={handleAdmin}
              value={adminEmail}
              required
            />
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
        <StyledButton onClick={() => findUserByID()}>Update User</StyledButton>
        <div style={{ display: loadUserUpdateForms ? 'block' : 'none' }}>
          <form onSubmit={updateUser}>
            <StyledInput
              type='text'
              name='displayName'
              onChange={handleUserCredentials}
              value={displayName}
              placeholder='User Name'
            />
            <StyledInput
              type='email'
              name='email'
              onChange={handleUserCredentials}
              value={email}
              placeholder='Email Address'
            />
            <StyledButton onClick={() => setLoadUserUpdateForms(false)}>
              SAVE
            </StyledButton>
          </form>
        </div>
      </Modal>
      <Popup
        style={{ display: popUpSucessMessage ? 'block' : 'none' }}
        sucessChildren={popUpSucessMessage}
      />
    </div>
  );
};
