import {v4 as uuidv4} from 'uuid';
uuidv4()

export const addItemToCart = (cartItems, product) =>{
    const itemInCart = cartItems.find((item) => {
        return item.id === product.id
    });

     if(itemInCart){
         return cartItems.map((item) => {
             return item.id === itemInCart.id
                 ?{...item, quantity: item.quantity + 1}
                 : item;
         })
     }

    return[
        ...cartItems,
        {
            ...product,
            quantity: 1
        }
    ]
}

export const removeItemFromCart = (cartItems) =>{
    const itemToRemove = cartItems.find((item) =>{
        return item.id === id
    })

    return cartItems.filter((item) =>{
        return item.id !== itemToRemove.id
    })
}