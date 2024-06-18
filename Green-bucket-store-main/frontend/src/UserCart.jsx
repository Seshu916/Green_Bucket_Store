import React from "react";
import axios from 'axios';
import { useCart } from "./Context/CartContext";
import { useNavigate } from "react-router";

const UserCart=()=>{

    const {cart,addToCart,removeFromCart,clearCart}=useCart();
    const navigate=useNavigate();

    const handlePayNow = async () => {
        try {
          const userId = localStorage.getItem('userId');
          const token = localStorage.getItem('token');
          const userEmail = localStorage.getItem('mailId');
    
          if (!userId || !token || !userEmail) {
            navigate('/loginsignup');
            return;
          }
    
          const products = cart.map((cartItem) => ({
            pid: cartItem.product.pid,
            pname: cartItem.product.pname,
            price: cartItem.product.price,
            quantity: cartItem.count,
            totalPrice: cartItem.product.price * cartItem.count,
          }));
    
          const totalAmount = products.reduce((total, product) => total + product.totalPrice, 0);
    
          const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          };
    
          const response = await axios.post(`http://localhost:8080/${userId}/addSelectedProducts`, products, {
            headers: headers,
          });
    
          const mailData = {
            subject: 'Your Purchase Confirmation',
            message: `Thank you for your purchase! Here are the details of your order:\n\n` +
                     `${cart.map((cartItem, index) => {
                        const { product, count } = cartItem;
                        const { pname, price } = product;
                        const totalPrice = price * count;
                        return `${index + 1}. ${pname}: Quantity - ${count}, Total Price - ₹${totalPrice}`;
                     }).join('\n')}\n\nTotal Amount: ₹${totalAmount}`
          };
    
          const emailResponse = await axios.post(`http://localhost:8080/mail/${userEmail}`,mailData,{
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            }
          );

          console.log(response.data);
          clearCart();
          alert('Payment successful!');
        } catch (error) {
          console.error('Error making payment:', error);
          alert('Payment failed. Please try again.');
        }
      };
    return(<>
     <div className="container">
        <div className="d-flex flex-column align-items-center">
            <h2>Shopping Cart</h2>
            {cart.length===0?
            (<p>Your cart is Empty</p>):
            (<div>
                {cart.map((cartItem,index)=>{
                    const { product, count } = cartItem;
                    const { pid, pname, price, imageLink } = product;
                    const totalPrice = price * count;
                    return(
                            <div className="card mb-2" style={{borderRadius:"10px"}}>
                                <div className="d-flex">
                                <div>
                                    <img src={imageLink} style={{borderRadius: "10px",width:"100%",height:"auto"}} alt="" />
                                </div>
                                <div className="card-body d-flex align-items-center">
                                    <div>
                                      <h5 className="card-title">{pname}</h5>
                                      <p className="card-text">Price: ₹{price}</p>
                                      <p className="card-text">Total Price: ₹{totalPrice}</p>
                                      <div className="mb-2">
                                        <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                            Repeat
                                        </button>
                                      </div>
                                      <div>
                                        <button className="btn btn-danger" onClick={() => removeFromCart(pid)}>
                                            Remove
                                        </button>
                                      </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                    )
                })}
                <h3>Total Amount: ₹{cart.reduce((total, cartItem) => total + (cartItem.product.price * cartItem.count), 0)}</h3>
                <h4>
                    Delivering in 30 mins
                </h4>
                <div className="my-4">
                    <button className="btn btn-warning mr-2" onClick={clearCart}>
                    Clear Cart
                    </button>
                </div>
                <div>
                    <button className="btn btn-success" onClick={handlePayNow}>
                    Pay Now
                    </button>
                </div>
            </div>)}
        </div>
        </div>
    </>)
}
export default UserCart;