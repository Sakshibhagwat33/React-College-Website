
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const alumniStories = [
  { name: 'John Doe', story: 'John is now a software engineer at Google.' },
  { name: 'Jane Smith', story: 'Jane is now a successful entrepreneur with her own tech startup.' },
];

function Alumni() {
  const [alumniData, setAlumniData] = useState({
    name: '',
    yearOfGraduation: '',
    successStory: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumniData({
      ...alumniData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Alumni details submitted');
  };

  return (
    <Container>
      <h1>Alumni</h1>

      <h2>Success Stories</h2>
      <Row>
        {alumniStories.map((story, index) => (
          <Col md={4} key={index}>
            <div>
              <h4>{story.name}</h4>
              <p>{story.story}</p>
            </div>
          </Col>
        ))}
      </Row>

      <h2>Alumni Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={alumniData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formYearOfGraduation">
          <Form.Label>Year of Graduation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your graduation year"
            name="yearOfGraduation"
            value={alumniData.yearOfGraduation}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formSuccessStory">
          <Form.Label>Success Story</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your success story"
            name="successStory"
            value={alumniData.successStory}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Alumni;
