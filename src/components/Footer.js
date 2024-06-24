const Footer=()=>{
    return(
        <>
           <div>
                  
                <footer className="text-center text-lg-start text-black footer" style={{backgroundColor:"#1c2331"}}>
                    <section className="d-flex p-4 mt-3 foot" style={{backgroundColor:"cyan"}} >
                   {/* <nav className="site-footer"> */}
                    <div class="site-footer me-5 d-block">
                    <h6 className="title">Swiggy Overflow</h6>
                         <ul className="connect">
                            <li>Questions</li>
                            <li>Help</li>
                         </ul>
                    
                        </div>

                        <div className="site-footer d-block"> 
                            <h5 className="title">
                                Company
                            </h5>
                            <ul className="connect company cursor-pointer">
                                 <li> <a>About</a></li>
                                 <li>Press</li>
                                 <li>Work Here</li>
                                 <li>Legal</li>
                                 <li>Privacy Policy</li>
                                 <li>Terms of Service</li>
                                 <li>Contact Us</li>
                            </ul>
                            
                        </div>
                        {/* </nav> */}

                       
                        
                        <div>


                            <h5 className="icons">
                                Get Connected With Us
                            </h5>

                                <a href="" class="text-blue me-4">
                                     <i class="fab fa-facebook-f"></i>
                                 </a>
                                <a href="" class="text-blue me-4">
                                     <i class="fab fa-twitter"></i>
                                 </a>
                                 <a href="" class="text-warning me-4">
                                      <i class="fab fa-google"></i>
                                  </a>
                                 <a href="" class="text-danger me-4">
                                       <i class="fab fa-instagram"></i>
                                  </a>
                                 <a href="" class="text-dark me-4">
                                       <i class="fab fa-linkedin"></i>
                                   </a>
                               
                            </div>
                            
                    </section>
                         
                     

                </footer>
  

           </div>
        </>
    )
}
export default Footer