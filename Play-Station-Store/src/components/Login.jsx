import HeaderLogo from "../assets/images/HeaderLogo.png";
import React, { useState } from "react";
import "../assets/styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { db, auth, registerUser } from "../firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setnewEmail] = useState("");
  const [password, setnewPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    console.log(email, password);
    console.log(auth);
  };

  const register = (e) => {
    e.preventDefault();
    registerUser(email, password)
      .then((user) => {
        // Executes when succesfully created user with email and password
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="login">
        <div className="loginAll">
          <Link to="/">
            <div className="headerLogo">
              <img src={HeaderLogo} alt="Header Logo" />
            </div>
          </Link>

          <form className="loginForm">
            <label className="loginFormLabel label1">
              Email :
              <input
                type="text"
                name="name"
                value={email}
                onChange={(e) => setnewEmail(e.target.value)}
              />
            </label>
            <label className="loginFormLabel label2">
              Password :
              <input
                type="password"
                name="password"
                vlaue={password}
                onChange={(e) => setnewPassword(e.target.value)}
              />
            </label>
            <Link to="/forgot-password">
              <p>Forgot your password?</p>
            </Link>
            <button type="submit" onClick={signIn}>
              Sign in
            </button>

            <div className="loginFormRegister">
              <p>Don't have an account?</p>
              <Link to="/register">
                <button onClick={register}>Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;