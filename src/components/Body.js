import Carousel from "./Carousel.js"
import Filters from "./Filters.js"
import Searchbar from "./Searchbar.js"
import Cardcontainer from "./Cardcontainer"
import TopRestaurant from "./TopRestaurant.js"
import { useEffect, useState } from "react"
// import { useEffect, useState } from "react"

const Body = () => {

  const [topRestaurantData, setTopRestaurantData] = useState([])
  const [scrollData, setScrolltData] = useState([])

  async function fetchData(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0744454&lng=72.91320429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const result = await data.json();
    // console.log("data",result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setTopRestaurantData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setScrolltData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
  }


useEffect(()=>{
 fetchData()
},[])

    
    return (
      
      <>
      <div className="text-black text-center">
     
      

        {/* This is the body component */}
        </div>
        <div>
      <Carousel data={scrollData}/>
      
      
      <TopRestaurant data={topRestaurantData} />
      </div>
      <div className="d-flex justify-content-between">
        {/* <Filters/> */}
        {/* <Searchbar/> */}
      </div>

      
     <div> <Cardcontainer/>
     </div>
      
      </>
    );
  }

  export default Body