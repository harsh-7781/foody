import Logo from"../assets/images/logo.png"
import { Link } from "react-router-dom";

const Header = () =>{
    return(
      <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="image" src={Logo} style={{width:"80px"}}/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Other</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link</a></li>
          </ul>
        </li>
      </ul>
    </div> */}


        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav gap-4">
            <li className="nav-item"> 
              <Link to className="head Active">Home</Link>
            </li>
            <li classNames="nav-item">
              <Link to  ="/About"  className="head">About Us😆</Link>
            </li>
            <li className="nav-item">
              <Link to ="/Contact" className="head">Contact📞</Link>
            </li>    
            <li className="nav-item">
              <Link to ="/Cart" className="head">Cart🛒</Link>
            </li>   
          </ul>
        </div>
      </div>
    </nav>
    );
  }

  export default Header