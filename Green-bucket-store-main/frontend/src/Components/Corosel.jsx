import React from "react";

const Corosel = () => {
  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/ZXPL8230-l2-bev-c-Emperia-Tea-Common-1200x300-25-mar-24.jpg?tr=w-1920,q=80" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/ZXPL8223-l2-bev-c-Emperia-Green-Tea-1200x300-25-mar-24.jpg?tr=w-1800,q=80" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/ZXPL8205-l2-bev-c-Emperia-CTC-Leaf-Tea-1200x300-25-mar-24.jpg?tr=w-1920,q=80" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/ZXPL8401-ZXPL8400-ZXPL8395-ZXPL8391-28thMAR.jpg?tr=w-1920,q=80" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon rounded-circle bg-black" aria-hidden="true" style={{ marginLeft: "5px" }}></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon rounded-circle bg-black" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Corosel;
