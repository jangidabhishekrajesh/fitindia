import React from "react";
import { Link } from "react-router-dom";


let Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
           <span style={{fontSize:"28px"}}><b className="text-warning">Fit</b><b className="text-primary">|</b><b className="text-success">India</b></span> 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#NavLink"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="NavLink">
            <ul className="navbar-nav">
              <li className="nav-item" id="hover-nav">
                <Link
                  to="/"
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <div className="dropdown" id="hover-nav">
                <button className="btn btn-light dropdown-toggle text-muted" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Programs
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item" id="hover-nav-1" to="/corporate">Corporate Membership</Link></li>
                  <li><Link className="dropdown-item" id="hover-nav-1" to="/personaltraining">Personal Training Program</Link></li>
                  <li><Link className="dropdown-item" id="hover-nav-1" to="/quick">Quick Result Program</Link></li>
                  <li><Link className="dropdown-item" id="hover-nav-1" to="/group">Group Program</Link></li>
                  <li><Link className="dropdown-item" id="hover-nav-1" to="/wellness">Corporate Wellness Program</Link></li>
                </ul>
              </div>
              <li className="nav-item" id="hover-nav">
                <Link to="/franchise" className="nav-link">
                  Franchise
                </Link>
              </li>
              <li className="nav-item" id="hover-nav">
                <Link to="/gallery" className="nav-link">
                  Gallery
                </Link>
              </li>
              <li className="nav-item" id="hover-nav">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
