import React, { useState } from 'react';
import './style.css';
import { admin_actions } from '../../api/admin_actions';
import swal from 'sweetalert';
import {
  Wrapper,
  AdminPageButton,
  AdminActionsWrapper,
  AddAdminForm
} from './styles';
import { Modal } from '../../components/Modal/modal';
import { ButtonClose } from '../../components/Modal/styles-modal';
import { StyledButton } from '../../components/StyledButton';
import { StyledInput } from '../../components/StyledInput';
import { LoadPage } from '../LoadPage/loadpage';

export const AdminPage = () => {
  const [adminEmail, setAdminEmail] = useState('');
  const [userID, setUserID] = useState('');
  const [users, setUsers] = useState([]);
  const [updateUserCredentials, setUpdateUserCredentials] = useState({
    displayName: '',
    email: ''
  });
  const [loading, setLoading] = useState({
    loadRequest: false,
    loadComponent: false,
    loadUserUpdateForms: false,
    showAdmins: false,
    openModal: false,
    hideButton: false
  });

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
    setLoading({
      ...loading,
      loadUserUpdateForms: true
    });
    return response;
  };

  const getAllUsers = async () => {
    try {
      const response = await admin_actions('listUsers');
      const users = response.data.result;
      setUsers(users);
      setLoading({
        loadComponent: false,
        loadRequest: true,
        hideButton: true
      });
      return response;
    } catch (error) {
      swal('Oops!', 'Something went wrong!', 'error', {
        text: error
      });
    }
  };

  const addAdmin = async e => {
    e.preventDefault();
    e.target.reset();
    try {
      const response = await admin_actions('addAdminRole', {
        email: adminEmail
      });
      setLoading({
        ...loading,
        showAdmins: false
      });
      const message = response.data.message;
      swal({
        text: message,
        icon: 'success'
      });
      return response;
    } catch (error) {
      swal('Oops!', 'Something went wrong!', 'error');
    }
  };

  const deleteUsers = async e => {
    e.preventDefault();
    try {
      const response = await admin_actions('deleteUser', { uid: userID });
      setLoading({
        ...loading,
        openModal: false
      });
      const message = response.data.message;
      swal(`User with ID ${message} `, { icon: 'success' });
      getAllUsers();
      return response;
    } catch (error) {
      swal('Oops!', 'Something went wrong!', 'error');
    }
  };

  const updateUser = async e => {
    e.preventDefault();
    try {
      const { displayName, email } = updateUserCredentials;
      const response = await admin_actions('updateUsers', {
        uid: userID,
        displayName: displayName,
        email: email
      });
      setLoading({
        ...loading,
        openModal: false
      });
      const message = response.data.message;
      swal(`User with id ${message}`, {
        icon: 'success'
      });
      getAllUsers();
      return response;
    } catch (error) {
      swal('Oops!', 'Please check if email already exist.', 'error');
    }
  };

  const handleAdmin = e => setAdminEmail(e.target.value);

  const handleUserID = event => setUserID(event.target.value);

  const handleUserCredentials = e => {
    setUpdateUserCredentials({
      ...updateUserCredentials,
      [e.target.name]: e.target.value
    });
  };

  const { displayName, email } = updateUserCredentials;
  const {
    loadComponent,
    loadRequest,
    loadUserUpdateForms,
    showAdmins,
    openModal,
    hideButton
  } = loading;

  return (
    <div>
      <Wrapper>
        <AdminActionsWrapper>
          <AdminPageButton
            onClick={() =>
              setLoading({
                showAdmins: true
              })
            }
          >
            Add Admin
          </AdminPageButton>
          <AdminPageButton
            style={{ display: hideButton ? 'none' : 'inline-block' }}
            onClick={() => {
              setLoading({
                ...loading,
                loadComponent: true
              });
              getAllUsers();
            }}
          >
            Get all users
          </AdminPageButton>
        </AdminActionsWrapper>
        <AddAdminForm
          onSubmit={addAdmin}
          style={{ display: showAdmins ? 'flex' : 'none' }}
        >
          <StyledInput
            type='text'
            onChange={handleAdmin}
            value={adminEmail}
            placeholder='Enter email address'
          />
          <div style={{ fontSize: '1.3rem' }}>
            *Please make sure you entering correct e-mail address
          </div>
          <StyledButton>MAKE ADMIN</StyledButton>
        </AddAdminForm>
        <div>
          {loadRequest ? (
            <table className='usersTable'>
              <tbody style={{ textAlign: 'center' }}>
                <tr>
                  <th>User ID</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Photo URL</th>
                  <th>Action</th>
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
                            setLoading({
                              ...loading,
                              openModal: true
                            });
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
          ) : (
            <LoadPage load={loadComponent} />
          )}
        </div>
      </Wrapper>
      <Modal openModal={openModal}>
        Actions for user with ID: <h3>{userID}</h3>
        <ButtonClose
          onClick={() => {
            setLoading({
              ...loading,
              openModal: false,
              loadUserUpdateForms: false
            });
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
            <StyledButton
              onClick={() =>
                setLoading({
                  ...loading,
                  loadUserUpdateForms: false
                })
              }
            >
              SAVE
            </StyledButton>
          </form>
        </div>
      </Modal>
    </div>
  );
};
