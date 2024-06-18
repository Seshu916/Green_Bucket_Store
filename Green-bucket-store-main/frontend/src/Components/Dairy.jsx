import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Dairy=()=>{
   const { addToCart } = useCart();
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchProducts = async () => {
      try {
         const storedToken = localStorage.getItem('token');
         
            const response = await axios.get('http://localhost:8080/category/Dairy', {
            });
            setProducts(response.data);
            setLoading(false);
      } catch (error) {
         setError('Error fetching products. Please try again.');
         setLoading(false);
         console.error('Error fetching vegetable products:', error);
      }
      };

      fetchProducts();
   }, []);

   const handleAddToCart = (product) => {
      addToCart(product);
   };
    return(<>
      <div className="container">
         <div className="d-flex justify-content-between align-items-center">
         <h1 className="my-5">Dairy,Bread and Eggs</h1>
         </div>
         
      {loading && <p>Loading products...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
         {products.map((items)=>{
            return <div className="col-3">
               <div className="card border-0" style={{ width: "16rem" }}>
               <Link to={`/product/${items.pid}`}><img src={items.imageLink} className="card-img-top " alt="..."/></Link>
               <div className="card-body">
                  <h4 className="card-title">{items.brand}</h4>
                  <h5 className="card-title">{items.pname}</h5>
                  <h4 className="card-title">Price: ₹{items.price}</h4>
                  <button onClick={()=>handleAddToCart(items)} className="btn btn-success">ADD</button>
               </div>
            </div>
            </div>
         })}
      </div>
      </div>
    </>)
}
export default Dairy;