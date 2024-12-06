import React from "react";
import "./Whyus.css";
import roc from "../../Assets/Image/roc1.png";

function Whyus() {
  return (
    <div className="Fran my-5">
      <div className="circle-container">
        <img
          className="im"
          src={roc}
          alt="Machine"
          style={{ height: "200px", width: "200px" }}
        />

        {/* Six cards */}
        <div className="card card1">
          <div className="card-body">
            <h5 className="card-title text-center">High Roll</h5>
          </div>
        </div>

        <div className="card card2">
          <div className="card-body">
            <h5 className="card-title text-center">About Machines</h5>
          </div>
        </div>

        <div className="card card3">
          <div className="card-body">
            <h5 className="card-title text-center">Training</h5>
          </div>
        </div>

        <div className="card card4">
          <div className="card-body">
            <h5 className="card-title text-center">Trained Manpower Support</h5>
          </div>
        </div>

        <div className="card card5">
          <div className="card-body">
            <h5 className="card-title text-center">Chemical and Raw Material Support</h5>
          </div>
        </div>

        <div className="card card6">
          <div className="card-body">
            <h5 className="card-title text-center">Groundbreaking Marketing Support</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
