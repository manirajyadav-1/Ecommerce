import { useState, useContext, useRef } from "react"
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/nav_dropdown.png'

export default function Navbar(){
    const{isDark,handleToggle} = useContext(ShopContext);

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="Logo" />
            <p>UrbanThreads</p>
        </div>
        <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to="/"><p>Shop</p></Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to="/mens"><p>Men</p></Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to="/womens"><p>Women</p></Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to="/kids"><p>Kids</p></Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to="/login"><button>Login</button></Link>}
            <Link to="/cart"><img src={cart_icon} alt="Icon"/></Link>
        </div>
        <div className="nav-cart-count">{getTotalCartItems()}</div>

        <button onClick={handleToggle} className="btn-dark-mode">
          {isDark === "dark-mode" ? "☀️" : "🌙"}
        </button>
    </div>
    
}