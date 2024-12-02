import React from "react";
import serviceimg from '../../Assets/Image/Serviceimg.png'
import './Serviceimg.css'

function Serviceimg() {
  return (
    <div className="container sevicecontainer my-5 ">
      <div className="row">
        <div className="col-md-1 col-sm-0"></div>
        <div className="col-md-10 col-sm-0 sevice-container">
          <img src={serviceimg} className="serviceimage" alt="" srcset="" />
        </div>
        <div className="col-md-1 col-sm-0"></div>
      </div>
    </div>
  );
}

export default Serviceimg;
