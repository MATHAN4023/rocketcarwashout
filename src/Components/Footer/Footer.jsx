import React from "react";
import logo from "../../Assets/Icons/Logorocket.png";

function Footer() {
  return (
    <div className="container footcontainer my-5">
      <div className="row mainfoot">
        <div className="row"></div>
        <div className="col-lg-4 cpl-sm-12 withlogo text-center">
          <div className="col">
            <img src={logo} alt="" srcset="" />
          </div>
          <div className="col">
            <div className="text-white">
              <p>Copyright 2024 Redcubix</p>
              <p>Terms of service l Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 cpl-sm-12 text-center">
          <div className="abo col text-white">
            <div>
              <h2>Explore</h2>
            </div>
            <p className="abo">About Us</p>
            <p>Contact Us</p>
            <p>Service</p>
            <p>Gallery</p>
          </div>
        </div>
        <div className="col-lg-4 cpl-sm-12">
          <div className="abo col text-white text-center">
            <div>
              <h2>Explore</h2>
            </div>
            <p>
              Question or feedback? <br />
              We’d love to hear from you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
