import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemsProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}


export function StoreItem ({id, name, price, imgUrl}:StoreItemsProps){

    const quantity = 0

    return(
    <div className="card">
        <img className="cardImg" src={imgUrl} alt={name} />
        <div className="row1">
            <h2 className="itemName"> {name} </h2>
            <p className="price">{formatCurrency(price)}</p>
        </div>
      
        {quantity === 0 ? (
            <button className="btnAddToCart"> + Add to Cart</button>
        ) : null}

    </div>
    )
}