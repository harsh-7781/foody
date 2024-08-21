import React from "react"
import { IMG_URL } from "./config"


const MenuSection = ({isVeg, name, costForTwo, avgRating, ratingCount, description, imageUrl}) =>{
    
    return(
        <div className="d-flex p-2 justify-content-between container align-items-center menubar">
            <div>
                <p>{isVeg ? "🟩" : "🟥"}</p>
                <h6>{name}</h6>
                <h6>Rs. {costForTwo}</h6>
               {avgRating &&<p className="text-success">⭐{avgRating} <span className="text-secondary">({ratingCount})</span></p>}
                <p className="text-secondary">{description}</p>
            </div>
            <div>
                <img style={{width:"150px", height:"150px" , cursor:"pointer", objectFit:"cover", borderRadius:"20px"}} src={IMG_URL+imageUrl}/>
               
            </div>
        </div>
    )
}

export default MenuSection
