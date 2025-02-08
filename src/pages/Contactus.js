
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
src="https://www.google.com/maps/embed/v1/place?q=college&key=YOUR_GOOGLE_MAPS_API_KEY"
allowFullScreen
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