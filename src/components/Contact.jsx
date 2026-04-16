import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container glass-panel animate-fade-in">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to me for any work opportunities, or just to catch up!</p>
          
          <div className="info-items">
            <div className="info-item">
              <span className="icon">📧</span>
              <div className="details">
                <h4>Email</h4>
                <a href="mailto:devicharishmaburugupalli@gmail.com">devicharishmaburugupalli@gmail.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <span className="icon">📱</span>
              <div className="details">
                <h4>Phone</h4>
                <a href="tel:+19404659068">(940)-465-9068</a>
              </div>
            </div>
            
            <div className="info-item">
              <span className="icon">📍</span>
              <div className="details">
                <h4>Location</h4>
                <p>Denton, Texas, United States</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-placeholder">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
