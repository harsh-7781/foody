import Logo from"../assets/images/logo.png"
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import UserContext from "../Utlis/UserContext";
import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { RiVipCrownFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { SiInstatus } from "react-icons/si";
import { FaCartPlus } from "react-icons/fa";

const Header = () =>{
   const isOnline = useOnline();

   const userData = useContext(UserContext)
   console.log("userData", userData)
   console.log("online status", isOnline);
    return(
      <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light mb-4 container-fluid">
      <div className="container-fluid">
        <Link  className="navbar-brand" to ="">
          <img className="image" src={Logo} style={{width:"80px"}}/>
          {/* <span>{isOnline ? "🟩" : "🟥"}</span> */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav gap-4">
            <li className="nav-item"> 
              <Link to ="" className="head Active"><strong><FaHome  style={{marginRight:"5px"}}/>Home</strong></Link>
            </li>
            <li classNames="nav-item">
              <Link to  ="/About"  className="head"><strong><RiVipCrownFill />About Us</strong></Link>
            </li>
            <li className="nav-item">
              <Link to ="/Contact" className="head"><strong><IoIosContact  />Contact</strong></Link>
            </li>  
            <li className="nav-item">
              <Link to ="/Instamart" className="head"><strong><SiInstatus />Instamart</strong></Link>
            </li>   
            <li className="nav-item">
              <Link to ="/Cart" className="head"><strong>Cart<FaCartPlus /></strong></Link>
            </li>   
            <li className="nav-item">
              {userData?.username}
            </li> 
          </ul>
        </div>
      </div>
    </nav>
    );
  }

  export default Header