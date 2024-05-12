import { useState, useEffect } from "react";
import { REST_MENU_API } from "../../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
      fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(REST_MENU_API+resId);
        const json = await data.json();

        setResInfo(json.data);
        console.log(resInfo);
    };

    if(resInfo === null){
        return <Shimmer/>;
    }

    const {costForTwoMessage,cuisines,name } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((resMenu)=>{
                    return <li key={resMenu.card.info.id}>{resMenu.card.info.name}- Rs.{resMenu.card.info.price/100 || resMenu.card.info.defaultPrice/100}</li>
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;