import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Importing Intersection Observer Hook
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./CounterComponent.css";
import AOS from "aos";
import task1 from "../../Assets/Image/Task.png";

const Counter = () => {
  const { ref, inView } = useInView({ triggerOnce: true }); // Trigger only once when in view

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
        <div className="col-lg-6 col-sm-6 countcontainer" data-aos="fade-right">
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
        <div className="col-lg-2 col-sm-6 countbar" data-aos="zoom-in" ref={ref}>
          {inView && ( // Only render CountUp when the component is in view
            <>
              <div className="col-12 countbox">
                <div>
                  <div className="countno colr-1">
                    <CountUp start={0} end={10} duration={2} suffix="+" />
                  </div>
                  <p className="counttext">Branch</p>
                </div>
              </div>
              <div className="col-12 countbox">
                <div>
                  <div className="countno colr-2">
                    <CountUp start={0} end={100} duration={2} suffix="+" />
                  </div>
                  <p className="counttext">Car Washed Daily</p>
                </div>
              </div>
              <div className="col-12 countbox">
                <div>
                  <div className="countno colr-3">
                    <CountUp start={0} end={12} duration={2} suffix="+" />
                  </div>
                  <p className="counttext">Months Experienced</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Section: Image */}
        <div className="col-lg-4 col-sm-12 imgcl" data-aos="fade-left">
          <img className="img-count" src={task1} alt="Task" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
