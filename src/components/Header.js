import React, { useEffect, useState } from "react";
import Logo from "../images/logo1.jpg";
import { Link } from "react-router-dom";

export default Header = () => {
  const [loginButton, setloginButton] = useState("Login");
//   useEffect(() => {
//     console.log("UseEffect Called");
//   }, [loginButton]);
  return (
    <div className="container">
      <img id="head-img" src={Logo} alt="logo" />

      <div className="nav-bar">
        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
