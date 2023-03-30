import React from "react";

export default function Navbar() {
  return (
    <div className="mb-4">
      <nav className="navbar navbar-expand-lg navbg  navbar-dark ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <i className="fa-solid fa-house"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav pt-0 pb-0">
              <li className="nav-item">
                <a className="nav-link  active " aria-current="page" href="#">
                  Categorise
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active " href="#">
                  Headers{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active  " href="#">
                  Menus{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Sliderd</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active " aria-current="page" href="#">
                  Footers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active  " aria-current="page" href="#">
                  Custom Block
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active " aria-current="page" href="#">
                  MY Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active " aria-current="page" href="#">
                  Information
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  active " aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
