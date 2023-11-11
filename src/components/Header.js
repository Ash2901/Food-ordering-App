import React, { useState } from "react";
import Logo from "../images/logo1.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default Header = () => {
  const [loginButton, setloginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="container">
      <img id="head-img" src={Logo} alt="logo" />

      <div className="nav-bar">
        <ul className="navLinks">
          <li>
            Online Status: {(onlineStatus ? "✅" : "🔴")}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() =>
                loginButton === "Login"
                  ? setloginButton("Logout")
                  : setloginButton("Login")
              }
            >
              {loginButton}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
