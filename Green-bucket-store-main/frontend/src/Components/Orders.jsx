import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/user/${userId}/products`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setOrders(response.data); 
            } catch (error) {
                setError('Error fetching orders. Please try again.');
                console.error('Error fetching orders:', error);
            }
        };

        if (userId && token) {
            fetchOrders();
        }
    }, [userId, token]);

    return (
        <>
        <div className="container d-flex justify-content-center align-items-center orders-container">
            <div className="orders-content">
                <h1 className="my-4">Orders</h1>

                {error && <p className="text-danger">{error}</p>}

                <div className="orders-list">
                    {orders.map((product) => (
                        <div key={product.pid} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.imageLink} className="img-fluid rounded-start" alt={product.pname} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.pname}</h5>
                                        <p className="card-text">Price: ₹{product.price}</p>
                                        <p className="card-text">Brand: {product.brand || 'NA'}</p>
                                        <p className="card-text">Delivered On: {product.orderDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>);
};

export default Orders;
