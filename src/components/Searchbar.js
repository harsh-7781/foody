import { useState } from "react";

const Searchbar = ({collection, updater}) =>{
    const[searchText, setsearchText] = useState("")

    
    const handleSearchText = (event) =>{
        setsearchText(event.target.value);
      }
      
       const filterData = ()=>{
        const filteredData = collection.filter((restaurant) =>{
          return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        })
        console.log(filterData)
        updater(filteredData);
       }

    return(
        <div className="container mb-3">
        <input id="searchInput" type="text" placeholder="Enter Restaurant Name" value={searchText} onChange={handleSearchText} />
        <button className="btn button" style={{width:"70px", height:"40px"}} onClick={filterData} >🔍</button>
     </div>
    );
  }

  export default Searchbar