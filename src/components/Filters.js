const Filter =({collection,updater}) =>{
	const topRating=()=>{
    const topRating = collection.filter((restaurant)=>{
        return restaurant?.info?.avgRating>=4.5
    })
    updater(topRating);
}

const fastDelivery=()=>{
    const filterData = collection.filter((restaurant)=>{
        return restaurant?.info?.sla?.deliveryTime <=30
    })
    updater(filterData);
}

const pureVeg=()=>{
    const filterData = collection.filter((restaurant)=>{
        return restaurant?.info.veg
    })
    updater(filterData);
}
const reset=()=>{
	updater(collection)
}

	return(
		<div className="container  d-flex gap-3 text-black ">
            <button type="button" className="btn button"onClick={topRating}  >Top Rating</button>
            <button type="button" className="btn button "onClick={fastDelivery} >Fast Delivery</button>
            <button type="button" className="btn  button"onClick={pureVeg} >Pure Veg</button>
            <button type="button" className="btn  button" onClick={reset} >Reset</button>
        </div>
		);
};

export default Filter;