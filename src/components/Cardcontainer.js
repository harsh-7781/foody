import Restaurantcard from "./Restaurantcard"
import { restaurantList } from "./config";
import { useState } from "react";

const Cardcontainer = () =>{
 const [restaurantData, setrestaurantData] = useState(restaurantList[1]?.card.card.gridElements?.infoWithStyle?.restaurants)


 console.log("restaurantList", restaurantList[1]?.card.card.gridElements?.infoWithStyle?.restaurants);


//   setrestaurantData(restaurantList[1]?.card.card.gridElements?.infoWithStyle?.restaurants);
 
 const filterrestaurants = ()=>{
  const restaurants = restaurantData.filter((restaurant) =>{
        return(
            restaurant?.info?.avgRating>=4.5
        )
    })
   setrestaurantData(restaurants);
 }

 return(

      <>

          <button className="button" onClick={filterrestaurants}>High Rating Restaurants</button>
      
        <div className="container d-flex flex-wrap gap-4">

          
     
           {/* {
            restaurantlist.map((restaurant)=>{-
                return(
                    <Restaurantcard
                    imgUrl={restaurant?.imgUrl}
                    title={restaurant?.title}
                    startRating={restaurant?.startRating}
                    deliveryTime={restaurant?.deliveryTime}
                    cuisines={restaurant?.cuisines}
                    location={restaurant?.location}
                     
                  />
                )
            })
           } */}

           {
             
             restaurantData.map((restaurant)=>{
                return(
                  
                   <Restaurantcard
                    key ={restaurant?.info?.id}
                //    imgUrl={IMG_URL+restaurant?.info.cloudinaryImageId}            
                //    title={restaurant?.info?.name}
                //    startRating={restaurant?.info?.avgRating}
                //    deliveryTime={restaurant?.info?.sla?.deliveryTime}
                //    cuisines={restaurant?.info?.cuisines.join(", ")}
                //    location={restaurant?.info?.areaName}

                {...restaurant?.info}
                    
            />
                )
             })
           }
             
         
     
        </div>
        </>
    );
  };

  export default Cardcontainer