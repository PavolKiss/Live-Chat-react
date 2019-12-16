import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import platform from "platform";
import { Router } from "@reach/router";
import { Homepage } from "./src/containers/HomePage/homepage";
import { Header } from "./src/components/Header/header";
import { LoginPage } from "./src/containers/LoginPage/loginpage";
import { RegisterPage } from "./src/containers/RegisterPage/registerpage";
import { AdminPage } from "./src/containers/AdminPage/adminpage";
import { ChatPage } from "./src/containers/ChatPage/chatpage";
import { AccountPage } from "./src/containers/AccountPage/accountpage";
import { ContactUs } from "./src/containers/ContactUsPage/contactUs";

const App = () => {
  const selectors = [
    {
      pattern: /\\"/g,
      replacement: "&quot;"
    },
    {
      pattern: /&/g,
      replacement: "&amp;"
    },
    {
      pattern: /</g,
      replacement: "&lt;"
    },
    {
      pattern: />/g,
      replacement: "&gt;"
    },
    {
      pattern: /[\t\n\r]/g,
      replacement: " "
    },
    {
      pattern: /\s{2,}/g,
      replacement: " "
    }
  ];
  /**
   * Encodes strings in text nodes.
   * @param {Node} node - node to check.
   * @returns {Node} - node with encoded special character if it has type 'text', input node otherwise.
   */
  module.exports = node =>
    isText(node)
      ? Object.assign({}, node, {
          data: selectors.reduce(
            (str, selector) =>
              str.replace(selector.pattern, selector.replacement),
            node.data
          )
        })
      : node;

  return (
    <div>
      <Header />
      <Router>
        <Homepage path="/" />
        <ChatPage path="chat/:chatId" />
        <LoginPage path="signin" />
        <RegisterPage path="signup" />
        <AdminPage path="adminpanel" />
        <AccountPage path="account" />
        <ContactUs path="contact" />
      </Router>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// prevent for refreshing page
if (module.hot) {
  module.hot.accept();
}
