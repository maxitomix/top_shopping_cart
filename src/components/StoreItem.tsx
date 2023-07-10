import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { Card } from "react-bootstrap"

type StoreItemsProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}


export function StoreItem ({id, name, price, imgUrl}:StoreItemsProps){
    const {
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart 
    } = useShoppingCart()

    const quantity = getItemQuantity(id)

    return(
    <Card>
        <Card.Body className="d-flex flex-column align-items-center">
             <img src={imgUrl}  alt="product photo"  />
            <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4" >

            <span className="fs-2"> {name} </span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>

            </Card.Title>

      
        {quantity === 0 ? (
            <div className="cartControls">
                <div className="row1">
                <button className="btnAddToCart button-71" onClick={() => increaseCartQuantity(id)}> + Add to Cart</button>
                </div>
            </div>
        ) : <div className="cartControls">

                <div className="row1">
                    <button className="btnQuantity " onClick={() => decreaseCartQuantity(id)}>-</button>
                    <div className="displayQuantity"><span className="quantity">{quantity}</span> in cart</div>
                    <button className="btnQuantity " onClick={() => increaseCartQuantity(id)}>+</button>
                <div>
                    <button className="btnRemove" onClick={() => removeFromCart(id)}>Remove</button>
                </div>
                </div>


             </div>}
             </Card.Body>

    </Card>
    )
}