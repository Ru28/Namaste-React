import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState, useContext } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText]=useState("");
  
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
  
  const {loggedInUser, setUserName } = useContext(UserContext);
  // Conditional Rendering

    return listOfRestaurants.length === 0 ? <Shimmer/> :
    (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" 
            className="border border-solid border-black" 
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}/>
            <button className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={()=>{
              // Filter the restaurant cards and update the UI
              console.log(searchText);

              const filteredList=listOfRestaurants.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )

              setFilteredRestaurant(filteredList);
            }}>Search</button>
          </div>
          <div className="px-4 py-2 m-4 flex items-center">
            <button 
              className="px-4 py-2 bg-gray-100 rounded-lg" 
              onClick={()=>{
              const filteredList=listOfRestaurants.filter((res)=>{
                return res.info.avgRating>4.2;
              });
              setFilteredRestaurant(filteredList);
            }}>
              Top Rated Restaurant
              </button>
          </div>
          <div className="px-4 py-2 m-4 flex items-center">
            <label className="p-2 m-2 font-bold">UserName: </label> 
            <input className="border border-black p-2"
            value={loggedInUser}
            onChange={(e)=>setUserName(e.target.value)}/>
          </div>  
        </div>
        <div className="flex flex-wrap">
          {  
              filteredRestaurant.map((restaurant)=> 
                (<Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>

                  {
                    restaurant.info.veg ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>
                  }
                  
                  </Link>))
          }
        </div>
      </div>
    );
  };

  export default Body;