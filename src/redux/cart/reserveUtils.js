import {v4 as uuidv4} from 'uuid';
uuidv4()

export const addItemToReserve = (cartItems, products) =>{
    var reserveProducts = []

    products.forEach(product => {
        const itemInCart = cartItems.find((item) => {
            return item.id === product.id
        });

        if(itemInCart){
            return cartItems.map((item) => {
                return item.id === itemInCart.id
                    ?{...item, quantity: item.quantity * 1}
                    : item;
            })
        } else {
            reserveProducts.push({...product, quantity: 1});
        }
    });
    


    return[
        ...cartItems,           
        ...reserveProducts
        
    ]
}