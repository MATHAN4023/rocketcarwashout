import React from "react";
import "./Exclusive.css";
import GLT from "../../Assets/Image/Extraservice/GlassTreatment.jpeg";
import EC from "../../Assets/Image/Extraservice/EngineTreatment.jpeg";
import AR from "../../Assets/Image/Extraservice/Anti-rash-Treatment.jpeg";
import AW from "../../Assets/Image/Extraservice/Alloy-Treatment.jpeg";
import LT from "../../Assets/Image/Extraservice/LeatherTreatment.jpeg";

const services = [
  { title: "HIGH RETURN ON INVESTMENT ", img: GLT, content: "The car care industry is booming, and Rocket Car Wash is at the forefront of this growth." },
  { title: "EXCLUSIVE TERRITORIES", img: EC, content: "Secure your place in the market with exclusive territories that allow you to build a strong and loyal customer base without the threat of internal competition." },
  { title: "TECHNOLOGY", img: LT, content: "Swift, efficient, and environmentally friendly, our technology ensures a high-speed shine that sets your car wash apart from the rest." },
  { title: "COMPREHENSIVE SUPPORT", img: AR, content: "Our franchise support extends beyond the launch, ensuring you have the tools and guidance needed for sustained growth." },
  { title: "OUR COMMUNITY", img: AW, content: "Become part of the Rocket Car Wash family, where franchisees share experiences, insights, and best practices." },
];

const Exclusive = () => {
 
  return (
    // <div className="exclusive-section" ref={sectionRef}>
    <div className="exclusive-section" id="services">
      <div className="exclusive-title">Our Service's</div>
      <div className="exclusive-cards-container">
        {services.map((service, index) => (
          <div key={index} className="exclusive-card">
            <div className="exclusive-card-image">
              <img src={service.img} alt={service.title} />
            </div>
            <div className="exclusive-card-text">
              <h3 className="paraH">{service.title}</h3>
              <p className="para">{service.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exclusive;
