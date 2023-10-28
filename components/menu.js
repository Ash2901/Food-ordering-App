import React from 'react';
import Menu_1 from '../images/menu-1.jpg';

export default Menu = () => {
    return (
        <div>
            <div className="res-card">
                <img src={Menu_1} alt = "first item"></img>
                <h2>Bakingo</h2>
                <h4>Bakery, Desserts</h4>
                <h4>4.3 stars</h4>
                <h4>25 mins</h4>
            </div>
        </div>
    );
}