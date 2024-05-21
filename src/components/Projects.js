import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';

function Projects() {
    const [showDetails, setShowDetails] = useState({
        mechanify: false,
        barber: false,
        catalog: false,
        mlsa: false,
        menumarvel: false
    });

    const handleShow = (project) => setShowDetails({ ...showDetails, [project]: true });
    const handleClose = () => setShowDetails({
        mechanify: false,
        barber: false,
        catalog: false,
        mlsa: false,
        menumarvel: false
    });

    return (
        <Container id="projects" className="text-center mt-5" style={{ paddingTop: '70px' }}>
            <h2>Projects</h2>
            <Row className="g-4">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/Mechanify1.jpeg" alt="Mechanify screenshot" />
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
                        <Card.Img variant="top" src="/Barber.jpeg" alt="Barber screenshot" />
                        <Card.Body>
                            <Card.Title>Barber App</Card.Title>
                            <Card.Text>
                                A Flutter app that allows users to find and book appointments with barbers.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShow('barber')}>More Details</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={showDetails.barber} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Barber App Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            The Barber app helps users find local barbers and book appointments. Built with Flutter, it provides a seamless booking experience.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/Catalog.jpeg" alt="Catalog screenshot" />
                        <Card.Body>
                            <Card.Title>Catalog App</Card.Title>
                            <Card.Text>
                                A Flutter app that showcases products in a beautiful catalog format.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShow('catalog')}>More Details</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={showDetails.catalog} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Catalog App Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            The Catalog app, built with Flutter, showcases products in a visually appealing format, allowing users to browse through various items effortlessly.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/MLSA.jpeg" alt="MLSA screenshot" />
                        <Card.Body>
                            <Card.Title>MLSA App</Card.Title>
                            <Card.Text>
                                A Flutter app for managing MLSA events and resources.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShow('mlsa')}>More Details</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={showDetails.mlsa} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>MLSA App Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            The MLSA app, created with Flutter, helps manage events, resources, and communications for the Microsoft Learn Student Ambassadors community.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/MenuMarvel.jpeg" alt="MenuMarvel screenshot" />
                        <Card.Body>
                            <Card.Title>MenuMarvel</Card.Title>
                            <Card.Text>
                                A .NET-based web application for managing restaurant menus.
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleShow('menumarvel')}>More Details</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={showDetails.menumarvel} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>MenuMarvel Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            MenuMarvel, developed using .NET, is a comprehensive solution for managing restaurant menus, orders, and customer feedback.
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
