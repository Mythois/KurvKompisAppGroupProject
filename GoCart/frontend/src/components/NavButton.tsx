/*NavigationButton component. A button that, when clicked will send the user to another page in the application. */

import { Link } from "react-router-dom";

interface NavButtonProps{
  title: string         
  route: string;        

}


const NavButton = (props:NavButtonProps)=>{
  
    return(
      <Link to={import.meta.env.BASE_URL + props.route}>
        <button className="btn">{props.title}</button>
      </Link>
      

    );


}


export default NavButton