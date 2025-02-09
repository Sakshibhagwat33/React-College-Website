
import React from "react";
import { Card, Row, Col, Carousel, Container } from "react-bootstrap";
import "./Campuslife.css";

const clubsData = [
  {
    id: 1,
    name: "Music Club",
    description: "Join the Music Club to explore different genres of music.",
    image: "music.jpg",
  },
  {
    id: 2,
    name: "Drama Club",
    description: "Express your creative side in the Drama Club in Student Skills. ",
    image: "drama.jpd.jpg",
  },
  {
    id: 3,
    name: "Sports Club",
    description: "Get involved in various sports activities and competitions.",
    image: "sport.jpg",
  },
];


const hostelAndFacilitiesData = [
  {
    name: "Hostel Availability",
    description:
      "Our campus provides comfortable hostel facilities for both male and female students.",
    image: "hostel.jpg",
  },
  {
    name: "Library",
    description: "The library is equipped with a wide range of books and journals.",
    image: "library.jpg",
  },
  {
    name: "Sports Facilities",
    description: "Our campus has sports facilities for football, basketball, and more.",
    image: "sport2.jpg",
  },
];

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    image: "",
    testimonial: "My college experience has been amazing! The faculty and campus facilities are top-notch.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "",
    testimonial: "I love the extracurricular activities offered here, especially the sports events and music club!",
  },
  {
    id: 3,
    name: "Mark Johnson",
    image: "https://via.placeholder.com/100",
    testimonial: "The hostel facilities are great, and the campus is beautiful. I feel at home here.",
  },
];

function CampusLife() {
  return (
    <div className="campus-life-container">
      <h1>Campus Life</h1>

      <h2>Clubs & Societies</h2>
      <Row>
        {clubsData.map((club) => (
          <Col md={4} key={club.id}>
            <Card>
              <Card.Img variant="top" src={club.image} />
              <Card.Body>
                <Card.Title>{club.name}</Card.Title>
                <Card.Text>{club.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div></div>

      <h2>Hostel & Campus Facilities</h2>
      <Row>
        {hostelAndFacilitiesData.map((facility, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Img variant="top" src={facility.image} />
              <Card.Body>
                <Card.Title>{facility.name}</Card.Title>
                <Card.Text>{facility.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2>Student Testimonials</h2>
      <Carousel>
        {testimonialsData.map((testimonial) => (
          <Carousel.Item key={testimonial.id}>
            <Container>
              <Row className="align-items-center">
                <Col md={4}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="d-block w-100 rounded-circle"
                  />
                </Col>
                <Col md={8}>
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.testimonial}</p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CampusLife;
