import React from 'react';
import Logo from '../images/logo1.jpg';
import "../styles.css"

export default Header => {
    return (
        <div className="container">
            <img src={Logo} alt='logo' />

            <div className="nav-bar">
                <ul className="navLinks">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}