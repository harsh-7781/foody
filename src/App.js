import logo from './logo.svg';
import "../src/App.css"
import Logo from "./assets/images/png-transparent-logo-brand-font-food-product-restaurant-logo-design-food-label-text-thumbnail-removebg-preview.png"
 
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"
import { Outlet, RouterProvider } from 'react-router-dom';
// import appRouter from './components/appRouter.js';

const App = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
     </>
  );
}

export default App;
