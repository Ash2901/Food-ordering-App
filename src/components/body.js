import React from "react";
import Menu from "../components/menu";
//import resList from "../utils/data";
import { useState, useEffect } from "react";
import search from "../images/search.png";
import Shimmer from "../components/Shimmer";
import {Link} from 'react-router-dom';
import { Restaurant_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurant_URL);
    const json = await data.json();
    //console.log(json?.data?.cards[2].card.card.gridElements?.infoWithStyle.restaurants);
    setListOfRestaurant(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) {
    return <h1>Oops!! You are offline. Please check your Internet connection and try again</h1>
  }

  //Conditional rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-evenly m-4">
        <div className="flex items-center border-solid border-black border-2 rounded-lg">
          <input
            className="cursor-pointer"
            type="text"
            placeholder="Please search restaurants here!"
            value = {searchText}
            onChange={(e) => { setsearchText(e.target.value)}}
          ></input>
          <img className="w-8" src={search} alt="search-image" 
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
          className="border-2 border-solid border-black rounded-lg bg-gray-100 p-2"
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

      <div className="flex flex-wrap">
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
