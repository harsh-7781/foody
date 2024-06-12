// import { Carousel } from "bootstrap";
// import { Carousel } from "bootstrap";
import Restaurantcard from "./Restaurantcard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { FaArrowLeftLong,FaArrowRightLong} from "react-icons/fa6";

const Cardcontainer = () =>{
 const [count,setcount] = useState(0)
 const [restaurantData,setrestaurantData] = useState([])
 const [loading,setLoading] = useState(true)
 const [restaurantCollection, setRestaurantCollection] = useState([]);
 const [searchText,setsearchText] = useState("")
//  const [categories,setCategory] = useState([]);
console.log("restaurantList", restaurantData);
 


 
  
  const handleSearchText = (event) =>{
    setsearchText(event.target.value);
  }
  
   const filterData = ()=>{
    const filteredData = restaurantCollection.filter((restaurant) =>{
      return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setrestaurantData(filteredData);
   }


  useEffect(()=>{

    
  const getRestaurants = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0744454&lng=72.91320429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setLoading(false);
    // console.log("json", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setrestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setCategory(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

    getRestaurants();
  }, [])

  

  // console.log("component is rendered")
//   setrestaurantData(restaurantList[1]?.card.card.gridElements?.infoWithStyle?.restaurants);
 
if(loading){
  return (
    <div className="container d-flex flex-wrap gap-4">
      <Shimmer/> 
    </div>
   
  )
}
 
 return(

      <div>
 {/* 
 <div className="container mt-3 mb-3">
      <div className="d-flex justify-content-between">
        <div className="title-carousel">This is the carousel component</div>
        <div className="d-flex">
          <div className="carousel mx-1 d-flex justify-content-center pt-2"><FaArrowLeftLong /></div>
          <div className="carousel mx-1 d-flex justify-content-center pt-2"><FaArrowRightLong /></div>
        </div>
        </div>

        <div className="d-flex overflow-hidden container"> 
          {
            categories.map((restaurant)=>{
              return(
                <Restaurantcard
                  {...restaurant?.info}
                />
              )
             
            })
          }
        </div>
        </div> */}
 

        <div className="container mb-3">
           <input id="searchInput" type="text" placeholder="Enter Restaurant Name" value={searchText} onChange={handleSearchText} />
           <button className="btn btn-success" onClick={filterData} >🔍</button>
        </div>
        <div className="container d-flex flex-wrap gap-4">
     
       
           {
             
             restaurantData.map((restaurant)=>{
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
           })
         }
            
         
     
        </div> 
        </div>
    );
  };

  export default Cardcontainer