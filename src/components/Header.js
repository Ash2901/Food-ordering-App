import React from 'react';
import Logo from '../images/logo1.jpg';


export default Header = () => {
    return (
        <div className="container">
            <img id="head-img" src={Logo} alt='logo' />

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