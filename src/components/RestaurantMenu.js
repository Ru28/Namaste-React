import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

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