import React from "react";
import "./Login.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="RegisterWrap">
      <div className="Register">
        <div className="RegBanner">
          <p>Login Here</p>
        </div>
        <form className="RegForm">
          <div className="InputWrap">
            <span className="InputIcon">
              <AiOutlineMail />
            </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="InputWrap">
            <span className="InputIcon">
              <FaLock />
            </span>
            <input
              onChange={(e) => setPwd(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <button onClick={(e) => clickHandler(e)} className="RegBtn">Login</button>
        </form>
        <p className="RegToLogin">Dont have an account? <NavLink end to="/register">Register</NavLink></p>
      </div>
    </div>
  );
};

export default Login;
