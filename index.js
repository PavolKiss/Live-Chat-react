import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { Homepage } from './src/containers/HomePage/homepage';
import { Header } from './src/components/Header/header';
import { LoginPage } from './src/containers/LoginPage/loginpage';
import { RegisterPage } from './src/containers/RegisterPage/registerpage';
import { AdminPage } from './src/containers/AdminPage/adminpage';
import { ChatPage } from './src/containers/ChatPage/chatpage';
import { AccountPage } from './src/containers/AccountPage/accountpage';
import { ContactUs } from './src/containers/ContactUsPage/contactUs';
import { LostPasswordPage } from './src/containers/LostPasswordPage/lostpasswordpage';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Homepage path='/' />
        <ChatPage path='chat/:chatId' />
        <LoginPage path='signin' />
        <RegisterPage path='signup' />
        <AdminPage path='adminpanel' />
        <AccountPage path='account' />
        <ContactUs path='contact' />
        <LostPasswordPage path='lostpassword' />
      </Router>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// prevent for refreshing page
if (module.hot) {
  module.hot.accept();
}
