import Carousel from "./Carousel.js"
import Filters from "./Filters.js"
import Searchbar from "./Searchbar.js"
import Cardcontainer from "./Cardcontainer"

const Body = () => {
    return (
      
      <>
      <div className="text-black text-center">
     
      

        {/* This is the body component */}
        </div>
      <Carousel/>
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