import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import "./AcademicProgram.css";

const programsData = [
  {
    id: 1,
    name: "Undergraduate Program",
    description: "A 4-year program for bachelor degrees.",
    duration: "4 years",
    details: "Detailed curriculum, eligibility, and career opportunities for undergraduate programs.",
  },
  {
    id: 2,
    name: "Postgraduate Program",
    description: "A 2-year program for master's degrees.",
    duration: "2 years",
    details: "Detailed curriculum, eligibility, and career opportunities for postgraduate programs.",
  },
];

const facultyData = [
  {
    id: 1,
    name: "Dr. John Doe",
    position: "Professor",
    photo: "",
     contact: "(123) 456-7800"
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    position: "Associate Professor",
    photo: "",
    contact: "(123) 456-7890"
  },
];

function AcademicPrograms() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

return (
  <div className="academic-programs">
    <h1>Academic Programs</h1>

    <h2>Programs Offered</h2>
    <Row className="program-list">
      {programsData.map((program) => (
        <Col md={4} key={program.id} className="program-card">
          <Card>
            <Card.Body>
              <Card.Title>{program.name}</Card.Title>
              <Card.Text>{program.description}</Card.Text>
              <Card.Text><strong>Duration:</strong> {program.duration}</Card.Text>
              <Button variant="primary" onClick={() => handleShow(program)}>
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    {selectedProgram && (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProgram.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Program Details</h5>
          <p>{selectedProgram.details}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )}

    <h2>Faculty Members</h2>
    <Row className="faculty-list">
      {facultyData.map((faculty) => (
        <Col md={4} key={faculty.id} className="faculty-card">
          <Card>
            <Card.Img variant="top" src={faculty.photo} />
            <Card.Body>
              <Card.Title>{faculty.name}</Card.Title>
              <Card.Text>{faculty.position}</Card.Text>
              <Card.Text>Contact: {faculty.contact}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);
}

export default AcademicPrograms;

