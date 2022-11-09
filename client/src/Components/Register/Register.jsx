import React from "react";
import "./Register.css";
import { BsPersonFill, BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
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
          <p>Register Here</p>
        </div>
        <form className="RegForm">
          <div className="InputWrap">
            <span className="InputIcon">
              <BsPersonFill />
            </span>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="InputWrap">
            <span className="InputIcon">
              <BsPhone />
            </span>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Phone"
            />
          </div>
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
          <button onClick={(e) => clickHandler(e)} className="RegBtn">Register</button>
        </form>
        <p className="RegToLogin">Already have an account? <NavLink end to="/login">Login</NavLink></p>
      </div>
    </div>
  );
};

export default Register;
