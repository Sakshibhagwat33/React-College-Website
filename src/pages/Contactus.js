
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './ContactUs.css';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  };

  return (
    <Container className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <Form className="contact-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            name="subject"
            value={formData.subject}
            required
/>
</Form.Group>

<Form.Group controlId="formMessage">
  <Form.Label>Message</Form.Label>
  <Form.Control
    as="textarea"
    rows={3}
    placeholder="Your message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    required
  />
</Form.Group>

<Button className="submit-btn" variant="primary" type="submit">
  Submit
</Button>
</Form>

<h2 className="contact-subtitle">Our Location</h2>
<iframe
  width="100%"
  height="450"
  frameBorder="0"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30237.66749737409!2d73.822243!3d18.624565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8612b48fd3f%3A0xf080ec8435d265c6!2sDr.%20D.%20Y.%20Patil%20Vidyapeeth%2C%20Pune!5e0!3m2!1sen!2sin!4v1616578921000!5m2!1sen!2sin"
></iframe>


<h2 className="contact-subtitle">Follow Us</h2>
<div className="social-links">
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
</div>
</Container>
);
}

export default Contactus;