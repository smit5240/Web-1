import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div>
      <div className="container">
        <div className=" maintain mt-2 ">
          <div className="d-flex currancy">
            <p className="me-4 mt-0 mb-0 ">
              Language <i className="fa-solid fa-angle-down downarro ms-1"></i>
            </p>
            <p>
              Currency <i className="fa-solid fa-angle-down downarro ms-1"></i>
            </p>
          </div>
          <div className="menu_list">
            <ul className="d-flex">
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
              {/* <li className="wishlist">
              <a href="/">Wish list</a>
            </li> */}
              <li>
                <a href="#" className="d-flex justify-content-center ">
                  My Account
                </a>
              </li>
              <li className="borderhidelast">
                <a href="/checkout">Checkout</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-0" />
        <div className="mt-4 mb-4">
          <div className="row justify-content-center">
            <div className=" col-12 logocompo col-lg-4 ">
              <img src="logo.png" alt="" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-2">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control inputboder"
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btncontrol" type="button">
                    <i className="fa-solid fa-magnifying-glass seachicon"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3">
              <div className="d-flex justify-content-center">
                <span>
                  <i className="fa-solid fa-cart-shopping cartp me-3"></i>
                </span>
                <p className="">
                  1 item(s) - $ 710.18{" "}
                  <span>
                    <i className="fa-solid fa-angle-down downarro ms-2"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
