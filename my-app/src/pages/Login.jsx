import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatbot Tutor</span>
        <span className="title">Login</span>
        <form>
          <input
            type="text"
            placeholder="username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};
