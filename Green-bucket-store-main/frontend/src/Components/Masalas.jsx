import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const Masalas=()=>{
   const { addToCart } = useCart();
  const [masalaProducts, setMasalaProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          'http://localhost:8080/category/Dry%20Fruits',
          'http://localhost:8080/category/Masalas'
        ];


        const requests = urls.map(url => axios.get(url));

        const responses = await Promise.all(requests);

        const combinedData = responses.flatMap(response => response.data);

        setMasalaProducts(combinedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []); 

  const handleAddToCart = (product) => {
    addToCart(product);
  };
    return(<>
      <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-5">Masalas and Dry Fruits</h1>
      </div>

      <div className="row">
         {masalaProducts.map((items)=>{
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
export default Masalas;