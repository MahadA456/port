import React from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        <div id="skills" className="container text-center" style={{ paddingTop: '70px' }}>
            <h2>Skills</h2>
            <Container>
                <Row className="mb-3">
                    <Col md={4}>
                        <h5>React</h5>
                        <ProgressBar now={60} label={`60%`} />
                    </Col>
                    <Col md={4}>
                        <h5>Flutter</h5>
                        <ProgressBar now={50} label={`50%`} />
                    </Col>
                    <Col md={4}>
                        <h5>HTML/CSS</h5>
                        <ProgressBar now={60} label={`60%`} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;
