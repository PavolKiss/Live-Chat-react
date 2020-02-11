import React, { useState, useEffect } from 'react';
import {
  Navigation,
  Wrapper,
  List,
  ListItem,
  StyledLink
} from './styles-header';
import * as firebase from '../../firebase';
import swal from 'sweetalert';

const logout = () => {
  try {
    const response = firebase.auth.signOut();
    swal('You are logged out.', { icon: 'info' });
    return response;
  } catch (error) {
    swal('Oops!', 'Something went wrong!', 'error');
  }
};

const mainLinks = {
  home: { to: '/', title: 'Home' },
  chat: { to: 'chat/general', title: 'Home' },
  contact: { to: 'contact', title: 'Contact Us' },
  signin: { to: 'signin', title: 'Sign In' },
  adminpanel: { to: 'adminpanel', title: 'Admin Panel' },
  account: { to: 'account', title: 'Account' },
  signout: { to: '/', title: 'Sign Out', onClick: logout }
};

const defaultLinks = [mainLinks.home, mainLinks.contact, mainLinks.signin];

export const Header = () => {
  const [links, setLinks] = useState(defaultLinks);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(async user => {
      const isAdmin = user
        ? (await user.getIdTokenResult()).claims.admin
        : false;

      if (user) {
        if (isAdmin) {
          setLinks([
            mainLinks.chat,
            mainLinks.adminpanel,
            mainLinks.contact,
            mainLinks.account,
            mainLinks.signout
          ]);
        } else {
          setLinks([
            mainLinks.chat,
            mainLinks.contact,
            mainLinks.account,
            mainLinks.signout
          ]);
        }
      } else {
        setLinks(defaultLinks);
      }
    });
    return () => unsubscribe();
  }, []);

  const linkNodes = links.map(link => {
    const { title, onClick, to } = link;
    return (
      <ListItem key={title}>
        <StyledLink onClick={onClick} to={to}>
          {title}
        </StyledLink>
      </ListItem>
    );
  });

  return (
    <header>
      <Navigation>
        <Wrapper>
          <List>{linkNodes}</List>
        </Wrapper>
      </Navigation>
    </header>
  );
};
