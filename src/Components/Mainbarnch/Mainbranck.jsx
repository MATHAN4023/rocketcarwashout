import React from "react";
import "./Mainbranch.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

import v11 from "../../Assets/Image/selected/1.JPG";
import v12 from "../../Assets/Image/selected/2.JPG";
import v13 from "../../Assets/Image/selected/3.JPG";
import v14 from "../../Assets/Image/selected/4.JPG";
import v15 from "../../Assets/Image/selected/5.JPG";
import v16 from "../../Assets/Image/selected/6.JPG";
import v17 from "../../Assets/Image/selected/7.JPG";

function Mainbranch() {
  return (
    <div className="container text-white">
      
      <div className="row">
        <div className="col text-center about-txt" data-aos="fade-down">
        
        </div>
      </div>
      <div className="container1  my-5">
        <div className="col-lg-6 col-sm-12 imgcl borderradies">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
          >
            <div>
              <img src={v11} alt="Slide 1" />
            </div>
            <div>
              <img src={v12} alt="Slide 2" />
            </div>
            <div>
              <img src={v13} alt="Slide 3" />
            </div>
            <div>
              <img src={v14} alt="Slide 4" />
            </div>
            <div>
              <img src={v15} alt="Slide 5" />
            </div>
            <div>
              <img src={v16} alt="Slide 6" />
            </div>
          </Carousel>
        </div>
        <div className="col-lg-6 col-sm-12 myflex textal">
          <div>
            <p className="headtextstar TEXTLEY">Prime Location</p>
          </div>
          <div>
            <p>ROCKET CARWASH - VILLANKURICHI   </p>
          </div>
          <div>
            <p className="subtextstart">
              67/1a, Kalapatti Main Road,
              <br />
              Rathinagiri Nagar, Villankurichi, <br />
              Coimbatore, Tamil Nadu <br />
              641035
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbranch;
