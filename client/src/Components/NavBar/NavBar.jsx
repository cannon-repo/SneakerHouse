import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { resetUser } from "../../Redux/UserSlice";
import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userData);


  const logoutHandler = (e) => {
    e.preventDefault();
    fetch("/api/user/logout").then((res) => res.json()).then((data) => {
      if(data.success) {
        localStorage.removeItem('loggedin');
        dispatch(resetUser());
      } else {
        alert(data.msg);
      }
    }).catch((err) => console.log(err));
  }

  return (
    <div className="NavBar">
      <div className="Logo ptr">
        <NavLink
          style={{
            textDecoration: "none",
            textDecorationColor: "#fff",
            color: "#fff",
          }}
          end
          to="/"
        >
          SneakHouse
        </NavLink>
      </div>
      <div className="NavItemsWrap">
        <p className="NavItems">Men</p>
        <p className="NavItems">Women</p>
        <p className="NavItems">Kids</p>
        <p className="NavItems">
          <NavLink
            style={{
              textDecoration: "none",
              textDecorationColor: "rgb(200,200,200)",
              color: "rgb(200,200,200)",
            }}
            end
            to="/contact"
          >
            Contact
          </NavLink>
        </p>
      </div>
      <div className="NavActions">
        {user.hasUser ? (
          <div>
          <span
            style={{
              fontSize: "16px",
              color: "#fff",
              fontFamily: "Quicksand",
              fontWeight: "bolder",
              marginRight: '20px'
            }}
            >
            Heyy,&nbsp;{user.Name}
          </span>
          <span className="LogoutBtn ptr" onClick={logoutHandler}>
              Logout
          </span>
            </div>
        ) : (
          <span className="LoginBtn ptr">
            <NavLink
              style={{
                textDecoration: "none",
                textDecorationColor: "#000",
                color: "#000",
              }}
              end
              to="/login"
            >
              Login
            </NavLink>
          </span>
        )}
      </div>
    </div>
  );
};

export default NavBar;
