import React, { useState } from "react";
import { signin } from "../../api/auth";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = e => setEmail(e.target.value);

  const handlePassword = e => setPassword(e.target.value);

  const signIn = async e => {
    e.preventDefault();
    const response = await signin(email, password);
    console.log(response);
  };

  return (
    <form onSubmit={signIn}>
      <div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleEmail}
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handlePassword}
          ></input>
        </div>
        <button>Sign In</button>
      </div>
    </form>
  );
};
