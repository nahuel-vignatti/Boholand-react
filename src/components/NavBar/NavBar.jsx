import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar(){
    return (
    <nav>
        <ul className="lista pt-4 pb-3">
            <li><NavLink to={"/"}><h1 className="logo">Boholand</h1></NavLink></li>            
            <li><NavLink to={"/category/tapiz"}>Tapices</NavLink></li>
            <li><NavLink to={"/category/colgante"}>Colgante</NavLink></li>
            <li><NavLink to={"/category/mesa"}>Mesa</NavLink></li>
            <li><NavLink to={"/cart"}><CartWidget /></NavLink></li>       
        </ul>
        </nav>
    )
}

export default NavBar;