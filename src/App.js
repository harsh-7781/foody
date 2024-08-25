import logo from './logo.svg';
import "../src/App.css"
import Logo from "./assets/images/png-transparent-logo-brand-font-food-product-restaurant-logo-design-food-label-text-thumbnail-removebg-preview.png"
 
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"
import { Outlet, RouterProvider } from 'react-router-dom';
import { useEffect, useState} from 'react';
import UserContext from './Utlis/UserContext.js';
// import appRouter from './components/appRouter.js';

const App = () => {

  const[name, setName]  =useState("")
  // useEffect(()=>{
  //  const data = "Harsh"
  //  setName(data)
  // },[])
  return (
    <UserContext.Provider value={{username:name, setName}}>
     <Header/>
     <Outlet/>
     <Footer/>
     </UserContext.Provider>
  );
}
export default App;