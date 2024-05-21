import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';

function Projects() {
    const [showDetails, setShowDetails] = useState({ mechanify: false, simon: false, dice: false });

    const handleShow = (project) => setShowDetails({ ...showDetails, [project]: true });
    const handleClose = () => setShowDetails({ mechanify: false, simon: false, dice: false });

    return (
        <Container id="projects" className="text-center mt-5" style={{ paddingTop: '70px' }}>
            <h2>Projects</h2>
            <Row className="g-4">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/Mechanify.jpeg" />
                        <Card.Body>
                            <Card.Title>Mechanify</Card.Title>
                            <Card.Text>
                                A Flutter app that simplifies finding nearby mechanics for users.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShow('mechanify')}>More Details</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={showDetails.mechanify} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Mechanify Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Mechanify is developed in Flutter and designed to help users quickly find nearby mechanics. The app uses geolocation to provide the closest service options.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/simon.PNG" />
                        <Card.Body>
                            <Card.Title>Simon Game</Card.Title>
                            <Card.Text>
                                A web-based memory test game that increases in difficulty level by level.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShow('simon')}>More Details</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={showDetails.simon} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Simon Game Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            The Simon Game is a challenging memory game that requires players to repeat sequences of colors and sounds. As the game progresses, the sequences become longer and more complex, testing memory and concentration.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/dice.PNG" />
                        <Card.Body>
                            <Card.Title>Dice Game</Card.Title>
                            <Card.Text>
                                A fun and simple game based on luck, perfect for quick entertainment.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShow('dice')}>More Details</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={showDetails.dice} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Dice Game Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            The Dice Game is all about luck. Players roll dice and depending on the outcome, they win or lose. It's a great game to play with friends and family for some quick fun and excitement.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
