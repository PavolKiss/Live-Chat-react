import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Homepage } from "./src/containers/HomePage/homepage";
import { Header } from "./src/components/Header/header";
import { Router } from "@reach/router";
import { LoginPage } from "./src/containers/LoginPage/loginpage";
import { RegisterPage } from "./src/containers/RegisterPage/registerpage";
import { AdminPage } from "./src/containers/AdminPage/adminpage";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Homepage path="/" />
        <LoginPage path="signin" />
        <RegisterPage path="signup" />
        <AdminPage path="adminpanel" />
      </Router>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
