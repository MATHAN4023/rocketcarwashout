import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialsCarousel.css";
import TM1 from '../../Assets/Image/RocketBranch/Testimon/T1.jpg'
import TM2 from '../../Assets/Image/RocketBranch/Testimon/T2.png'
import TM3 from '../../Assets/Image/RocketBranch/Testimon/T3.png'

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      image: TM1, // Replace with actual image
      quote:
        "The best car wash I’ve ever had! My car looks brand new and shiny.",
      name: "Ashwini",
      designation: "Doctor",
    },
    {
      image: TM2, // Replace with actual image
      quote:
        "Fantastic service! The team was thorough, and my car feels spotless inside and out.",
      name: "Ashwin",
      designation: "Engineer",
    },
    {
      image: TM3, // Replace with actual image
      quote:
        "Quick and efficient! I love the attention to detail in cleaning every corner.",
      name: "Ramesh",
      designation: "Entrepreneur",
    },
    {
      image: TM1, // Replace with actual image
      quote:
        "Excellent value for the price. My car has never been this clean!",
      name: "Sneha",
      designation: "Designer",
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
          Our Customers' Reviews
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