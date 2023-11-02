import React, { useState } from 'react';
import Logo from '../images/logo1.jpg';


export default Header = () => {
    const[loginButton, setloginButton] = useState("Login");
    return (
        <div className="container">
            <img id="head-img" src={Logo} alt='logo' />

            <div className="nav-bar">
                <ul className="navLinks">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><button className="login-btn" onClick={ () =>
                       loginButton==="Login" ? setloginButton("Logout") : setloginButton("Login")
                    }>{loginButton}</button></li>
                </ul>
                
            </div>
        </div>
    );
}