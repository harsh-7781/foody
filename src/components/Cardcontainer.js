import Restaurantcard from "./Restaurantcard"
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import Logo from '../assets/images/000-http-error-codes.png'
import useRestaurant from "../hooks/useRestaurant";
import Searchbar from "./Searchbar";
import useOnline from "../hooks/useOnline";
import UserContext from "../Utlis/UserContext";
import Filters from "./Filters";

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
 


 
  
  // const handleSearchText = (event) =>{
  //   setsearchText(event.target.value);
  // }
 
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
 
 return(

      <div>
        <div className="d-flex justify-between">
          <Searchbar collection={resObject.masterData} updater={resObject.updater}/>
          <Filters collection={resObject.masterData} updater={resObject.updater} />
          
        </div>

        
 

       
        <div className="container d-flex flex-wrap gap-4">
     
       
           {
             
            resObject?.resData.length!==0 ? resObject?.resData.map((restaurant)=>{
                return(
                  
                   <Restaurantcard
                    key ={restaurant?.info?.id}
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