import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

// Importing service images
import carwash from "../../Assets/Icons/Carwash.png";
import Rubbing from "../../Assets/Icons/detailing.png";
import Coating from "../../Assets/Icons/spray-gun.png";
import Cleaning from "../../Assets/Icons/vacuum.png";
import Paint from "../../Assets/Icons/paint.png";
import Tyre from "../../Assets/Icons/tire.png";
import mainimg from "../../Assets/Image/maincar.png";
import rocket from "../../Assets/Svg/rocket.svg";
import Circle from "../../Assets/Svg/arrcir.svg";

import "./Hero.css";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Services array with local image imports
  const services = [
    { name: "Car Wash", Image: carwash },
    { name: "Rubbing & Waxing", Image: Rubbing },
    { name: "Coating", Image: Coating },
    { name: "Internal Cleaning", Image: Cleaning },
    { name: "Tyre Care", Image: Tyre },
    { name: "Paint Protection", Image: Paint },
  ];

  return (
    <>
      <div className="hero-container text-center">
        {/* Header Section */}
        <div data-aos="fade-up" className="mb-4">
          <h1>
            Experience
            {/* <span className="hero-highlight"></span>  */}
          </h1>
          <div className="row align-items-center justify-content-center">
            <div className="col-auto d-flex align-items-center gap-4">
              {/* First Heading */}
              <h1 className="mb-0">the </h1>
              {/* Rocket Image */}
              <img
                src={rocket}
                alt="Rocket"
                className="img-fluid img-flu"
                style={{ maxHeight: "90px" }} // Adjust the size of the image
              />
              {/* Second Heading */}
              <h1 className="mb-0">Service</h1>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center  poflx">
          {/* Subheading */}
          <div
            data-aos="fade-right"
            className="col-12 col-md-2 text-center mb-3 mb-md-0"
          >
            <p className="hero-subtext">
              More than <br />{" "}
              <span className="highlight-years">12 Months</span>
            </p>
          </div>

          {/* Car Image */}
          <div
            data-aos="fade-right"
            className="col-12 col-md-8 text-center mb-3 mb-md-0"
          >
            <img
              src={mainimg} // Replace with your local car image path
              alt="Car"
              className="car-image img-fluid"
              style={{ width: "1100px" }}
            />
          </div>

          {/* Button */}
          <div
            data-aos="fade-left"
            className="col-12 col-md-2 boxley  text-start"
          >
            <a href="#services" className="cta-but">
              <img src={Circle} className="col-4" alt="" srcset="" />
              <div className="col-12 classblack">Look All Service</div>
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className="mycontainer col-md-6 col-lg-7 ">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 service-box">
                {/* <div className="service-card"> */}
                {/* Service Image */}
                <img
                  src={service.Image}
                  alt={service.name}
                  className="service-icon"
                />
                <p className="service-text">{service.name}</p>
              </div>
              // </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
      </div>
    </>
  );
}

export default Hero;
