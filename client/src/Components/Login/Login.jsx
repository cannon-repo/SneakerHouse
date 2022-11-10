import React from "react";
import "./Login.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {setUser} from "../../Redux/UserSlice";
import useCheckUser from "../../Hooks/CheckUser";

const Login = () => {

  useCheckUser();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [disabled, setDisabled] = useState(Boolean(false));

  useEffect(() => {
    if(email.length == 0 || pwd.length < 6) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [email, pwd]);

  const clickHandler = (e) => {
    e.preventDefault();
    fetch('api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({Email: email, Pwd: pwd})
    }).then((res) => res.json()).then((data) => {
      if(data.success) {
        localStorage.setItem('loggedin', true);
        dispatch(setUser({Name: data.user.Name, Email: data.user.Email, Phone: data.user.Phone}));
        navigate("/");
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
          <button onClick={(e) => clickHandler(e)} className="RegBtn" disabled={disabled} style={bgStyle}>Login</button>
        </form>
        <p className="RegToLogin">Dont have an account? <NavLink end to="/register">Register</NavLink></p>
      </div>
    </div>
  );
};

export default React.memo(Login);
