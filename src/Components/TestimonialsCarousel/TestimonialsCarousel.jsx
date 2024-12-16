import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialsCarousel.css";
import TM1 from '../../Assets/Image/RocketBranch/Testimon/T1.jpg'
import TM2 from '../../Assets/Image/RocketBranch/Testimon/T2.png'
import TM3 from '../../Assets/Image/RocketBranch/Testimon/T3.png'
import TM4 from '../../Assets/Image/RocketBranch/Testimon/Pradeep.JPG'
import TM5 from '../../Assets/Image/RocketBranch/Testimon/Sound1.jpg'
import TM6 from '../../Assets/Image/RocketBranch/Testimon/Mathan.JPG'

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      image: TM4, // Replace with actual image
      quote: 
        "Absolutely amazing experience! They left my car looking brand new and smelling great. Highly recommended!",
      name: "Pradeep",
      designation: "Social Media Influencer",
    },
    {
      image: TM6, // Replace with actual image
      quote: 
        "Super friendly staff and fantastic attention to detail. My car hasn’t looked this good in years!",
      name: "Mathan",
      designation: "Developer",
    },
    {
      image: TM5, // Replace with actual image
      quote: 
        "A truly hassle-free service. Quick, professional, and worth every penny. Great job!",
      name: "Sowndhar",
      designation: "Photographer",
    },
    {
      image: TM2, // Replace with actual image
      quote: 
        "They took care of everything! The service was excellent, and my car looks spotless inside and out.",
      name: "Ashwin",
      designation: "Content Creator",
    },
    
    // Add more testimonials here
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Manage current slide index

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-white">
      <div className="w-75">
        <h2 className="text-center mb-4 about-txt" data-aos="fade-down">
          Our Customers Reviews
        </h2>
        <Carousel
          indicators={false}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          nextIcon={null} // Remove default Bootstrap arrows
          prevIcon={null}
        >
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex align-items-center my-5 mydiv">
                {/* Image Section */}
                <div className="flex-shrink-0 me-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded"
                    style={{
                      height: "300px",
                      width: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="flex-grow-1">
                  <blockquote className="blockquote">
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                  <footer className="blockquote-footer">
                    {testimonial.name}, <span>{testimonial.designation}</span>
                  </footer>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Custom Pagination Below */}
        <div className="d-flex justify-content-end align-items-center mt-3">
          <span className="me-3">
            {activeIndex + 1}/{testimonials.length}
          </span>
          <button
            className="btn btn-outline-light rounded-circle me-2"
            onClick={() =>
              setActiveIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
              )
            }
          >
            &#8592;
          </button>
          <button
            className="btn btn-outline-light rounded-circle"
            onClick={() =>
              setActiveIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
              )
            }
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;