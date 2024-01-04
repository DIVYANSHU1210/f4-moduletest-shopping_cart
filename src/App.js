import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import Navbar from "./components/Navbar";

import "./style.css"

const App = ()=>{
    return(
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/cart" element = {<CartPage/>}/>    
            </Routes>
        </div>
    )
}
export default App;