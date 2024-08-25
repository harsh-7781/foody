// src/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="contact-title"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      
      <motion.div
        className="contact-info"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <p>Email: foody@swiggyclone.com</p>
        <p>Phone: +91 9322690669</p>
        <p>Address: Ghatkopar East, Mumbai - 77, India</p>
      </motion.div>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          className="contact-input"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="contact-input"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          placeholder="Your Message"
          className="contact-textarea"
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="contact-button"
          whileHover={{ scale: 1.1 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
