import React, { useState, useEffect } from "react";
import "./Appbar.css";
import logo from "../../Assets/Icons/Logorocket.png";

const navItems = ["Home", "About", "Services", "Contact"];

const Appbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Smooth scroll to section
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false); // Close drawer after scrolling (for mobile)
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
          {/* Logo */}
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
          <button className="book-now">Book Now</button>

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
    </div>
  );
};

export default Appbar;
