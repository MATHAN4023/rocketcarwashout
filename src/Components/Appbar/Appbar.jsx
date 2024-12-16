import React, { useState, useEffect } from "react";
import "./Appbar.css";
import logo from "../../Assets/Icons/Logorocket.png";

const navItems = ["Home", "About", "Services", "Contact"];

const Appbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false); // State to control alert visibility

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      {/* AppBar */}
      <header className={`appbar ${visible ? "visible" : "hidden"}`}>
        <div className="appbar-container">
          <img src={logo} alt="Logo" className="logo" />

          {/* Navigation Items */}
          <nav className="navbar">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item} className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => handleScroll(item.toLowerCase())}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Book Now Button */}
          <button
            className="book-now"
            id="Booknow"
            onClick={() => setAlertOpen(true)}
          >
            Book Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={handleDrawerToggle}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Drawer for Mobile */}
      {mobileOpen && (
        <div className="drawer">
          <ul className="drawer-list">
            {navItems.map((item) => (
              <li key={item} className="drawer-item">
                <button
                  className="drawer-link"
                  onClick={() => handleScroll(item.toLowerCase())}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Stylish Alert Box */}
      {alertOpen && (
        <div className="alert-box-overlay">
          <div className="alert-box">
            <h2>Coming Soon!</h2>
            <p>We're working hard to make this feature available. Stay tuned!</p>
            <button className="alert-close" onClick={() => setAlertOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appbar;
