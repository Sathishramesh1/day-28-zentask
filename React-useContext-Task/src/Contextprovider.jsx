import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(); 



function CartProvider({children}){
    const [Cartproduct,setCardproduct]=useState([]);


    return <CartContext.Provider value={{Cartproduct,setCardproduct}}>

        {children}
    </CartContext.Provider>
}

export {CartContext,CartProvider}