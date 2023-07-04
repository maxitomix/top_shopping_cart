import {NavLink} from "react-router-dom"

export function Navbar(){
    return(
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Store">Store</NavLink>
            <NavLink to="/About">About</NavLink>
            <button className="cart">
                <img src="./src/assets/cart.png" alt="cart" />
                <div className="cartNumber">3</div>
            </button>
           
        </div>
    )    
}
