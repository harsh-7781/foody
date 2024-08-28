import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { useState, useEffect } from "react";
const Carousel = ({data}) => {

  // const [data, setData] = useState([]);


   const [value, setValue] = useState(0)

//     async function fetchData(){
//       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0744454&lng=72.91320429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//       const result = await data.json();
//       console.log("data",result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
//       setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
//     }


// useEffect(()=>{
//    fetchData()
// },[])

  function handlePrev(){
    if (value > 0) {
      setValue((prev) => prev - 31);
    }

  };

  function handleNext(){
    if (value < 124) {
      setValue((prev) => prev  +31);
    }
  }

   return(
    <div className="container" style={{width:"100%"}}>
      <div className="container-fluid overflow-hidden pb-3" style={{mx:"auto"}}>
      <div className="d-flex justify-content-between">
      <h1 className="font-weight-bold">What's on your mind?</h1>
    
    <div className="d-flex gap-2">
      <div onClick={handlePrev} className="rounded-pill p-3" style={{background:"lightgrey", cursor:"pointer"}}><FaArrowLeft  /></div>
      <div onClick={handleNext} className="rounded-pill p-3" style={{background:"lightgrey", cursor:"pointer"}}><FaArrowRight /></div>
    </div>
    </div>
    <div style={{translate:`-${value}%`}} className="d-flex">
         {
         data &&  data.map((item)=>(
            <img style={{width:"150px", cursor:"pointer"}} src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}/>
          ))
         }
         </div>

      </div>
      <hr style={{border:"2px solid black"}}/>
    </div>
    
   )
      
  return Carousel 
  }

  export default Carousel