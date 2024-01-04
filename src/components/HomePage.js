import axios from "axios";
import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/actions/cartActions";

const HomePage = ()=>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{axios.get("https://dummyjson.com/products")
    .then((responce)=> setProducts(responce.data.products))
    .catch((err)=>console.log(err))}
    ,[])
    

    const dispatch = useDispatch();
    const cart = useSelector(state=>state);
    return(
        <div className="products">
            {
            products.map((product, index)=>(
                <div key={index} className="product-card">
                    <img src={product.images[0]} alt={`Product ${index}`} style={{width:"300px", height:"320px"}} />
                    <div className="product-desc">
                        <h3>{product.title}</h3>
                        <p>Price: {product.price}</p>
                    </div>
                    <button 
                    style={{width:"300px", backgroundColor:"black", padding:"10px", color:"white", textAlign:"center", fontWeight:"700"}}
                    onClick={()=>{
                        
                        const itemExist =cart.some(item=> item.id === product.id)
                        if(!itemExist){
                            return dispatch(addItem(product))
                        }
                        else{
                            alert("item already exist in cart")
                        }
                    }}
                    >Add to Cart</button>
                </div>
            ))}
        </div>
    )
}
export default HomePage;