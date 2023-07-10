import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import cartImg from '/assets/cart.png';

export function Navbar(){

    const { openCart, cartQuantity} = useShoppingCart()

    return(
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
                    <Nav.Link to="/Store" as={NavLink} >Store</Nav.Link>
                    <Nav.Link to="/About" as={NavLink} >About</Nav.Link>     
                </Nav>

                <Button style={{width: "4rem", height: "4rem"}} 
                        onClick={openCart}
                        variant="outline-primary"
                        className="d-flex justify-content-center cart"
                        > 
                        <img src={cartImg} alt="cart" width="45"/>
                        {cartQuantity >0 &&(
                            <div className="cartNumber">{cartQuantity}</div>
                        )}
                </Button>
        </Container>
        </NavbarBs>

    )    
}
