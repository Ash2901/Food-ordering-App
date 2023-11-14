import React, { useState } from "react";
import Logo from "../images/logo1.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default Header = () => {
  const [loginButton, setloginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex p-4 m-4 bg-yellow-50 justify-between">
      <img id="head-img" src={Logo} alt="logo" className="w-32" />

      <div className="flex justify-evenly">
        <ul className="flex items-center p-4">
          <li className="m-4">
            Online Status: {(onlineStatus ? "✅" : "🔴")}
          </li>
          <li className="m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4">
            <Link to="/about">About</Link>
          </li>
          <li className="m-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-4">Cart</li>
          <li className="m-4">
            <button
              className="border-2 border-solid border-black bg-gray-100 rounded-lg p-2"
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
