import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Modal } from "react-bootstrap";
import "./Branch.css";
import v1 from "../../Assets/Image/RocketBranch/Villankurichi/1.png";
import v2 from "../../Assets/Image/RocketBranch/Villankurichi/2.png";
import v3 from "../../Assets/Image/RocketBranch/Villankurichi/3.png";
import T1 from "../../Assets/Image/RocketBranch/Place/Coimbatore.png";
import T2 from "../../Assets/Image/RocketBranch/Place/Chennai.png";
import T3 from "../../Assets/Image/RocketBranch/Place/Namakkal1.png";
import T4 from "../../Assets/Image/RocketBranch/Place/Andhra Pradesh.png";
import T5 from "../../Assets/Image/RocketBranch/Place/CB1.png";

import N1 from "../../Assets/Image/RocketBranch/Namakal/N1.png";
import N2 from "../../Assets/Image/RocketBranch/Namakal/N2.png";
import N3 from "../../Assets/Image/RocketBranch/Namakal/N3.png";

import C1 from "../../Assets/Image/RocketBranch/Chennai/C1.png";
import C2 from "../../Assets/Image/RocketBranch/Chennai/C2.png";
import C3 from "../../Assets/Image/RocketBranch/Chennai/C3.png";
import C4 from "../../Assets/Image/RocketBranch/Chennai/C4.png";

import K1 from "../../Assets/Image/RocketBranch/Kownd/K1.png";
import K2 from "../../Assets/Image/RocketBranch/Kownd/K2.png";

import A1 from "../../Assets/Image/RocketBranch/Andra/A1.png";

const Branch = () => {
  const cards = [
    {
      id: 1,
      title: "Rocket CarWash - Villankurichi",
      image: T1,
      address:
        "67/1a, Kalapatti Main Road, Rathinagiri Nagar, Villankurichi, Coimbatore, Tamil Nadu 641035",
      gallery: [v1, v2, v3],
    },

    {
      id: 3,
      title: "Rocket CarWash - Namakkal ",
      image: T3,
      address:
        "Pon Nagar, Salem - Namakkal Rd, opposite to Indian Bank, Swamy Nagar, Namakkal, Tamil Nadu 637001",
      gallery: [N1, N2, N3],
    },
    {
      id: 4,
      title: "Rocket CarWash - Mogappair",
      image: T2,
      address:
        "141, Paneer Nagar Main Rd, VGP Nagar, Mogappair West, Mogappair, Chennai, Tamil Nadu 600037",
      gallery: [C1, C2, C3, C4],
    },
    {
      id: 2,
      title: "Rocket CarWash - Koundampalayam",
      image: T5,
      address:
        "204/3, TVS Nagar - Koundampalayam Road, Kannamal Nagar Rd, Ashok Nagar West, Koundampalayam, Coimbatore, Tamil Nadu 641030",
      gallery: [K1, K2],
    },
    {
      id: 5,
      title: "Rocket CarWash - Andhra Pradesh ",
      image: T4,
      address:
        "Madanapalle Rd, gangavaram, palamaner, Reddivaripalle, Andhra Pradesh 517408",
      gallery: [A1],
    },
  ];

  const [showGallery, setShowGallery] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const sliderRef = useRef(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setCurrentImage(card.gallery[0]);
    setShowGallery(true);
  };

  const handleCloseGallery = () => setShowGallery(false);
  const handleThumbnailClick = (image) => setCurrentImage(image);

  // Update isMobile based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial load

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          >
            <div className="branch-card">
              <div className="branch-card-image-container">
                <img
                  src={card.image}
                  alt={card.title}
                  className="branch-card-image"
                />
              </div>
              <h5 className="branch-card-title">{card.title}</h5>
              {/* Show address only on mobile or when hovering */}
              {(isMobile || selectedCard?.id === card.id) && (
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
        <Modal.Body style={{ backgroundColor: "black" }}>
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
      </Modal>
    </div>
  );
};

export default Branch;
