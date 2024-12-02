import React from "react";
import "./Star.css";
import star from "../../Assets/Image/star.png";

function Star() {
  return (
    <div className="container text-white ">
      <div className="row">
        <div className="col-lg-6 col-sm-12 imgcl">
          <img  className="img-count" src={star} alt="" srcset="" />
        </div>
        <div className="col-lg-6 col-sm-12 myflex">
          <div>
            <p className="headtextstar">From what if to what’s next</p>
          </div>
          <div>
            <p className="subtextstart">
              Task List, the award-winning personal task manager that helps you
              achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Star;
