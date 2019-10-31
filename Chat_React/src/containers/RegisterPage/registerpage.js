import React, { useState } from "react";
import { signUp } from "../../api/auth";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = e => setEmail(e.target.value);

  const handlePassword = e => setPassword(e.target.value);

  const handleName = e => setName(e.target.value);

  const signup = async e => {
    e.preventDefault();
    const response = await signUp(email, password, name);
    console.log(response);
  };

  return (
    <form onSubmit={signup}>
      <div>
        <div>
          <input type="text" placeholder="name" onChange={handleName} />
        </div>
        <div>
          <input type="email" placeholder="email" onChange={handleEmail} />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            onChange={handlePassword}
          />
        </div>
        <div>
          <button>Register</button>
        </div>
      </div>
    </form>
  );
};
