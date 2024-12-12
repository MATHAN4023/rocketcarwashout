import React from "react";
import logo from "../../Assets/Icons/Logorocket.png";

function Footer() {
  return (
    <div className="container footcontainer my-5" id="contact">
      <div className="row mainfoot">
        {/* Logo and Copyright Section */}
        <div className="col-lg-4 col-sm-12 withlogo text-center">
          <div className="col">
            <img src={logo} alt="Logo" />
          </div>
          <div className="col">
            <div className="text-white">
              <p>Copyright 2024 Redcubix</p>
              <p>
                <a href="#terms" className="text-white text-decoration-none">Terms of Service</a> |{" "}
                <a href="#privacy" className="text-white text-decoration-none">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>

        {/* Explore Links */}
        <div className="col-lg-4 col-sm-12 text-center">
          <div className="abo col text-white">
            <div>
              <h2>Explore</h2>
            </div>
            <p><a href="#about" className="text-white text-decoration-none">About Us</a></p>
            <p><a href="#contact" className="text-white text-decoration-none">Contact Us</a></p>
            <p><a href="#services" className="text-white text-decoration-none">Services</a></p>
            <p><a href="#gallery" className="text-white text-decoration-none">Gallery</a></p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-lg-4 col-sm-12">
          <div className="abo col text-white text-center">
            <div>
              <h2>Get in Touch</h2>
            </div>
            <p>
              Questions or feedback? <br />
              We’d love to hear from you.
            </p>
            {/* Social Media Links */}
            <div className="social-media mt-3">
              <a href="https://www.facebook.com/profile.php?id=61561567861212" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-twitter"></i>
              </a> */}
              <a href="https://www.instagram.com/rocketcarwashvilankurichi/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-instagram"></i>
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-linkedin-in"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
