import React from "react";
import Menu from "../components/menu";
//import resList from "../utils/data";
import { useState, useEffect } from "react";
import search from "../images/search.png";
import Shimmer from "../components/Shimmer";
import {Link} from 'react-router-dom';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json?.data?.cards[2].card.card.gridElements?.infoWithStyle.restaurants);
    setListOfRestaurant(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //Conditional rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="search-bar">
          <input
            className="input-text"
            type="text"
            placeholder="Please search restaurants here!"
            value = {searchText}
            onChange={(e) => { setsearchText(e.target.value)}}
          ></input>
          <img className="search-image" src={search} alt="search-image" 
          onClick={() => {
            console.log(searchText)
            const filteredRestaurant = listOfRestaurant.filter((res) => 
            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurant(filteredRestaurant);
          }  
          }
          />
        </div>
        <button
          className="res-btn"
          onClick={() => {
            const filteredlist = filteredRestaurant.filter(
              (res) => {
                if (res && res?.info && res?.info?.avgRating) { //Optional chaining i.e chaining happens only if object exists
                  return (res.info.avgRating > 4)
                }});
           // console.log(filteredlist);
            setfilteredRestaurant(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          if (restaurant && restaurant?.info && restaurant?.info?.id) {
            return (
              <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}>
                <Menu resData={restaurant} /> 
              </Link>
              // Key can differentiate between objects.
            );
          }
        })}
      </div>
    </>
  );
};

export default Body;
