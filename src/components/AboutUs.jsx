import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";
import { useTheme } from "../Hooks/ThemeContext";
import { Link } from "react-router-dom";

function AboutUs() {
  const { darkMode } = useTheme(); // Use the useTheme hook

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-16 min-h-screen ${darkMode ? "bg-gray-800 text-gray-200" : "bg-blue-300 text-black"}`} // Adjust background and text colors
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl font-bold text-center mb-8 about-us-title ${darkMode ? "text-white" : "text-black"}`} // Adjust text color
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed about-us-content"
          >
            <h1 className={`text-3xl font-bold leading-relaxed mb-4 text-center ${darkMode ? "text-white" : "text-black"}`}>
              Dugsiga Darulkarim Primary & Secondary School waa xarun waxbarasho oo ku dadaasha inay ardaydeeda siiso waxbarasho tayo leh oo ku saleysan qiimaha diinta iyo dhaqanka.
            </h1>
            <p className={`text-xl leading-relaxed mb-4 text-center ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Waxaan aaminsanahay in waxbarashadu ay tahay furaha mustaqbal wanaagsan, waxaana naga go'an inaa ardaydeena ka caawino gaarida hadafkooda.
            </p>
            <Link to="/contact" className="bg-green-600 w-[100%] block text-center text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-800 transition-colors">
              Xog Dheeri
            </Link>
          </motion.div>
          <div>
            <img
              src="DarulkarimLogo.png"
              alt="About Us"
              className=" h-[380px] w-[380px] rounded-full shadow-md  md:h-[500px] md:w-[500px]"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutUs;