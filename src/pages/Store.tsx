import storeItems from "../data/items.json"

export function Store(){
    return(
        <>
        <h1>Store</h1>
        <div className="storeContainer">
            {storeItems.map(item => (
                <div className="item">{JSON.stringify(item)}</div>
            ))
            }
        </div>
        </>
    )
}

// 1 hour mark
// https://www.youtube.com/watch?v=lATafp15HWA&ab_channel=WebDevSimplified