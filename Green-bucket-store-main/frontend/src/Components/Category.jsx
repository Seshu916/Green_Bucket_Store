import React from "react";

import { Link } from "react-router-dom";
const Category = () => {
  return (
    <>
    <div className="container">
      <div className="row">
      <div className="card col border-0" style={{ width: "18rem" }}>
      <Link to="/vegetables"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/ef6d7392cc14c4e55fd32508a8b8b80b" className="card-img-top" alt="..."/></Link>
        <div className="card-body">
          <h5 className="card-title">Fresh Vegetables</h5>
          <Link to="/vegetables" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
      <div className="card col border-0" style={{ width: "18rem" }}>
      <Link to="/fruits"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/NI_CATALOG/IMAGES/CIW/2024/3/8/44ee874e-181c-4c2e-93b0-6a94db3259d8_e2a24168-319e-4ace-9a8e-595d5c3f8e96" className="card-img-top" alt="..."/></Link>
        <div className="card-body">
          <h5 className="card-title">Fresh Fruits</h5>
          <Link to="/fruits" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
      <div className="card col border-0" style={{ width: "18rem" }}>
      <Link to="/dairy"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/ff7f6d7a32094a30aa5e5d5b0d2267b5" className="card-img-top" alt="..."/></Link>
        <div className="card-body border-0">
          <h5 className="card-title">Dairy,Bread and Eggs</h5>
          <Link to="/dairy" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
      <div className="card col border-0" style={{ width: "18rem" }}>
      <Link to="/rice"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/67ce530dbe4f7fbfa4c0cd4a20387250" className="card-img-top" alt="..."/></Link>
        <div className="card-body">
          <h5 className="card-title border-0">Rice,Atta and Dals</h5>
          <Link to="/rice" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
    </div>
    <div className="row">
        <div className="card col border-0" style={{ width: "18rem" }}>
        <Link to="/masalas"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/18172800a99ee7ef0cc1b19517963303" className="card-img-top" alt="..."/></Link>
           <div className="card-body">
           <h5 className="card-title">Masalas and Dry Fruits</h5>
           <Link to="/masalas" className="btn btn-primary">Shop Now</Link>
        </div>
        </div>
        <div className="card col border-0" style={{ width: "18rem" }}>
        <Link to="/oilsandghee"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/NI_CATALOG/IMAGES/CIW/2024/3/30/b4430a79-5288-4bb0-af86-07854a638adc_7e93438d-6609-4904-a438-e63a91f20b19" className="card-img-top" alt="..."/></Link>
          <div className="card-body">
          <h5 className="card-title">Edible Oils and Ghee</h5>
          <Link to="/oilsandghee" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
        <div className="card col border-0" style={{ width: "18rem" }}>
        <Link to="/munchies"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/0debb7fcde59e76542c2bd5a1d6ee2db" className="card-img-top" alt="..."/></Link>
          <div className="card-body">
          <h5 className="card-title">Munchies</h5>
          <Link to="/munchies" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
        <div className="card col border-0" style={{ width: "18rem" }}>
        <Link to="/sweettooth"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/ce7510a89fd3b7c9f59051498995e3a5" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
            <h5 className="card-title">Sweet Tooth</h5>
            <Link to="/sweettooth" className="btn btn-primary">Shop Now</Link>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="card col border-0" style={{ width: "18rem" }}>
        <Link to="/colddrinks"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/a6cf6e3612b006827e800d0b897a969a" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
            <h5 className="card-title">Cold Drinks and Juices</h5>
            <Link to="/colddrinks" className="btn btn-primary">Shop Now</Link>
            </div>
        </div>
        <div className="card col border-0" style={{ width: "18rem" }}>
        <Link to="/biscuits"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/d113e476185a8537f200eaa464cf33c7" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
            <h5 className="card-title">Biscuits and Cakes</h5>
            <Link to="/biscuits" className="btn btn-primary">Shop Now</Link>
            </div>
        </div>
        <div className="card col border-0" style={{ width: "18rem" }}>
        <Link to="/frozenfood"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/a9cb16dfe5e589cc9a967e54efe785dd" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
            <h5 className="card-title">Instant and Frozen Food </h5>
            <Link to="/frozenfood" className="btn btn-primary">Shop Now</Link>
            </div>
        </div>
        <div className="card col border-0" style={{ width: "18rem" }}>
        <Link to="/meatandseafood"><img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/29c8cd9f933f3d4477639b758f5d7093" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
            <h5 className="card-title">Meat and Seafood</h5>
            <Link to="/meatandseafood" className="btn btn-primary">Shop Now</Link>
            </div>
        </div>
    </div>
    </div>                           
  </>);
};

export default Category;
