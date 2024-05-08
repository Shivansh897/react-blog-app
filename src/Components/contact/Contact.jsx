import './contact.css'
import React, { useState } from 'react';


function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
          <address>
            <p>Email: <a href="mailto:contact@yourblog.com">contact@yourblog.com</a></p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Blog Street, City, Country</p>
          </address>
          <i className="fas fa-envelope contact-icon"></i>
        </div>
        <div className="contact-form">
          {submitted ? (
            <div className="submission-success">
              <p>Thank you for reaching out! We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus={true} 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit">
                <i className="fas fa-envelope"></i> Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
