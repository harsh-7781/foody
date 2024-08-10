import React from 'react'

const Resinfo = ({name, avgRating, cuisines, deliveryTime, costforTwo, ratingCount, remark}) => {
  return (
    <div className="container resinfo">
      <h1>{name}</h1>
      <p>⭐{avgRating}({ratingCount}){costforTwo}</p>
      <p>{cuisines}</p>
      <p>{deliveryTime}</p>
      <p>🚲{remark.replace(/<\/?b>/g, "")}. </p>
    </div>
  )
}

export default Resinfo;
