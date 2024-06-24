import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import { createBrowserRouter } from 'react-router-dom';
import Body from './Body';
import App from '../App'
import Errorpage from './Errorpage';
import Menu from './Menu';

const appRouter = createBrowserRouter([


    {
       path: "/",
       element:<App/>,
       errorElement : <Errorpage/>,
       children:
       
      

       [
    
        {
            path: "About",
            element:<About/>
         },
    
         {
            path: "",
            element:<Body/>
         },
    
         {
            path: "Contact",
            element:<Contact/>
         },
    
         {
            path: "Cart",
            element:<Cart/>
         },

         {
            path: "Menu/:id",
            element:<Menu/>
         },
       ]
    },

   

  ]);

  export default appRouter;