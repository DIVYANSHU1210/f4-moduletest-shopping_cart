import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, deleteAll } from "../redux/actions/cartActions";

const CartPage = ()=>{
    // const [cartItems, setCartItems] = useState([]);

    const cartItems = useSelector((state)=> state);
    const dispatch = useDispatch();

    let totalPrice = 0;
    cartItems.map((item)=>totalPrice += item.price)

    return(
        <div className="cart">
            <div className="cart-items">{
                cartItems.map((product, index)=>(
                    <div key={index} className="product-card">
                        <img src={product.images[0]} alt={`Product ${index}`} style={{width:"300px", height:"320px"}} />
                        <div className="product-desc">
                            <h3>{product.title}</h3>
                            <p>Price: {product.price}</p>
                        </div>
                        <button 
                        style={{width:"300px", backgroundColor:"black", padding:"10px", color:"white", textAlign:"center"}}
                        onClick={()=>dispatch(deleteItem(product.id))}
                        >Remove from cart</button>
                    </div>
                ))
            }
            </div>
            <div className="cart-summary">
                <h1>Checkout List</h1>
                <table>
                    <tbody>
                        {cartItems.map((product, index)=>(
                            <tr>
                                <td>1 {product.title}</td>
                                <td>{product.price} $</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>{totalPrice} $</td>
                        </tr>
                    </tfoot>
                    
                </table>
                <button onClick={()=> {
                    dispatch(deleteAll())
                    alert("items have been checkedout")
                }} className="clr-btn">Click To Checkout</button>
                
            </div>
        </div>
    )
}
export default CartPage;