import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialsCarousel.css";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      image: "https://via.placeholder.com/200", // Replace with actual image
      quote:
        "Productivity is being able to do things that you were never able to do before.",
      name: "Aswin",
      designation: "Doctor",
    },
    {
      image: "https://via.placeholder.com/200", // Replace with actual image
      quote:
        "Productivity is being able to do things that you were never able to do before.",
      name: "Aswin",
      designation: "Doctor",
    },
    {
      image: "https://via.placeholder.com/200", // Replace with actual image
      quote: "Success is not final; failure is not fatal: it is the courage to continue that counts.",
      name: "Priya",
      designation: "Engineer",
    },
    {
      image: "https://via.placeholder.com/200", // Replace with actual image
      quote: "Success is not final; failure is not fatal: it is the courage to continue that counts.",
      name: "Priya",
      designation: "Engineer",
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
          Over Customers Opinion
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
