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
 const [isfailed,setIsFailed] = useState(false)
 const [restaurantCollection, setRestaurantCollection] = useState([]);
 const [searchText,setsearchText] = useState("")
//  const [categories,setCategory] = useState([]);
// console.log("restaurantList", restaurantData);
 


 
  
  const handleSearchText = (event) =>{
    setsearchText(event.target.value);
  }
  
   const filterData = ()=>{
    const filteredData = restaurantCollection.filter((restaurant) =>{
      return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    })
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


  useEffect(()=>{

    
  const getRestaurants = async()=>{
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0744454&lng=72.91320429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      setLoading(false);
      console.log("json", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setrestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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

  

  // console.log("component is rendered")
//   setrestaurantData(restaurantList[1]?.card.card.gridElements?.infoWithStyle?.restaurants);
 
if(loading){
  return (
    <div className="container d-flex flex-wrap gap-4">
      <Shimmer/> 
    </div>
   
  )
}


if(isfailed){
  return(
    <div>
      <h1>
        Something went wrong
      </h1>
    </div>
  )
}
 
 return(

      <div>
        <div className="d-flex justify-between">
        <div className="container mb-3">
           <input id="searchInput" type="text" placeholder="Enter Restaurant Name" value={searchText} onChange={handleSearchText} />
           <button className="btn btn-success" onClick={filterData} >🔍</button>
        </div>
        <div className="d-flex">
          <button className="btn btn-dark btn-sm mb-3 px-3 mx-2 " onClick={handleDelivery}>Fast Delivery</button>
          <button className="btn btn-dark btn-sm mb-3 px-3 mx-2 " onClick={handleToprated}>Top rated</button>
          <button className="btn btn-dark btn-sm mb-3 px-3 mx-2 " onClick={handleVeg}>Pure Veg</button>
          <button className="btn btn-dark btn-sm mb-3 px-3 mx-2 " onClick={handleShowall}>Show all</button>

        </div>
        </div>
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
 

       
        <div className="container d-flex flex-wrap gap-4">
     
       
           {
             
            restaurantData.length!==0 ? restaurantData.map((restaurant)=>{
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
           }) : <h1>No Serached restaurant is found</h1>
            // <div>  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Flogo-stamp-label-vector-png-images-not-found-stamp-label-not-found-stamp-label-png-image-for-free-download--1117666832495499033%2F&psig=AOvVaw2Q1BxKgbKU1XamEHyVGa9m&ust=1718712907048000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiZjtfO4oYDFQAAAAAdAAAAABAE">  </img> </div>
          
         }
            
         
     
        </div> 
        </div>
    );
  };

  export default Cardcontainer