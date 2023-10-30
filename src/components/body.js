import React from "react";
import Menu from "../components/menu";
import resList from "../utils/data";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <>
      <button
        className="res-btn"
        onClick={() => {
          const filteredlist = listOfRestaurant.filter (
            (res) => res.data.avgRating > 4
          )
          console.log(filteredlist);
          setListOfRestaurant(filteredlist);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <Menu key={restaurant.data.id} resData={restaurant} />
          //key can differenciate between objects.
        ))}
      </div>
    </>
  );
};

export default Body;