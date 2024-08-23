import React from 'react';
const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      
      <section className="contact-details">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to share your feedback, we're here to help.</p>
        
        <ul>
          <li><strong>Email:</strong> support@foody7781.com</li>
          <li><strong>Phone:</strong> +91 93226-90669</li>
          <li><strong>Address:</strong> 123 Foodie Lane, Gourmet City, Country</li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;