import React from 'react'
import MenuSection from './MenuSection'
import { useState } from 'react'

const NormalMenu = ({normalCollection, isActive, toggleFunction, isNested}) => {
    const [showList, setShowList] = useState(false)
        return(
            <>
            <h6 key={normalCollection?.card?.card?.title} className="bg-danger p-3" onClick={ isNested ? ()=>setShowList(!showList) :toggleFunction}> {normalCollection?.card?.card?.title} 
            {isNested ? normalCollection?.title : normalCollection?.card?.card?.title}
            </h6>
            
            {
                isNested ? normalCollection?.itemCards.map((dish)=>{
                    return(
                       showList && <>
                        <MenuSection
                         isVeg={dish?.card?.info?.isVeg}
                         name={dish?.card?.info?.name}
                         costForTwo={dish?.card?.info?.defaultPrice ?  dish?.card?.info?.defaultPrice/100 : dish?.card?.info?.price/100}
                         avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
                         ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                         description={dish?.card?.info?.description}
                         imageUrl={dish?.card?.info?.imageId}
                        />
                         <hr style={{border:"1px solid black"}}/>
                        </>
                        );
                            
                        
                    }) :
                normalCollection?.card?.card?.itemCards.map((dish)=>{
                    return(
                       isActive && <>
                        <MenuSection
                         isVeg={dish?.card?.info?.isVeg}
                         name={dish?.card?.info?.name}
                         costForTwo={dish?.card?.info?.defaultPrice ?  dish?.card?.info?.defaultPrice/100 : dish?.card?.info?.price/100}
                         avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
                         ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                         description={dish?.card?.info?.description}
                         imageUrl={dish?.card?.info?.imageId}
                        />
                         <hr style={{border:"1px solid black"}}/>
                        </>
                        );
                            
                        
                    })
                }

            </>
        )};

export default NormalMenu
