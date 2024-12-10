import React from "react";
import "./Whyus.css";
import roc from "../../Assets/Image/roc1.png"; // Replace with your image path
import roc1 from "../../Assets/Icons/Rock1.png"; // Replace with your image path
import logroc from "../../Assets/Icons/Logorocket.png";

import f1 from "../../Assets/Image/Fran/f1.jpeg";
import f2 from "../../Assets/Image/Fran/f2.jpeg";
import f3 from "../../Assets/Image/Fran/f3.jpeg";
import f4 from "../../Assets/Image/Fran/f4.jpeg";
import f5 from "../../Assets/Image/Fran/f5.jpeg";
import f6 from "../../Assets/Image/Fran/f6.jpeg";

function Whyus() {
  return (
    <div className=" fluied appcontainer  ">
      <div className="row con">
        <div className="col-lg-6 col-sm-12 d-flex">
          <div className="Main-text-container">
            {/* <div className="log-img">
              <img src={roc1} alt="Logo" className="logo-image" />
            </div>
            <div className="spaceremover"> */}

            <div className="main-text headtextstar">
              Own the Future, One Franchise at a Time!
            </div>
            <div className="sub-text subtextstart">
              Join a proven business model and unlock your potential for
              success—start your franchise journey today!
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="col-lg-6  content-ca">
          <div className="sec-main-cont">
            <div className="div1">
              {" "}
              <div className="div11 col-lg-6 ">
                <div className="div111">
                  <div className="mm">
                    <img className="divimg" src={f5} alt="" />
                    <div className="image-overlay-text1">Chemical & Row materials support</div>
                  </div>
                </div>
              </div>
              <div className="div12 col-lg-6  kkkk">
                <div className="div13">
                  <div className="mm">
                    <img className="divimg-1" src={f2} alt="" />
                    <div className="image-overlay-text1">Marketing Support</div>
                  </div>
                </div>
                <div className="div14">
                  <div className="mm">
                    <img className="divimg-2" src={f1} alt="" />
                    <div className="image-overlay-text1"> High ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="sec-main-cont1">
            <div className="div18 col-lg-6  ">
              <div className="div15">
                <div className="mm">
                  <img className="divimg-3" src={f3} alt="" />
                  <div className="image-overlay-text1">Trained Man Power</div>
                </div>
              </div>
            </div>
            <div className="div18 col-lg-6  ">
              <div className="div16">
                <div className="mm">
                  <img className="divimg-4" src={f4} alt="" />
                  <div className="image-overlay-text1">Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
