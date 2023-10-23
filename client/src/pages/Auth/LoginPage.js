import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/userSlice";
import AuthPhoto from "../../images/auth-main.jpg";
import HomePage from "../HomePage";
import "./Auth.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  return (
    <>
      {currentUser ? (
        <HomePage />
      ) : (
        <div className="container-auth py-8">
          <img src={AuthPhoto} alt="image" />
          <div></div>
          <div className="inputs">
            <div className="row text-center">
              <h1 className="font-black">Login</h1>
            </div>
            <div className="email_cont">
              <input
                type="text"
                placeholder="email or username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="pass_cont">
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleLogin()}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
