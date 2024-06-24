import { useParams } from "react-router-dom";
import { MENU_URL } from "./config";
import { useEffect } from "react";


const Menu = ()=>{
    const Params = useParams()
    console.log("Params",Params);
    
  useEffect(()=>{

    
    const getRestaurants = async()=>{
      try {
        const data = await fetch(MENU_URL)
        const json = await data.json();
        // setLoading(false);
        console.log("json", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setrestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setCategory(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      catch (err){
        // setLoading(false)
        // setIsFailed(true)
      }
    }
  
      getRestaurants();
    }, [])
      

    return(
        <div>This is menu component</div>
    )
}


export default Menu;