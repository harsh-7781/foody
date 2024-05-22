import logo from './logo.svg';
import './App.css';
import Logo from "./assets/images/png-transparent-logo-brand-font-food-product-restaurant-logo-design-food-label-text-thumbnail-removebg-preview.png"
 
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"

// const Header = () =>{
//   return(
//     <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
//     <div className="container-fluid">
//       <a className="navbar-brand" href="#">
//         <img src={Logo} style={{width:"80px"}}/>
//       </a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a className="nav-link" href="#">Home🏠</a>
//           </li>
//           <li classNames="nav-item">
//             <a className="nav-link" href="#">About Us😆</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Contact📞</a>
//           </li>    
//           <li className="nav-item">
//             <a className="nav-link" href="#">Cart🛒</a>
//           </li>   
//         </ul>
//       </div>
//     </div>
//   </nav>
//   );
// }

// const Footer = () => {
//   return (
//     <div className="bg-success text-center">This is the Footer component</div>
//   );
// }

// const Carousel = () => {
//   return (
//     <div className="text-center">This is the carousel component</div>
//   );
// }

// const Filters = () => {
//   return (
//     <div className="bg-success text-center">This is the Filter component</div>
//   );
// }

// const Searchbar = () =>{
//   return(
//       <div className="text-center">This is searchbar component</div>
//   );
// }

// const Restaurantcard = () =>{
//   return(
//       <div className="text-center">This is restaurantcard component</div>
//   );
// }

// const Cardcontainer = () =>{
//   return(
//       <>
//          <p className="text-center">This is cardcontainer component</p>
//          <Restaurantcard/>
//          <Restaurantcard/>
//          <Restaurantcard/>
//          <Restaurantcard/>
//          <Restaurantcard/>
//          <Restaurantcard/>
//       </>
//   );
// }

// const Body = () => {
//   return (
//     <>
//     <div className="text-black text-center">This is the body component</div>
//     <Carousel/>
//     <div className="d-flex justify-content-between">
//       <Filters/>
//       <Searchbar/>
//     </div>
//     <Cardcontainer/>
//     </>
//   );
// }

const App = () => {
  return (
    <>
     <Header/>
     <Body/>
     <Footer/>
     </>
  );
}

export default App;
