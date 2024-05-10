import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/resList";
import { useEffect, useState } from "react";
const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants,setListOfRestaurants] = useState(resList);

  

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
          onClick={()=>{
            const filteredList=listOfRestaurants.filter((res)=>{
              return res.info.avgRating>4.2;
            });
            setListOfRestaurants(filteredList);
          }}>
            Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {
              listOfRestaurants.map((restaurant)=> 
                (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
          }
        </div>
      </div>
    );
  };

  export default Body;