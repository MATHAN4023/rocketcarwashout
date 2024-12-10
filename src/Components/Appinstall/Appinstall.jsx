import React from "react";
import comming from "../../Assets/Image/Commingzoon.png";
import gb from "../../Assets/Icons/Google.png";
import ab from "../../Assets/Icons/apple.png";
import "./Appinstall.css";

function Appinstall() {
  return (
    <div className="container appcontainer my-5">
      <div className="row mywhite my-5">
        <div className="row">
          <div
            className="col text-center about-txt"
            style={{ color: "black" }}
            data-aos="fade-down"
          >
            Launching Shortly!
          </div>
        </div>
        <div className="row toppa">
        <div className="col-lg-1"></div>
          <div className="col-lg-6 col-sm-12 myflex">
            <div>
              <p className="headtextstar">From what if to what’s next</p>
            </div>
            <div>
              <p className="subtextstart">
                Task List, the award-winning personal task manager that helps
                you achieve your goals.
              </p>
            </div>
            <div className="dspac">
              <div className="col-lg-4 cpl-sm-6">
                <img src={gb} alt="" srcset="" />
              </div>

              <div className="col-lg-4 cpl-sm-6">
                <img src={ab} alt="" srcset="" />
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 imgcl">
            <img className="img-count1" src={comming} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appinstall;
