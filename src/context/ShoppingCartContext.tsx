import {ReactNode, createContext, useContext} from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

const shoppingCartContext = createContext({});

export function useShoppingCart() {
    return useContext(shoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
    return(
        <shoppingCartContext.Provider value={{}}>
            {children}
        </shoppingCartContext.Provider>
    )
}