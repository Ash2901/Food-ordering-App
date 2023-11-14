import Shimmer from './Shimmer';
import { Menu_img } from "../utils/constant";
import {useParams} from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) return <Shimmer />
    const {name, cuisines, costForTwoMessage,avgRating, imageId} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(itemCards);
    return(
        <div className="m-2 p-2">
            <h1 className="text-xl font-bold my-2">{name}</h1>
            <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
            <h4>Rating: {avgRating}⭐</h4>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => 
                    <div className="flex justify-evenly w-[450px] bg-gray-100 m-4 rounded-lg hover:bg-gray-200">
                    <li className="m-4 p-2 rounded-lg" key = {item?.card?.info?.id}>
                        {item?.card?.info?.name} - Rs {item?.card?.info?.price/100}  
                    </li>
                    <li>
                        <img className="rounded-lg p-2" src={Menu_img + item?.card?.info?.imageId} alt="image"></img>
                    </li>
                    </div>
                )}
            </ul>
        </div>
    )
}
export default RestaurantMenu;