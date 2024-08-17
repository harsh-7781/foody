import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import { createBrowserRouter } from 'react-router-dom';
import Body from './Body';
import App from '../App'
import Errorpage from './Errorpage';
import Menu from './Menu';
import { lazy } from 'react';
import Instamart from './Instamart';
const instamart = lazy(()=>import("./Instamart"))


const appRouter = createBrowserRouter([


    {
       path: "/",
       element:<App/>,
       errorElement : <Errorpage/>,
       children:
       
      

       [
    
        {
            path: "about",
            element:<About/>
         },
    
         {
            path: "",
            element:<Body/>
         },
    
         {
            path: "contact",
            element:<Contact/>
         },
    
         {
            path: "cart",
            element:<Cart/>
         },
          {
            path : "menu/:id",
            element : <Menu/>
          },
          {
            path: "Instamart",
            element:<Instamart/>
         }
       ]
    },

   

  ]);

  export default appRouter;