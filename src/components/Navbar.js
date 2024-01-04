import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav>
             <h2>ShoppingCart</h2>
             <div>
                <NavLink to="/">HomePage</NavLink>
                <NavLink to="/cart">CartPage</NavLink>
             </div>
        </nav>
    )
}

export default Navbar;