import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText]=useState("");

  // Whenever state variable update, react triggers a reconcliation cycle(re-renders the component)


  useEffect(()=>{
    fetchData();
  },[]);


  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // Optional Chaining
    const apiResInfo=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(apiResInfo);
    setFilteredRestaurant(apiResInfo);
  };
  
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return <h1>Looks like you're offline!! Please check your internet connection</h1>
  }

  // Conditional Rendering

    return listOfRestaurants.length === 0 ? <Shimmer/> :
    (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" 
            className="search-box" 
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}/>
            <button onClick={()=>{
              // Filter the restaurant cards and update the UI
              console.log(searchText);

              const filteredList=listOfRestaurants.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )

              setFilteredRestaurant(filteredList);
            }}>Search</button>
          </div>
          <button 
            className="filter-btn" 
            onClick={()=>{
            const filteredList=listOfRestaurants.filter((res)=>{
              return res.info.avgRating>4.2;
            });
            setFilteredRestaurant(filteredList);
          }}>
            Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {
              filteredRestaurant.map((restaurant)=> 
                (<Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>))
          }
        </div>
      </div>
    );
  };

  export default Body;