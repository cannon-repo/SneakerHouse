import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Logo ptr"><NavLink style={{textDecoration: 'none', textDecorationColor: '#fff', color: '#fff'}} end to="/">SneakHouse</NavLink></div>
      <div className="NavItemsWrap">
        <p className="NavItems">Men</p>
        <p className="NavItems">Women</p>
        <p className="NavItems">Kids</p>
        <p className="NavItems"><NavLink style={{textDecoration: 'none', textDecorationColor: 'rgb(200,200,200)', color: 'rgb(200,200,200)'}} end to="/contact">Contact</NavLink></p>
      </div>
      <div className="NavActions">
        <span className="LoginBtn ptr"><NavLink style={{textDecoration: 'none', textDecorationColor: '#000', color: '#000'}} end to="/login">Login</NavLink></span>
      </div>
    </div>
  );
};

export default NavBar;
