import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Register() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="list ">
              <div>
                <p className="L-acount">Account</p>
                <hr className="hrwidth" />
              </div>
              <div className="list-item">
                <a href="">
                  {" "}
                  <i className="fa-solid fa-angle-right me-2"></i>Login
                </a>
              </div>
              <div className="list-item">
                <a href="">
                  <i className="fa-solid fa-angle-right me-2"></i>Register
                </a>
              </div>
              <div className="list-item">
                <a href="">
                  <i className="fa-solid fa-angle-right me-2"></i>password
                </a>
              </div>
              <div className="list-item">
                <a href="">
                  <i className="fa-solid fa-angle-right me-2"></i>My Account
                </a>
              </div>
              <div className="list-item">
                <a href="">
                  <i className="fa-solid fa-angle-right me-2"></i>Order History
                </a>
              </div>
              <div className="list-item">
                <a href="">
                  <i className="fa-solid fa-angle-right me-2"></i>Dowload{" "}
                </a>
              </div>
              <div className="list-item">
                <a href="">
                  <i className="fa-solid fa-angle-right me-2"></i>Return
                </a>
              </div>
              <div className="list-item">
                <a href="">
                  <i className="fa-solid fa-angle-right me-2"></i>Trasection
                </a>
              </div>
              <div className="list-item">
                <a href="">
                  <i className="fa-solid fa-angle-right me-2"></i>Newsletter
                </a>
              </div>
              <p className="L-acount mt-5">LATEST</p>
              <hr className="hrwidth mb-4" />
            </div>
            <div className="borderbox">
              <div className="row  p-2">
                <div className="col-2 pt-2 ">
                  <img
                    src="https://harnishdesign.net/demo/html/polishop/image/product/sony_vaio_1-45x45.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8 pb-2 maintaincart">
                  <p className="mb-2">Friendly Jewelry</p>
                  <strong className="pink">$ 1,177.00</strong>
                </div>
              </div>
            </div>
            <div className="borderbox">
              <div className="row  p-2">
                <div className="col-2 pt-2 ">
                  <img
                    src="https://harnishdesign.net/demo/html/polishop/image/product/apple_cinema_30-45x45.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8 pb-2 maintaincart">
                  <p className="mb-2">Apple Cinema 30 "</p>
                  <strong className="pink">$ 107.75</strong>
                </div>
              </div>
            </div>
            <div className="borderbox">
              <div className="row  p-2">
                <div className="col-2 pt-2 ">
                  <img
                    src="https://harnishdesign.net/demo/html/polishop/image/product/ipod_classic_1-45x45.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8 pb-2 maintaincart">
                  <p className="mb-2">i pad Classic</p>
                  <strong className="pink">$ 119.00</strong>
                </div>
              </div>
            </div>
            <div className="borderbox">
              <div className="row  p-2">
                <div className="col-2 pt-2 ">
                  <img
                    src="https://harnishdesign.net/demo/html/polishop/image/product/lotto-sports-shoes-white-45x45.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8 pb-2 maintaincart">
                  <p className="mb-2">Lotto Sport Shoes </p>
                  <strong className="pink">$ 589.50</strong>
                </div>
              </div>
            </div>
            <div className="borderbox">
              <div className="row  p-2">
                <div className="col-2 pt-2 ">
                  <img
                    src="https://harnishdesign.net/demo/html/polishop/image/product/Jeep-Casual-Shoes-45x45.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8 pb-2 maintaincart">
                  <p className="mb-2">Jeep-Casual-Shoes </p>
                  <strong className="pink">$ 131.50</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="ms-md-5">
              <div className="d-flex justify-content-center">
                <p className="location mb-2">
                  Home <i className="fa-solid fa-angle-right ms-2 "></i>
                  <i className="fa-solid fa-angle-right me-2"></i>
                  Account <span className="ms-2"> Register</span>
                </p>
              </div>
              <h2 className="d-flex justify-content-center play">
                Register Account
              </h2>
              <p className="headingR">YOUR PERSONAL DETAILS</p>
              <hr />

              <form className="mt-5 mb-5">
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-3 col-form-label"
                  >
                    <i className="fa-solid fa-star-of-life text-danger me-2 star"></i>
                    First Name :
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control setin"
                      id="inputEmail3"
                    />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    <i className="fa-solid fa-star-of-life text-danger me-2 star"></i>
                    Last Name :
                  </label>{" "}
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control setin"
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    <i className="fa-solid fa-star-of-life text-danger me-2 star"></i>
                    E-mail :
                  </label>{" "}
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control setin"
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    <i className="fa-solid fa-star-of-life text-danger me-2 star"></i>
                    Telephone :
                  </label>{" "}
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control setin"
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <div className="form-group row mb-5">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    Fax :
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control setin"
                      id="inputPassword3"
                    />
                  </div>
                </div>
              </form>
              <p className="headingR">YOUR ADDRESS</p>
              <hr />
              <form className="mt-5 mb-5">
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-3 col-form-label"
                  >
                    Company :
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control setin"
                      id="inputEmail3"
                    />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    Compny Id :
                  </label>{" "}
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control setin"
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    <i className="fa-solid fa-star-of-life text-danger me-2 star"></i>
                    Address 1 :
                  </label>{" "}
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control setin"
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    Address 2 :
                  </label>{" "}
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control setin"
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    <i className="fa-solid fa-star-of-life text-danger me-2 star"></i>
                    city :
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control setin"
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <div className="form-group row mb-3 ">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    <i className="fa-solid fa-star-of-life text-danger me-2 star"></i>
                    Post Code :
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control setin"
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <div className="form-group row mb-3 ">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    <i className="fa-solid fa-star-of-life text-danger me-2 star"></i>
                    Country :
                  </label>
                  <div className="col-sm-9">
                    <div className="input-group  selectoption">
                      <select className="custom-select" id="inputGroupSelect04">
                        <option selected>
                          {" "}
                          ---------------- Please Selected --------------
                        </option>
                        <option value="1">Rasia </option>
                        <option value="2">India</option>
                        <option value="3">china</option>
                        <option value="3">America</option>
                        <option value="3">Cenada</option>
                        <option value="3">Ukren</option>
                        <option value="3">Pakistan</option>
                        <option value="3">Africa</option>
                        <option value="3">Ausralia</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group row  ">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    <i className="fa-solid fa-star-of-life text-danger me-2 star"></i>
                    Region / State :
                  </label>
                  <div className="col-sm-9">
                    <div className="input-group  selectoption">
                      <select className="custom-select" id="inputGroupSelect04">
                        <option selected>
                          {" "}
                          ---------------- Please Selected --------------
                        </option>
                        <option value="1">Gujarat </option>
                        <option value="2">Maharastra</option>
                        <option value="3">Punjab</option>
                        <option value="3">Jammu Kashmir</option>
                        <option value="3"> Up</option>
                        <option value="3">Mp</option>
                        <option value="3">Bangal</option>
                        <option value="3">Himachal</option>
                        <option value="3">Tamilnadu</option>
                        <option value="3">Karnatak</option>
                        <option value="3">Shree Lanka</option>
                        <option value="3">kolkata</option>
                        <option value="3">Keral</option>
                        <option value="3">Manipur</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
              <p className="headingR pt-2">YOUR PASSWORD</p>
              <hr />
              <form className="mt-5 mb-5">
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-3 col-form-label"
                  >
                    <i className="fa-solid fa-star-of-life text-danger me-2 star"></i>
                    Password :
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control setin"
                      id="inputEmail3"
                    />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-3 col-form-label"
                  >
                    <i className="fa-solid fa-star-of-life text-danger me-2 star"></i>
                    Confirm-password :
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control setin"
                      id="inputEmail3"
                    />
                  </div>
                </div>
              </form>
              <p className="headingR pt-2">NEWSLETTER</p>
              <hr />
              <form className="mt-5 mb-5">
                <div className="form-group row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-3 col-form-label"
                  >
                    Subscribe :
                  </label>
                  <div className="col-sm-9">
                    <input type="radio" id="age1" name="age" value="yes" />
                    <label htmlFor="age1" className="me-3 ms-1">
                      Yes{" "}
                    </label>
                    <input type="radio" id="age2" name="age" value="no" />
                    <label htmlFor="age2" className="ms-1">
                      No
                    </label>
                  </div>
                </div>
              </form>
              <hr className="mb-4" />
              <input type="checkbox" id="vehicle1" name="policy" value="yes" />
              <label htmlFor="vehicle1" className="ms-3">
                {" "}
                I have read and agree to the <strong>Privacy Policy</strong>
              </label>
              <div className="mt-5 mb-4">
                <a className="addto  "> Continue</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
