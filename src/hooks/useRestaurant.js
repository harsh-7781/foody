import { useEffect, useState} from "react"
const useRestaurant = () =>{

    const[restaurantData, setRestaurantData] = useState([]);
    const[restaurantCollection, setRestaurantCollection] = useState([]);
    const[loading, setLoading] = useState(true)
    const[isfailed, setIsFailed] = useState(false)

    useEffect(()=>{


    
        const getRestaurants = async()=>{
          try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0744454&lng=72.91320429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json();
            setLoading(false);
            console.log("json", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // setCategory(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          }
          catch (err){
            setLoading(false)
            setIsFailed(true)
            console.log("Something went wrong",err);
          }
        }
      
          getRestaurants();
        }, [])

     const resObject = {
        resData:restaurantData,
        masterData:restaurantCollection,
        loading:loading,
        failed:isfailed,
        updater:setRestaurantData
     }

    return resObject
}


export default useRestaurant