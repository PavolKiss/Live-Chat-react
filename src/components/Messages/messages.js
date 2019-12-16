import React, { useState, useEffect } from "react";
import * as firebase from "../../firebase/index";
import * as firebaseApp from "firebase/app";
import { formatDistanceToNow } from "date-fns";
import {
  StyledUl,
  StyledLi,
  Avatar,
  Username,
  Message,
  Date,
  MessageArea,
  Room,
  Wrapper,
  SubmitButton
} from "./styles";

export const Messages = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const chat = useEffect(() => {
    const onSnap = async () => {
      const newArray = [];
      const response = await firebase.db
        .collection("live-chat")
        .where("room", "==", chatId)
        .orderBy("created_at")
        .onSnapshot(snapshot => {
          snapshot.docChanges().map(change => {
            if (change.type === "added") {
              newArray.push(change.doc.data());
            }
            newArray.concat(messages);
          });
          setMessages(newArray);
          setLoading(false);
        });
      return response;
    };
    onSnap();
  }, [sendMessage, chatId]);

  useEffect(() => {
    const getData = async () => {
      const response = await firebase.db
        .collection("live-chat")
        .where("room", "==", chatId)
        .orderBy("created_at")
        .get();
      const array = [];
      response.forEach(message => {
        array.push(message.data());
      });
      setMessages(array);
      setLoading(false);
      return response;
    };
    getData();
  }, [chatId, chat]);

  const displayMessages = messages.map(message => {
    const when = formatDistanceToNow(message.created_at.toDate());
    return (
      <div key={message.created_at}>
        <StyledLi>
          <Username>
            <Avatar src={message.avatarURL} /> {message.username}
          </Username>
          <Message>{message.message}</Message>
          <Date>{when}</Date>
        </StyledLi>
      </div>
    );
  });

  const handleMessage = e => setMessage(e.target.value);

  const sendMessage = async () => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        const username = user.displayName;
        const avatarURL = user.photoURL;
        const database = firebase.db.collection("live-chat");
        const now = new window.Date();
        const mssg = {
          message,
          username,
          avatarURL,
          room: chatId,
          created_at: firebaseApp.firestore.Timestamp.fromDate(now)
        };
        const response = database.add(mssg);
        return response;
      }
    });
    return () => unsubscribe();
  };

  return loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <Wrapper>
        <Room to="/chat/general">General</Room>
        <Room to="/chat/gaming">Gaming</Room>
        <Room to="/chat/cars">Cars</Room>
        <Room to="/chat/music">Music</Room>
      </Wrapper>

      <StyledUl>{displayMessages}</StyledUl>
      <div>
        <MessageArea id="area" onChange={handleMessage}></MessageArea>
        <label htmlFor="area">Your Message</label>
      </div>
      <SubmitButton onClick={sendMessage}>Submit</SubmitButton>
    </div>
  );
};
