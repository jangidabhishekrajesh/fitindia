import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center text-lg-start bg-dark text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
          <div className="me-5 d-none d-lg-block">
          <h6 className="text-uppercase fw-bold">
                  <i className="fas fa-gem"></i>  Fit | India
                </h6>
          </div>
          <div>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </section>
        <div
          className="text-center p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <Link className="text-reset fw-bold" to="https://www.fitindia.com/">
            &nbsp;FIT|India
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
