import { useEffect, useState } from "react";

const User = ({name, location}) => {
    // useEffect(() => {
    //     timer = setInterval(() => {
    //         console.log("Use effect called");
    //     },1000);
    //useeffect with cleanup code
    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, []);
    return (
        <div className="user-name">
            <h2>Name: {name}</h2>
            <h2>Address: {location}</h2>
            <h3>Contact: ashishkumar.prof@gmail.com</h3>
        </div>
    );
}

export default User;