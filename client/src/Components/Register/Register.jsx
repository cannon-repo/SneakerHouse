import React from "react";
import "./Register.css";
import { BsPersonFill, BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [disabled, setDisabled] = useState(Boolean(true));

  useEffect(() => {
    if(name.length == 0 || phone.length != 10 || pwd.length < 6 || email.length == 0) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [name, phone, email, pwd]);

  const clickHandler = (e) => {
    e.preventDefault();
    fetch('/api/user/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({Name: name, Phone: phone, Email: email, Pwd: pwd})
    }).then((res) => res.json()).then((data) => {
      if(data.success) {
          navigate("/login");
      } else {
        alert(data.msg);
      }
    }).catch((err) => console.log(err));
  }

  const bgStyle = {
    backgroundColor: disabled ? "gainsboro" : "orange"
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
              placeholder="Phone(10 digit number)"
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
              placeholder="Password (min 6 length)"
            />
          </div>
          <button onClick={(e) => clickHandler(e)} className="RegBtn" style={bgStyle} disabled={disabled}>Register</button>
        </form>
        <p className="RegToLogin">Already have an account? <NavLink end to="/login">Login</NavLink></p>
      </div>
    </div>
  );
};

export default React.memo(Register);
