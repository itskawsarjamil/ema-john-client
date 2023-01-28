import React from 'react';
import './Cart.css'
const Cart = ({ cart,clearCart,children }) => {
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price*product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = total * 0.1;
    const grandTotal = parseFloat(total) + parseFloat(shipping) + parseFloat(tax.toFixed(2));

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items:{cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal}</h5>
            {/* <button onClick={clearCart}>Clear Cart</button> */}
            {children}
        </div>
    );
};

export default Cart;