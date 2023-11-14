import React from 'react';
import { CDN_URL } from '../utils/constant';
// import Menu_1 from '../images/menu-1.jpg';

export default Menu = (props) => {
    const { resData } = props; //always key will be passed here
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, slaString} = resData?.info;
    return (
        <div>
            <div className="w-[220px] m-6 bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
                <img src={CDN_URL+cloudinaryImageId} alt = "first item" className="rounded-lg"></img>
                <h2 className="text-lg font-bold my-2">{name}</h2>
                <h4>{cuisines.join(", ")}</h4> 
                <h4>{avgRating} ⭐</h4>
                {/* <h4>{resData.data.costForTwoString}</h4>  */}
                {/* <h4>₹{costForTwo/100} FOR TWO</h4> */}
                <h4>{costForTwo}</h4>
                <h4>{slaString}</h4> 
            </div>
        </div>
    );
}