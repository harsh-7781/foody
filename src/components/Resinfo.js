import React from 'react'

const Resinfo = ({name, avgRating, cuisines, deliveryTime, distance, costforTwo, ratingCount, remark}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>⭐{avgRating}({ratingCount}){costforTwo}</p>
      <p>{cuisines}</p>
      <p>{deliveryTime}</p>
      <p>🚲{distance}  | {remark} </p>
    </div>
  )
}

export default Resinfo;
