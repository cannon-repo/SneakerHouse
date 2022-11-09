import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Logo ptr">SneakHouse</div>
      <div className="NavItemsWrap">
        <p className="NavItems">New</p>
        <p className="NavItems">Men</p>
        <p className="NavItems">Women</p>
        <p className="NavItems">Kids</p>
      </div>
      <div className="NavActions">
        <span className="LoginBtn ptr">Login</span>
      </div>
    </div>
  );
};

export default NavBar;
