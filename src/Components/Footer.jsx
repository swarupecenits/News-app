import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer
        className="text-center  text-white"
        style={{ backgroundColor: "#215d99" }}
      >
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2 d-flex footer-titles ">
                <h6 className="text-uppercase font-weight-bold mx-3">
                  <Link to="/" className="text-decoration-none text-white">
                    Home
                  </Link>
                </h6>
                <h6 className="text-uppercase font-weight-bold mx-3">
                  <Link
                    to="/technology"
                    className="text-decoration-none text-white"
                  >
                    Technology
                  </Link>
                </h6>
                <h6 className="text-uppercase font-weight-bold mx-3">
                  <Link
                    to="/entertainment"
                    className="text-decoration-none text-white"
                  >
                    Entertainment
                  </Link>
                </h6>
                <h6 className="text-uppercase font-weight-bold mx-3">
                  <Link
                    to="/science"
                    className="text-decoration-none text-white"
                  >
                    Science
                  </Link>
                </h6>
                <h6 className="text-uppercase font-weight-bold mx-3">
                  <Link
                    to="/sports"
                    className="text-decoration-none text-white"
                  >
                    Sports
                  </Link>
                </h6>
              </div>
            </div>
          </section>

          <hr className="my-5" />

          <section className="mb-4">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 text-white">
                <p>
                  We are committed to providing you with the latest news, top
                  stories, and a user-friendly experience. Feel free to explore
                  our site's resources and connect with us.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-4">
            <a
              href="https://www.facebook.com/swarup.chanda.984?mibextid=ZbWKwL"
              target="blank"
              className="text-white me-4"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/this_is_swarup_/"
              target="blank"
              className="text-white me-4"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/_swarup_chanda"
              target="blank"
              className="text-white me-4"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://youtube.com/@this_is_swarup?si=H1DFtGwMpE9sKRPh"
              target="blank"
              className="text-white me-4"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/swarup-chanda-23053724a/"
              target="blank"
              className="text-white me-4"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/swarupecenits"
              target="blank"
              className="text-white me-4"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "#001f3f" }}>
          © 2023 Copyrights reserved to Swarup Chanda
        </div>
      </footer>
    </div>
  );
}

export default Footer;
