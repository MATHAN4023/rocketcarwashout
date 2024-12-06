import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./About.css";
import AOS from "aos";
import spring from "../../Assets/Svg/spring.svg";
import spring2 from "../../Assets/Svg/Spiner2.svg";
import admin1 from "../../Assets/Image/cl.jpg";
// import admin2 from '../../Assets/Image/Jhon.jpg'
import admin2 from '../../Assets/Image/Admin3.jpg'

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="container aboutcontainer my-5">
      {/* About Us Heading */}
      <div className="row">
        <div className="col text-center about-txt" data-aos="fade-down">
          About US
        </div>
      </div>

      {/* Details Container */}
      <div className="row my-5">
        <div className="col-lg-1 spring" data-aos="fade-right">
          <img src={spring} alt="Loading" />
        </div>
        <div className="col-lg-5" data-aos="fade-up">
          <div className="img-container">
            <img src={admin2} alt="Admin" />
          </div>
          <p className="color-red my-2">Mr.John</p>
          <p className="color-white">Business Analyst</p>
        </div>
        <div className="col-lg-5" data-aos="fade-left">
          <p className="about-text-content">
            "Mr.John is a seasoned business analyst with a keen eye for market
            trends and strategic decision-making. A fitness enthusiast and car
            lover, he balances his professional life with a passion for health
            and automobiles. As the owner of Rocket Car Wash, he combines his
            business acumen with his enthusiasm for cars, providing exceptional
            car detailing services while maintaining a commitment to quality and
            customer satisfaction."
          </p>
        </div>
        <div className="col-lg-1 spring"></div>
      </div>

      {/* Second Admin */}
      <div className="row my-5 blockdiv-1">
        <div className="col-lg-1 spring" data-aos="fade-right"></div>
        <div className="col-lg-5" data-aos="fade-up">
          <p className="about-text-content">
            "They say that detailers are not made, they are born. Detailing is a
            way of life. Getting into the minutest of details in the quest for
            perfection. Hence the name 'Detailingwolves.' Introducing you to the
            world of perfection."
          </p>
        </div>
        <div className="col-lg-5 alighend" data-aos="zoom-in">
          <div className="img-container-1">
            <img src={admin1} alt="Admin" />
          </div>
          <p className="color-red2 my-2">Mr .Clayton</p>
          <p className="color-white2">Position</p>
        </div>
        <div className="col-lg-1 spring flip-horizontal" data-aos="fade-left">
          <img src={spring2} alt="Loading" />
        </div>
      </div>
    </div>
  );
}

export default About;
