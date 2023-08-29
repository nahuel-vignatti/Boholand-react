import "./footer.css";
import social from "../../assets/social.png";
import { NavLink } from "react-router-dom";

function Footer(){
    return(
        <footer className="d-flex flex-row justify-content-between p-3 mt-2">
            <NavLink to={"/"}><h1 className="logo">Boholand</h1></NavLink> 
            <a href="#"><img src={social} alt="Social Media" className="socialLogos" /></a>
        </footer>
    )
}
export default Footer;