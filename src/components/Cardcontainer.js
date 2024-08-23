// import { Carousel } from "bootstrap";
// import { Carousel } from "bootstrap";
import Restaurantcard from "./Restaurantcard"
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import Logo from '../assets/images/000-http-error-codes.png'
import useRestaurant from "../hooks/useRestaurant";
import Searchbar from "./Searchbar";
import useOnline from "../hooks/useOnline";
import UserContext from "../Utlis/UserContext";
// import { FaArrowLeftLong,FaArrowRightLong} from "react-icons/fa6";

const Cardcontainer = () =>{
  const isOnline = useOnline();
  const {username, setName} = useContext(UserContext)
 const [count,setcount] = useState(0)
 const [restaurantData,setrestaurantData] = useState([])
 const [loading,setLoading] = useState(true)
 const [isfailed,setIsFailed] = useState(false)
 const [restaurantCollection, setRestaurantCollection] = useState([]);
 const [searchText,setsearchText] = useState("")
 const resObject = useRestaurant();
 console.log("resObject", resObject)
//  const [categories,setCategory] = useState([]);
// console.log("restaurantList", restaurantData);
 


 
  
  const handleSearchText = (event) =>{
    setsearchText(event.target.value);
  }
  
   const filterData = ()=>{
    const filteredData = restaurantCollection.filter((restaurant) =>{
      return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    })
    console.log(filterData);
    setrestaurantData(filteredData);
   }
    
   const handleDelivery = () =>{
       const filterData = restaurantCollection.filter((restaurant) =>{
        return restaurant?.info?.sla?.deliveryTime <=30
      })
      setrestaurantData(filterData);
   }

   const handleVeg = () =>{
    const filterData = restaurantCollection.filter((restaurant) =>{
     return restaurant?.info?.veg
   })
   setrestaurantData(filterData);
}

const handleToprated = () =>{
  const filterData = restaurantCollection.filter((restaurant) =>{
   return restaurant?.info?.avgRating
 })
 setrestaurantData(filterData);
}

  const handleShowall = () =>{
    setrestaurantData(restaurantCollection);
  }



  

  // console.log("component is rendered")
//   setrestaurantData(restaurantList[1]?.card.card.gridElements?.infoWithStyle?.restaurants);
 
if(resObject?.loading){
  return (
    <div className="container d-flex flex-wrap gap-4">
      <Shimmer/> 
    </div>
   
  )
}


if(resObject?.failed){
  return(
    <div>
      <h1>
        Something went wrong
      </h1>
    </div>
  )
}

// const data = useRestaurant()
 
 return(

      <div>
        <div className="d-flex justify-between">
          <Searchbar collection={resObject.masterData} updater={resObject.updater}/>
          {/* <input type="text" value={username} onChange={(e)=>setName(e.target.value)}/> */}
        <div className="d-flex">
          <button className="btn btn-dark btn-sm mb-3 px-3 mx-2 button " onClick={handleDelivery}>Fast Delivery</button>
          <button className="btn btn-dark btn-sm mb-3 px-3 mx-2 button" onClick={handleToprated}>Top rated</button>
          <button className="btn btn-dark btn-sm mb-3 px-3 mx-2 button" onClick={handleVeg}>Pure Veg</button>
          <button className="btn btn-dark btn-sm mb-3 px-3 mx-2 button" onClick={handleShowall}>Show all</button>

        </div>
        </div>
 

       
        <div className="container d-flex flex-wrap gap-4">
     
       
           {
             
            resObject?.resData.length!==0 ? resObject?.resData.map((restaurant)=>{
                return(
                  
                   <Restaurantcard
                    key ={restaurant?.info?.id}
              //  {    imgUrl={IMG_URL+restaurant?.info.cloudinaryImageId}            
              //    title={restaurant?.info?.name}
              //    startRating={restaurant?.info?.avgRating}
              //    deliveryTime={restaurant?.info?.sla?.deliveryTime}
              //    cuisines={restaurant?.info?.cuisines.join(", ")}
              //    location={restaurant?.info?.areaName}

               {...restaurant?.info}
                    
          />
              )
           }) : 
           <div className="text-danger flex-column container align-item-center d-flex justify-content-center">
           <a><img src={Logo} style={{width:"auto", height:"auto"}}/> </a>
               <h1>The Following Search restaurant Card is Not Available</h1>
           </div>
          
         }
            
         
     
        </div> 
        </div>
    );
  };

  export default Cardcontainer