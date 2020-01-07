import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import './style.css';
import { StyledInput } from '../../components/StyledInput';
import { StyledButton } from '../../components/StyledButton';
import { Wrapper } from './styles';

export const AdminPage = () => {
  const [adminEmail, setAdminEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdmins, setShowAdmins] = useState(false);

  const getAllUsers = async () => {
    try {
      const callListOfUsers = firebase.functions().httpsCallable('listUsers');
      const response = await callListOfUsers();
      setUsers(response.data.result);
      setLoading(false);
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

  const handleAdmin = e => setAdminEmail(e.target.value);

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
            <StyledInput
              type='text'
              onChange={handleAdmin}
              value={adminEmail}
            />
            <button>MAKE ADMIN</button>
          </form>
        </div>
        <div>
          <table style={{ display: loading ? 'none' : 'flex', border: '1px' }}>
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
                      <button>Manage User</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Wrapper>
    </div>
  );
};
