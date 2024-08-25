// src/Instamart.js
import React from 'react';
import { motion } from 'framer-motion';
const Instamart = () => {
  return (
    <motion.div
      className="instamart-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="instamart-title"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Instamart
      </motion.h1>
      
      <motion.div
        className="instamart-info"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p>Get groceries delivered in minutes!</p>
        <p>Instamart brings you everything you need, right to your doorstep.</p>
      </motion.div>

      <motion.div
        className="instamart-images"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="https://thehardcopy.co/wp-content/uploads/Swiggy-Instamart-Design-Process-.jpg" // Replace with actual image URL
          alt="Groceries"
          className="instamart-image"
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src="https://i0.wp.com/www.medianama.com/wp-content/uploads/2024/04/Swiggy-Instamart.png?fit=2000%2C1125&ssl=1" // Replace with actual image URL
          alt="Delivery"
          className="instamart-image"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      <motion.button
        className="instamart-button"
        whileHover={{ scale: 1.1 }}
      >
        Start Shopping
      </motion.button>
    </motion.div>
  );
};

export default Instamart;
