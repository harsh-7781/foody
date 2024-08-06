const Footer=()=>{
    return(
        <footer className="footer mt-4">
          <div className="sb__footer section__padding">
            <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                    <h4>For Business</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/info">
                        <p>Info</p>
                    </a>
                    <a href="/assistant">
                        <p>Assistant</p>
                    </a>
                    <a href="/individual">
                        <p>Individual</p>
                    </a>

                </div>
                <div className="sb__footer-links_div">
                <h4>Resources</h4>
                    <a href="/resource">
                        <p>Resource Center</p>
                    </a>
                    <a href="/ceo">
                        <p>Ceo</p>
                    </a>
                    <a href="/resource">
                        <p>About us</p>
                    </a>
                    <a href="/resource">
                        <p>Stv</p>
                    </a>
                     
                </div>

                <div className="sb__footer-links_div">


                            <h5 className="icons">
                                Get Connected With Us
                            </h5>
                              <div className="socialmedia">
                                <a href="" class=" me-4">
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
                            </div>
               
                <div className="sb__footer-links_div">
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/career">
                        <p>Career</p>
                    </a>
                    <a href="/contact">
                        <p>contact</p>
                    </a>
                </div>
              
                

            </div>

            <hr></hr>

            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CodeInn. All right reserved.
                    </p>

                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms"><div><p>Terms and Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>


                </div>
            </div>
          </div>
        </footer>
    )
}
export default Footer