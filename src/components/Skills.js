import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return (
        <div id="skills" className="container text-center" style={{ paddingTop: '70px' }}>
            <h2>Skills</h2>
            <Container>
                <Row className="mb-3">
                    <Col md={4} className="skill-item">
                        <FontAwesomeIcon icon={faMobileAlt} size="4x" />
                        <h5>Flutter</h5>
                        <p>Advanced</p>
                    </Col>
                    <Col md={4} className="skill-item">
                        <FontAwesomeIcon icon={faCode} size="4x" />
                        <h5>Python</h5>
                        <p>Intermediate</p>
                    </Col>
                    <Col md={4} className="skill-item">
                        <FontAwesomeIcon icon={faDatabase} size="4x" />
                        <h5>Mysql</h5>
                        <p>Beginner</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;
