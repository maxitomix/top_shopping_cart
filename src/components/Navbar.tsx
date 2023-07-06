import {NavLink} from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar(){

    const { openCart, cartQuantity} = useShoppingCart()

    return(
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Store">Store</NavLink>
            <NavLink to="/About">About</NavLink>
            <button className="cart" onClick={openCart}>
                <img src="./src/assets/cart.png" alt="cart" />
                {cartQuantity >0 &&(
                    <div className="cartNumber">{cartQuantity}</div>
                )}
                
            </button>
           
        </div>
    )    
}
