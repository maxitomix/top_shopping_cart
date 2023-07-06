import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

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
    <div className="card">
        <img className="cardImg" src={imgUrl} alt={name} />
        <div className="row1">
            <h2 className="itemName"> {name} </h2>
            <p className="price">{formatCurrency(price)}</p>
        </div>
      
        {quantity === 0 ? (
            <button className="btnAddToCart" onClick={() => increaseCartQuantity(id)}> + Add to Cart</button>
        ) : <div className="cartControls">
                <div className="row1">
                    <button className="btnQuantity" onClick={() => decreaseCartQuantity(id)}>-</button>
                    <div className="displayQuantity"><span className="quantity">{quantity}</span> in cart</div>
                    <button className="btnQuantity" onClick={() => increaseCartQuantity(id)}>+</button>
                </div>
                    <div>
                    <button className="btnRemove" onClick={() => removeFromCart(id)}>Remove</button>
                </div>
             </div>}

    </div>
    )
}