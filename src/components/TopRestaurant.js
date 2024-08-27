import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function TopRestaurant() {


    const [value, setValue] = useState(0);
    const [data, setData] = useState([]) 


    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0744454&lng=72.91320429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const result = await data.json();
        // console.log("data",result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
  
  
  useEffect(()=>{
     fetchData()
  },[])

    function handlePrev(){
        setValue((prev) => prev - 40)
    }

    function handleNext(){
    setValue((prev) => prev + 40)
    }

  return (
    <div className="container mt-16" style={{width:"100%"}}>
    <div className="container-fluid overflow-hidden pb-3" style={{mx:"auto"}}>
    <div className="d-flex justify-content-between">
    <h2 className="font-weight-bold">Top restaurant chains in Delhi</h2>
  
  <div className="d-flex gap-2 mb-3">
    <div onClick={handlePrev} className="rounded-pill p-3" style={{background:"lightgrey", cursor:"pointer"}}><FaArrowLeft  /></div>
    <div onClick={handleNext} className="rounded-pill p-3" style={{background:"lightgrey", cursor:"pointer"}}><FaArrowRight /></div>
  </div>
  </div>
  <div className="d-flex gap-4 w-full duration-500" style={{translate:`-${value}%`}}>
             {
                data.map((restaurant)=>(
                <div>
                    <img style={{width:"295px", height:"195px", borderRadius:"18px", cursor:"pointer"}} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_loosy,f_auto,q_auto,w_660/" + restaurant?.info?.cloudinaryImageId}/>
                    </div>
                    
                ))
             }
       </div>

    </div>
    <hr style={{border:"2px solid black"}}/>
  </div>
  )
}

export default TopRestaurant
