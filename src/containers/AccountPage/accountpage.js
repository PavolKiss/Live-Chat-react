import React, { useState, useEffect } from "react";
import * as firebase from "../../firebase/index";
import { AccountWrapper, Username, Email, UserAvatar, Admin } from "./styles";

export const AccountPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    avatar: "",
    isAdmin: false
  });

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

  const { username, email, avatar, isAdmin } = userCredentials;

  return (
    <AccountWrapper>
      <h1>Account Details</h1>
      <Email>
        <b>Logged as</b> {email}
      </Email>
      <Admin>{isAdmin ? "You are Admin" : ""}</Admin>
      <Username>
        <b>Your name is</b> {username}
      </Username>
      <UserAvatar src={avatar} />
    </AccountWrapper>
  );
};
