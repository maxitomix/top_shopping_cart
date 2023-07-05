type StoreItemsProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}


export function StoreItem ({id, name, price, imgUrl}:StoreItemsProps){
    return(
    <div className="card">
        <img className="cardImg" src={imgUrl} alt={name} />
        <h2 className="itemName"> {name} </h2>
        <p className="price">{price}</p>
    </div>
    )
}