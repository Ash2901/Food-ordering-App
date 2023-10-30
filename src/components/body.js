import React from 'react';
import Menu from '../components/menu';
import resList from './data';

export default Body = () => {
   
    return (
        <>
            <h1>Search</h1>
            <div className = "res-container">
                {
                    resList.map((restaurant) => (
                        <Menu key = {restaurant.data.id} resData = {restaurant}/>
                        //key can differenciate between objects.
                    ))
                }
            </div>  
        </>
    );
}