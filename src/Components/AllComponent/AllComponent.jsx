import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import "./AllComponent.css"; 
import Serviceimg from "../Serviceimg/Serviceimg";
import Counter from "../Counter/Counter";
import Star from "../StartComponent/Star";
import Locations from "../Location/Locations";
import TestimonialsCarousel from "../TestimonialsCarousel/TestimonialsCarousel";
import Appinstall from "../Appinstall/Appinstall";
import Footer from "../Footer/Footer";
import Exclusive from "../ExclusiveComponent/Exclusive";
import ChatBot from "../ChatBot/ChatBot";
import Franchise from "../Franchise/Franchise";
import Whyus from "../Whyus/Whyus";
import Appbar from "../Appbar/Appbar";


function AllComponent() {
  return (
    <div>
      <Appbar />
      <Hero />
      <ChatBot />
      <About />
      <Serviceimg />
      <Counter />
      <Exclusive />
      <Whyus />
      <Franchise />
      <Star />
      <Locations />
      {/* <TestimonialsCarousel /> */}
      <Appinstall />
      <Footer />

    </div>
  );
}

export default AllComponent;
