import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './EventsAndNews.css';

const eventsData = [
  { id: 1, date: '2025-01-25', title: 'Annual Sports Day', description: 'Join us for a day of fun and competition.' },
  { id: 2, date: '2025-02-10', title: 'Tech Talk by Industry Experts', description: 'Learn about the latest trends in technology.' },
  { id: 3, date: '2025-03-05', title: 'Cultural Fest', description: 'A celebration of arts, culture, and diversity.' },
];

const newsData = [
  { id: 1, title: 'College Wins National Championship', description: 'Our college team has won the national sports championship.', date: '2025-01-10' },
  { id: 2, title: 'New Research Center Inaugurated', description: 'A new research center has been inaugurated on campus to promote innovation.', date: '2025-01-12' },
];

function EventsAndNews() {
  return (
    <Container className="events-news-container">
      <h1 className="section-title">Events & News</h1>

      <h2 className="sub-title">Upcoming Events</h2>
      <Row>
        {eventsData.map((event) => (
          <Col md={4} key={event.id}>
            <Card className="event-card">
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="sub-title">Latest News</h2>
      <Row>
        {newsData.map((news) => (
          <Col md={4} key={news.id}>
            <Card className="news-card">
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{news.date}</Card.Subtitle>
                <Card.Text>{news.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EventsAndNews;