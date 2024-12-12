import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Modal } from "react-bootstrap";
import "./Branch.css";
import v1 from "../../Assets/Image/RocketBranch/Villankurichi/1.png";
import v2 from "../../Assets/Image/RocketBranch/Villankurichi/2.png";
import v3 from "../../Assets/Image/RocketBranch/Villankurichi/3.png";

const Branch = () => {
  const cards = [
    {
      id: 1,
      title: "Rocket CarWash - Villankurichi",
      image: "image1.jpg",
      address:
        "67/1a, Kalapatti Main Road, Rathinagiri Nagar, Villankurichi, Coimbatore, Tamil Nadu 641035",
      gallery: [v1, v2, v3],
    },
    {
      id: 2,
      title: "Rocket CarWash - Koundampalayam",
      image: "image2.jpg",
      address:
        "204/3, TVS Nagar - Koundampalayam Road, Kannamal Nagar Rd, Ashok Nagar West, Koundampalayam, Coimbatore, Tamil Nadu 641030",
      gallery: ["gallery2-1.jpg", "gallery2-2.jpg"],
    },
    {
      id: 3,
      title: "Rocket CarWash - Namakkal ",
      image: "image3.jpg",
      address:
        "Pon Nagar, Salem - Namakkal Rd, opposite to Indian Bank, Swamy Nagar, Namakkal, Tamil Nadu 637001",
      gallery: ["gallery3-1.jpg", "gallery3-2.jpg", "gallery3-3.jpg"],
    },
    {
      id: 4,
      title: "Rocket CarWash - Mogappair",
      image: "image4.jpg",
      address:
        "141, Paneer Nagar Main Rd, VGP Nagar, Mogappair West, Mogappair, Chennai, Tamil Nadu 600037",
      gallery: ["gallery4-1.jpg", "gallery4-2.jpg"],
    },
    {
      id: 5,
      title: "Rocket CarWash - Andhra Pradesh ",
      image: "image5.jpg",
      address:
        "Madanapalle Rd, gangavaram, palamaner, Reddivaripalle, Andhra Pradesh 517408",
      gallery: ["gallery5-1.jpg", "gallery5-2.jpg", "gallery5-3.jpg"],
    },
  ];

  const [showGallery, setShowGallery] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const sliderRef = useRef(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setCurrentImage(card.gallery[0]);
    setShowGallery(true);
  };

  const handleCloseGallery = () => setShowGallery(false);
  const handleThumbnailClick = (image) => setCurrentImage(image);

  const settings = {
    infinite: true,
    slidesToShow: 4, // Show 4 cards in a row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="branch-carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card) => (
          <div
            key={card.id}
            className="branch-card-container"
            onClick={() => handleCardClick(card)}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="branch-card">
              <img
                src={card.image}
                alt={card.title}
                className="branch-card-image"
              />
              <h5 className="branch-card-title">{card.title}</h5>
              {hoveredCard === card.id && (
                <p className="branch-address">{card.address}</p>
              )}
            </div>
          </div>
        ))}
      </Slider>

      <div className="carousel-controls">
        <button
          className="carousel-control-prev"
          onClick={() => sliderRef.current.slickPrev()}
        >
          Previous
        </button>
        <button
          className="carousel-control-next"
          onClick={() => sliderRef.current.slickNext()}
        >
          Next
        </button>
      </div>

      <Modal show={showGallery} onHide={handleCloseGallery} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="gallery-container">
            <div className="main-image-container">
              <img
                src={currentImage}
                alt="Selected"
                className="main-image"
                style={{
                  maxWidth: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="thumbnail-container">
              {selectedCard?.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(image)}
                  className={`thumbnail ${
                    currentImage === image ? "selected-thumbnail" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseGallery}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Branch;
