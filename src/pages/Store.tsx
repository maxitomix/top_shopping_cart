import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"


export function Store(){
    return(
        <>
        <h1>Store</h1>
        <div className="storeContainer">
            {storeItems.map(item => (
                <div key={item.id} className="item">
                    {/* {JSON.stringify(item)}  */}
                <StoreItem {...item}/>
                </div>
            ))
            }
        </div>
        </>
    )
}

// 1 hour mark
// https://www.youtube.com/watch?v=lATafp15HWA&ab_channel=WebDevSimplified