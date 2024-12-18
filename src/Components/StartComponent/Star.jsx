import React from "react";
import "./Star.css";
import star from "../../Assets/Image/star.png";

function Star() {
  return (
    <div className="container text-white">
      <div className="row">
        <div className="col-lg-6 col-sm-12 imgcl">
          <img className="img-count" src={star} alt="Car Wash" />
        </div>
        <div className="col-lg-6 col-sm-12 myflex">
          <div>
            <p className="headtextstar">Your Car Deserves the Best Care</p>
          </div>
          <div>
            <p className="subtextstart">
              Contact us for premium car wash services that make your car shine like new. 
              We ensure top-notch quality and customer satisfaction.
            </p>
          </div>
          {/* <div>
            <button className="contact-button">Contact Us</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Star;
