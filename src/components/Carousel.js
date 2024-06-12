
const Carousel = ({url}) => {
   return(
    <div>
      <img src={+url}/>
    </div>
   )
  
  
  // const fetchCatergory =async () =>{
  //  const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0744454&lng=72.91320429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //  const data = await response.json();
  //  setCategory(data);
  // }

  // useEffect(()=>{
  //   fetchCatergory();
  // },[])
  }

  export default Carousel