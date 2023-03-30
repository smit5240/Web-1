import React from "react";

export default function Slider() {
  return (
    <div className="container">
      <div
        id="carouselExampleDark9962"
        className="carousel carousel-dark slide mb-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark9962"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark9962"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark9962"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img
              src="slide-1.jpg"
              className="d-block w-100 img-fluid opacity-40"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="slide-2.jpg"
              className="d-block w-100 opacity-40"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="slide-3.jpg"
              className="d-block w-100 opacity-40"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark9962"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark9962"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h5 className="theamdark">WELCOME TO POLISHOP</h5>
        <hr />
        <p className="fonts">
          <strong className="me-1">Polishop</strong>
          Premium Responsive HTML Template. Polishop is a clean and Fully
          Responsive to use the template for every kind of eCommerce online
          shop. Great Looks on Desktops, Tablets and Mobiles. Well Documented.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, BUY THEME.
        </p>
        <h5 className="theamdark">FEATURED</h5>
        <hr />
      </div>
    </div>
  );
}
