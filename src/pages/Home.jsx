// src/pages/Home.jsx
    import React from "react";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import AboutUs from "../components/AboutUs";
import Faculty from "../components/Faculty";
import TopStudents from "../components/TopStudents";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Subjects from "../components/Subjects";

    function Home() {
      return (
        <div> {/* Add a Tailwind CSS class */}
        <Hero />
        <AboutUs />
        <Programs />
        <Subjects />
        <TopStudents />
        <Contact />
        </div>
      );
    }

    export default Home;