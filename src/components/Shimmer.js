const Shimmer = () =>{
    return(
      new Array(20).fill(0).map(()=>(
       

    
        <div className="custom-card">
        <div className="mb-3">
            <div className="shimmerImg">

            </div>
        </div>
         <div>
                 
             <div className="space"> <h5 className="shimmerLine mb-3"></h5></div>
        
           <div className="d-flex mb-3 justify-content-between">
           <div  className="shimmerLine shimmerWid"> </div>

               <div className="time shimmerLine shimmerWid"></div>
          </div>

          <div className="overflow shimmerLine mb-3">
            </div>
       
             <div className="letter shimmerLine mb-3">
             </div>
        
             </div>
     </div>
     
      ))
    )
}

export default Shimmer