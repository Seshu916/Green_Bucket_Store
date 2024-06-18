import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useCart } from "../Context/CartContext";
import Header from "../Components/Header";

const ProductSingle = () => {
    const { pid } = useParams();
    const { addToCart } = useCart();
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/product/${pid}`);
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching product details. Please try again.');
                setLoading(false);
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [pid]);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (<>
        <section className="vh-100">
            <div className="container py-5 h-100">
                {loading && <p>Loading product details...</p>}
                {error && <p className="text-danger">{error}</p>}

                {products && (
                    <div className="row d-flex" style={{ marginLeft: "120px" }}>
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "10px" }}>
                                <div className="row g-0">
                                    <div className="col-6">
                                        <img src={products.imageLink} alt="product" className="img-fluid" style={{ borderRadius: "10px", width: "100%", height: "auto" }} />
                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <h2>{products.brand}</h2>
                                            <h1>{products.pname}</h1>
                                            <h3>₹{products.price}</h3>
                                            <button onClick={()=>handleAddToCart(products)} className="btn btn-success">ADD</button>
                                            <p>{products.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    </>);
}

export default ProductSingle;