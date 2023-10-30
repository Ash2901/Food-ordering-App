import React from 'react';
import { CDN_URL } from '../utils/constant';
// import Menu_1 from '../images/menu-1.jpg';

export default Menu = (props) => {
    const { resData } = props; //always key will be passed here
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, slaString} = resData?.data;
    return (
        <div>
            <div className="res-card">
                <img src={CDN_URL+cloudinaryImageId} alt = "first item"></img>
                <h2>{name}</h2>
                <h4>{cuisines.join(", ")}</h4> 
                <h4>{avgRating} ⭐</h4>
                {/* <h4>{resData.data.costForTwoString}</h4>  */}
                <h4>₹{costForTwo/100} FOR TWO</h4>
                <h4>{slaString}</h4> 
            </div>
        </div>
    );
}