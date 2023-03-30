import React from "react";

export default function Login() {
  return (
    <div>
      <div className="container">
        <div className="row mb-5">
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
                  <i className="fa-solid fa-angle-right me-2"></i> password
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
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="row">
              <div className="d-flex justify-content-center">
                <p className="location mb-2">
                  Home <i className="fa-solid fa-angle-right ms-2 "></i>
                  <i className="fa-solid fa-angle-right me-2"></i>
                  Account <span className="ms-2"> Login</span>
                </p>
              </div>
              <h2 className="d-flex justify-content-center play">
                Account Login
              </h2>
              <div className=" col-12 col-md-6 mt-5">
                <div>
                  <p>NEW CUSTOMER</p>
                  <hr />
                </div>
                <div className="mt-4">
                  <strong>Register Account</strong>
                  <p className="mt-4 mb-5">
                    By creating an account you will be able to shop faster, be
                    up to date on an order's status, and keep track of the
                    orders you have previously made.
                  </p>
                  <a className="addto  "> Continue</a>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-5">
                <div>RETURNING CUSTOMER</div>
                <hr />
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
    </div>
  );
}
