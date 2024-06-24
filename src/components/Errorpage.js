import { useRouteError } from "react-router-dom"
import Logo from '../assets/images/000-http-error-codes.png'
const Errorpage = () =>{
   const errorObject = useRouteError()
   console.log("errorObject", errorObject);
    return(
     <div className="justify-content-center d-grid">
    <a className="mt-3"><img src={Logo} style={{width:"600px", height:"400px"}} /></a><br/> <hr/>
     <div style={{backgroundColor:"red", textAlign:"center"}}> OOPS Something went wrong😪😥<br/>
      Error:- {errorObject?.status} {errorObject?.statusText}<br/>
      Description:- {errorObject.error.message} </div>
     </div>
     
   
    )
 }

 export default Errorpage;