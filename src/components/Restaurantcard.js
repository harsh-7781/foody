import { IMG_URL } from "./config";


const Restaurantcard = ({cloudinaryImageId, name, avgRating, sla, cuisines, areaName,}) =>{
    // imgUrl, title, startRating, deliveryTime, cuisines, location

    return(
        <div className="custom-card">
           <div className="mb-2">
                < img 
                    src={IMG_URL+cloudinaryImageId}
                />
           </div>
            <div >

                <div className="space"> <h5>{name}</h5></div>
           
              <div className="d-flex justify-content-between">
              <div> <i class="fa-solid fa-star" style={{color:"#FFD43B"}}> </i> {avgRating}</div>

                  <div>{sla?.deliveryTime}Min</div>
             </div>

             <div className="overflow">
                 {cuisines.join(", ")}</div>
          
                <div className="letter">
                {areaName}</div>
           
                </div>
        </div>
       
    );
  }

  export default Restaurantcard





  
// const Restaurantcard=({areaName,avgRating,cuisines,name})=>{
//     return(
//         <div className="Restaurantcard mb-4 custom-card">
//             <div className="image">
//                 {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" alt="" className="w-100" style={{height:"250px"}}/> */}
//                 <h1></h1>
//             </div>
//             <div className="content px-2">
//                 <h4>{name}</h4>
//                 <div className="d-flex justify-content-between"><span>⭐{avgRating}</span> <span>25-30 mins</span></div>
//                 <div>{cuisines.join(",")}</div>
//                 <p>{areaName}</p>
//             </div>
//         </div>
//     )
// }
// export default Restaurantcard
