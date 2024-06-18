import { useRef, useState,useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const UpdateProduct = () => {

    const { pid } = useParams();
    const navigate = useNavigate();

    const prodnameRef = useRef(null);
    const priceRef = useRef(null);
    const quantityRef = useRef(null);
    const imageRef = useRef(null);
    const brandRef = useRef(null);
    const descRef = useRef(null);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const fetchProductDetails = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/product/${pid}`);
            setProduct(response.data);
          } catch (error) {
            console.error('Error fetching product details:', error);
          }
        };
    
        fetchProductDetails();
      }, [pid]);
    
      useEffect(() => {
        if (product) {
          prodnameRef.current.value = product.pname;
          priceRef.current.value = product.price;
          quantityRef.current.value = product.quantity;
          imageRef.current.value = product.imageLink;
          brandRef.current.value = product.brand;
          descRef.current.value = product.description;
          setSelectedCategory(product.category);
        }
      }, [product]);
    

    const handleUpdate = async (e) => {
        e.preventDefault();

        const pname = prodnameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const imageLink = imageRef.current.value;
        const description = descRef.current.value;
        const brand = brandRef.current.value;
        const token = localStorage.getItem('token');

        if (!token) {
            alert("You need to login first");
            navigate("/loginsignup");
            return;
        }

        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        console.log('Submitting addition');

        try {
            const res = await axios.put(`http://localhost:8080/updateProduct/${pid}`, {
                pname,
                price,
                quantity,
                imageLink,
                brand,
                description,
                category: selectedCategory 
            }, {
                headers: headers,
            });

            prodnameRef.current.value = '';
            priceRef.current.value = '';
            quantityRef.current.value = '';
            imageRef.current.value = '';
            brandRef.current.value = '';
            descRef.current.value = '';

            console.log('Product updated successfully', res.data);
            alert("Updation successful!!");
            navigate("/body");

        } catch (error) {
            console.error('Updation error:', error);
            alert(error);
            alert("You need to be a Admin")
        }
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <>
            <div className="row">
                <div className="container mt-5 col-4 px-4 py-3" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                    <form onSubmit={handleUpdate}>
                        <h4>Update Product</h4>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName1" className="form-label">Product Name</label>
                            <input type="text" className="form-control" id="exampleInputName1" ref={prodnameRef} placeholder="Enter product name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail2" className="form-label">Price</label>
                            <input type="text" className="form-control" id="exampleInputEmail2" ref={priceRef} placeholder="Enter price" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Quantity</label>
                            <input type="text" className="form-control" id="exampleInputPassword2" ref={quantityRef} placeholder="Enter quantity" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputMobile" className="form-label">Image Link</label>
                            <input type="text" className="form-control" id="exampleInputMobile" ref={imageRef} placeholder="Enter image link" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputMobile" className="form-label">Description</label>
                            <input type="text" className="form-control" id="exampleInputMobile" ref={descRef} placeholder="Enter product description" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputAddress" className="form-label">Brand</label>
                            <input type="text" className="form-control" id="exampleInputAddress" ref={brandRef} placeholder="Enter brand" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <select className="form-select" id="category" value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="">Select category</option>
                                <option value="Vegetables">Vegetables</option>
                                <option value="Fruits">Fruits</option>
                                <option value="Dairy">Dairy</option>
                                <option value="MilkShakes">MilkShakes</option>
                                <option value="Breads and Bun">Breads and Bun</option>
                                <option value="Atta">Atta</option>
                                <option value="Rice">Rice</option>
                                <option value="Dal">Dal</option>
                                <option value="Dry Fruits">Dry Fruits</option>
                                <option value="Masalas">Masalas</option>
                                <option value="Oils">Oils</option>
                                <option value="Ghee">Ghee</option>
                                <option value="Munchies">Munchies</option>
                                <option value="Sweet Tooth">Sweet Tooth</option>
                                <option value="Cold Drinks">Cold Drinks</option>
                                <option value="Biscuits">Biscuits</option>
                                <option value="Cake">Cake</option>
                                <option value="Instant">Instant</option>
                                <option value="Frozen">Frozen</option>
                                <option value="Meat&SeaFood">Dairy</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Update Product</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateProduct;