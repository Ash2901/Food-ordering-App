import React from "react";
import Menu from "../components/menu";
//import resList from "../utils/data";
import { useState, useEffect } from "react";
import search from "../images/search.png";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

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
  };
  return (
    <>
      <div className="search-bar">
        <input
          className="input-text"
          type="text"
          placeholder="Please search restaurants here!"
        ></input>
        <img className="search-image" src={search} alt="search-image" />
      </div>
      <button
        className="res-btn"
        onClick={() => {
          const filteredlist = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4
          );
          //console.log(filteredlist);
          setListOfRestaurant(filteredlist);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => {
          if (restaurant && restaurant?.info && restaurant?.info?.id) {
            return (
              <Menu key={restaurant?.info?.id} resData={restaurant} />
              // Key can differentiate between objects.
            );
          }
        })}
      </div>
    </>
  );
};

export default Body;
