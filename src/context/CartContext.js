import { CartReducer } from "../reducer/CartReducer";

const { createContext, useContext, useReducer } = require("react")

const initialState = {
    cartList: [],
    total: 0,
    filterProduct: [],
    products: [
        { id: 1, name: "Sony Wh-Ch510 Bluetooth Wireless", price: 149, image: "/assets/images/1001.png" },
        { id: 2, name: "boAt Rockerz 450", price: 49, image: "/assets/images/1002.png" },
        { id: 3, name: "JBL Tune 760NC", price: 179, image: "/assets/images/1003.png" },
        { id: 4, name: "Logitech H111 Wired", price: 39, image: "/assets/images/1004.png" },
        { id: 5, name: "APPLE Airpods Max Bluetooth Headset", price: 199, image: "/assets/images/1005.png" },
        { id: 6, name: "ZEBRONICS Zeb-Thunder Wired", price: 29, image: "/assets/images/1006.png" }
    ]
};

  

const CartContext = createContext(initialState);

export const CartProvider = ({children})=>{
    const[state, dispatch]=useReducer(CartReducer, initialState)
    
    const addToCart = (product)=>{
        const updatedCart = state.cartList.concat(product);
        updateTotal(updatedCart);
        dispatch({
            type : "ADD_TO_CART",
            payload:{
                products: updatedCart
            }
        })
    }

    const removeFromCart = (product)=>{
        const filteredCart = state.cartList.filter((item)=> item.id !== product.id);
        updateTotal(filteredCart)
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products: filteredCart
            }
        })
    }

    const updateTotal = (product)=>{
        let total = 0;
        product.forEach(item=>total=total+item.price);
        dispatch({
            type:"UPDATE_TOTAL",
            payload:{
                total: total
            }
        })
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        filterProduct: state.filterProduct,
        products: state.products, // Ensure this is included in the context value
        dispatch,
        addToCart,
        removeFromCart,
    };
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = ()=>{

    const context = useContext(CartContext);
    return context;
}