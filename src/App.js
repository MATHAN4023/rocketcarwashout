import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import AllComponent from "./Components/AllComponent/AllComponent";
import About from './Components/About/About'
import Serviceimg from "./Components/Serviceimg/Serviceimg";
import Counter from "./Components/Counter/Counter";
import Star from "./Components/StartComponent/Star";
import Locations from "./Components/Location/Locations";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TestimonialsCarousel from "./Components/TestimonialsCarousel/TestimonialsCarousel";
import Appinstall from "./Components/Appinstall/Appinstall";
import Footer from "./Components/Footer/Footer";
import Exclusive from "./Components/ExclusiveComponent/Exclusive";
import ChatBot from "./Components/ChatBot/ChatBot";
import Franchise from "./Components/Franchise/Franchise";
import Whyus from "./Components/Whyus/Whyus";
import Appbar from "./Components/Appbar/Appbar";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllComponent />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/serviceimg" element={<Serviceimg />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/star" element={<Star />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/testimonialscarousel" element={<TestimonialsCarousel />} />
        <Route path="/Appinstall" element={<Appinstall />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/exclusive" element={<Exclusive />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/appbar" element={<Appbar />} />
      </Routes>
    </Router>
  );
}

export default App;
