import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Checkout() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="d-flex justify-content-center">
          <p className="location mb-2">
            Home <i className="fa-solid fa-angle-right ms-2 "></i>
            <i className="fa-solid fa-angle-right me-2"></i> Shopping Cart
          </p>
        </div>
        <h2 className="d-flex justify-content-center play pb-5">Checkout</h2>
        <div className="mt-5">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item pt-2 pb-2 ">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button  headingR"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  STEP 1: CHECKOUT OPTIONS
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row pt-4 mb-5 ">
                    <div className="col-sm-12 col-md-6">
                      <p className="headingc">NEW CUSTOMER</p>
                      <hr className="mb-4 " />
                      <p>Checkout Options:</p>
                      <div>
                        <input
                          type="radio"
                          id="age1"
                          name="age"
                          value="register"
                        />
                        <label htmlFor="age1" className="ms-3">
                          <strong> Register Account</strong>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="age2"
                          name="age"
                          value="checkout"
                        />
                        <label htmlFor="age2" className="ms-3">
                          <strong>Guest Checkout</strong>
                        </label>
                      </div>
                      <p className="mt-4 mb-5 ">
                        By creating an account you will be able to shop faster,
                        be up to date on an order's status, and keep track of
                        the orders you have previously made.
                      </p>
                      <div className="mb-4 mb-md-0">
                        <a href="" className="addto  ">
                          {" "}
                          Continue
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6  ">
                      <p className="headingc ms-3">RETURNING CUSTOMER</p>
                      <hr className="mb-4 ms-3" />
                      <div className="maintainl">
                        <p className="mb-4">I am a returning customer</p>
                        <div className="mb-4">
                          <strong className="mb-2">E-Mail Address:</strong>
                          <input
                            type="email"
                            className="form-control mt-2 setin"
                          ></input>
                        </div>
                        <div className="mb-5">
                          <strong className="mt-4">Password:</strong>
                          <input
                            type="password"
                            className="form-control mt-2 setin"
                          ></input>
                        </div>
                        <a className="addto  "> Continue</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item pt-2 pb-2">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed headingR "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  STEP 2: ACCOUNT & BILLING DETAILS
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
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
                          <select
                            className="custom-select"
                            id="inputGroupSelect04"
                          >
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
                          <select
                            className="custom-select"
                            id="inputGroupSelect04"
                          >
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
                </div>
              </div>
            </div>
            <div className="accordion-item pt-2 pb-2 ">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed headingR"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  STEP 3: SHIPPING DETAILS
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
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
                          <select
                            className="custom-select"
                            id="inputGroupSelect04"
                          >
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
                          <select
                            className="custom-select"
                            id="inputGroupSelect04"
                          >
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
                </div>
              </div>
            </div>
            <div className="accordion-item pt-2 pb-2 ">
              <h2 className="accordion-header" id="headingfour">
                <button
                  className="accordion-button collapsed headingR"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapsefour"
                >
                  STEP 4: SHIPPING METHOD
                </button>
              </h2>
              <div
                id="collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="headingfoure"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="mb-3">
                    Please select the preferred shipping method to use on this
                    order.
                  </p>
                  <strong className="mb-2">Free Shipping</strong>
                  <div className="mt-2 mb-3">
                    <input
                      type="radio"
                      id="html12"
                      name="fav_language1"
                      value="HTML"
                    />
                    <label htmlFor="html" className="ms-2">
                      Free Shipping <strong>($0.00)</strong>
                    </label>
                  </div>
                  <strong>Flat Rate</strong>

                  <div className="mt-2">
                    <input
                      type="radio"
                      id="html12dc"
                      name="fav_language1"
                      value="HTML"
                    />
                    <label htmlFor="html" className="ms-2">
                      Flat Shipping Rate <strong>($5.03)</strong>
                    </label>
                  </div>
                  <form>
                    <div className="form-group mt-3 ">
                      <label htmlFor="exampleFormControlTextarea1 ">
                        <strong> Add Comments About Your Order</strong>
                      </label>
                      <textarea
                        className="form-control mt-2 mb-5"
                        id="exampleFormControlTextarea1"
                        rows="8"
                      ></textarea>
                    </div>
                    <a href="" className="addto">
                      {" "}
                      Continue
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div className="accordion-item pt-2 pb-2 ">
              <h2 className="accordion-header" id="headingfive">
                <button
                  className="accordion-button collapsed headingR"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefive"
                  aria-expanded="false"
                  aria-controls="collapsefive"
                >
                  STEP 5: PAYMENT METHOD
                </button>
              </h2>
              <div
                id="collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="headingfoure"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="mb-3">
                    Please select the preferred shipping method to use on this
                    order.
                  </p>
                  <div className="mt-2 mb-2">
                    <input
                      type="radio"
                      id="html12"
                      name="fav_language1"
                      value="HTML"
                    />
                    <label htmlFor="html" className="ms-2">
                      Cash On Delivery
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="html12dc"
                      name="fav_language1"
                      value="HTML"
                    />
                    <label htmlFor="html" className="ms-2">
                      PayPal
                    </label>
                  </div>
                  <form>
                    <div className="form-group mt-3 ">
                      <label htmlFor="exampleFormControlTextarea1 ">
                        <strong> Add Comments About Your Order</strong>
                      </label>
                      <textarea
                        className="form-control mt-2 mb-5"
                        id="exampleFormControlTextarea1"
                        rows="8"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="policy"
                          value="yes"
                        />
                        <label htmlFor="vehicle1" className="ms-3">
                          I have read and agree to the
                          <strong> Terms & Conditions</strong>
                        </label>
                      </div>
                      <div>
                        <a href="" className="addto">
                          Continue
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="accordion-item pt-2 pb-2 ">
              <h2 className="accordion-header" id="headingsix">
                <button
                  className="accordion-button collapsed headingR"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsesix"
                  aria-expanded="false"
                  aria-controls="collapsesix"
                >
                  STEP 6: CONFIRM ORDER
                </button>
              </h2>
              <div
                id="collapsesix"
                className="accordion-collapse collapse"
                aria-labelledby="headingsix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <table className="table">
                    <thead>
                      <tr className="table-active">
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">MODEL</th>
                        <th scope="col">QUANTITY </th>
                        <th scope="col">PRICE </th>
                        <th scope="col">Total </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Canon EOS 5D</th>
                        <td>Product 3</td>
                        <td>1</td>
                        <td>£61.33 </td>
                        <td>£61.33</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-end">
                    <div>
                      <div className="mb-2">
                        <strong className="text-right">Sub-total :</strong>
                        <span className="ms-md-3"> £51.11</span>
                      </div>
                      <div className="mb-2 ">
                        <strong className="text-right">
                          Flat Shipping Rate:
                        </strong>
                        <span className="ms-md-3">£3.19</span>
                      </div>
                      <div className="mb-4 ">
                        <strong>Total:</strong>
                        <span className="ms-md-3">£66.37</span>
                      </div>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="d-flex justify-content-end">
                    <a className="addto ">Confirm Order</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
