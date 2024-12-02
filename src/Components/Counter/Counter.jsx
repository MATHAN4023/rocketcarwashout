import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./CounterComponent.css";
import AOS from "aos";
import task1 from "../../Assets/Image/Task.png";

const Counter = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true,     // Ensure animations happen only once
    });
  }, []);

  return (
    <div className="container text-white py-5">
      <div className="row counter-container">
        {/* Left Section: Text */}
        <div
          className="col-lg-6 col-sm-6 countcontainer"
          data-aos="fade-right"
        >
          <div>
            <p className="headtext">From what if to what’s next</p>
          </div>
          <div>
            <p className="subtext">
              Task List, the award-winning personal task manager that helps you
              achieve your goals.
            </p>
          </div>
        </div>

        {/* Middle Section: Counters */}
        <div
          className="col-lg-2 col-sm-6 countbar"
          data-aos="zoom-in"
        >
          <div className="col-12 countbox">
            <div>
              <div className="countno colr-1">10+</div>
              <p className="counttext">Branch</p>
            </div>
          </div>
          <div className="col-12 countbox">
            <div>
              <div className="countno colr-2">100+</div>
              <p className="counttext">Car Washed Daily</p>
            </div>
          </div>
          <div className="col-12 countbox">
            <div>
              <div className="countno colr-3">12+</div>
              <p className="counttext">Months Experienced</p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div
          className="col-lg-4 col-sm-12 imgcl"
          data-aos="fade-left"
        >
          <img className="img-count" src={task1} alt="Task" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
