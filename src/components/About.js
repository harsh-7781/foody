// src/About.js
import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="about-title"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
      
      <motion.div
        className="about-images"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img style={{cursor:"pointer"}}
          src="https://miro.medium.com/v2/resize:fit:948/1*D26YPlCdw4hd1cwMO6rAYw.png" 
          className="about-image"
          whileHover={{ scale: 1.05 }}
        />
        <motion.img style={{cursor:"pointer"}}
          src="https://www.goteso.com/products/assets/images/clone-scripts/swiggy/swiggy-app-clone-banner.png" 
          alt="Food Delivery"
          className="about-image"
          whileHover={{ scale: 1.05 }}
        />
        <motion.img style={{cursor:"pointer"}}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/51cde279346663.5d9763dc3c4b2.jpg" 
          alt="Delicious Food"
          className="about-image"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
      
      <motion.p
        className="about-description"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Welcome to our Swiggy clone website! Our mission is to deliver your favorite food to your doorstep swiftly and safely.
      </motion.p>
      <motion.p
        className="about-description"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        We have a wide variety of restaurants available for you to choose from. Enjoy delicious meals anytime, anywhere.
      </motion.p>
    </motion.div>
  );
};

export default About;
