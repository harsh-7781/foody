import { IMG_URL } from "./config";
  import { Link } from "react-router-dom";



const Restaurantcard = ({cloudinaryImageId, name, avgRating, sla, cuisines, areaName,id}) =>{
    // imgUrl, title, startRating, deliveryTime, cuisines, location

    return(
        <Link to={`/menu/${id}`} className="custom-card text-decoration-none text-dark">
           <div className="mb-2">
                < img 
                    src={IMG_URL+cloudinaryImageId}
                />
           </div>
            <div >
                    
                <div className="space"> <h5>{name}</h5></div>
           
              <div className="d-flex justify-content-between">
              <div> <i class="fa-solid fa-star" style={{color:"#FFD43B"}}> </i>  {avgRating}</div>

                  <div className="time">{sla?.deliveryTime}Min</div>
             </div>

             <div className="overflow">
                 {cuisines.join(", ")}</div>
          
                <div className="letter">
                {areaName}</div>
           
                </div>
        </Link>
       
    );
  }

  export default Restaurantcard