import React,{children, createContext, useContext, useState} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addToCart = (product) =>{
        setCart((prev) =>{
            const existing = prev.find((item) => item.id ===product.id);
            if(existing) {
                return prev.map((item) =>
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            );
            }
                return [...prev, {...product, quantity: 1}]
        });
    };

    const deletefromCart = (product) =>{
        setCart((pre) =>{
            return pre
            .map((item) =>{
                if (item.id === product.id) {
                    return {...item, quantity:item.quantity - item.quantity}
                }
                return item;
            })
           .filter((item) => item.quantity > 0)
        })
    }

    const decreasefromCart = (product) =>{
        setCart((pre) =>{
            return pre
            .map((item) =>{
                if (item.id === product.id) {
                    return {...item, quantity:item.quantity - 1}
                }
                return item;
            })
           .filter((item) => item.quantity > 0)
        })
    }

    return  <CartContext.Provider value={{cart, addToCart, deletefromCart, decreasefromCart}}>
            {children}
        </CartContext.Provider>
    
}