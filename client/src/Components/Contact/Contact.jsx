import React from "react";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ContactWrap">
      <div className="ContactInfo">
        <div className="ContactToFAQ">
          <p>Have Something To Say?</p>
          <div className="RightDir"></div>
        </div>
        <div className="SwitchToFAQ">
          <NavLink to="/faq" style={{textDecoration: 'none', textDecorationColor: '#fff', color: '#fff'}}>Have a look to <b>FAQs</b></NavLink>
        </div>
      </div>
      <div className="Contact">
        <p className="ContactBanner">Contact Us</p>
        <form className="ContactForm">
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
              <BiMessageAltDetail />
            </span>
            <textarea
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Your Message"
              rows={4}
            />
          </div>
          <button onClick={(e) => clickHandler(e)} className="ContactBtn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
