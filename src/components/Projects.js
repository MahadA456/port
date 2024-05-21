import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Projects() {
    return (
        <div className="container text-center">
            <h2>Projects</h2>
            <div className="row">
                {/* Example Project */}
                <div className="col-md-4">
                    <Card>
                        <Card.Img variant="top" src="project_image_url" />
                        <Card.Body>
                            <Card.Title>Project Title</Card.Title>
                            <Card.Text>Some description of the project...</Card.Text>
                            <Button variant="primary">More Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* Repeat for other projects */}
            </div>
        </div>
    );
}

export default Projects;
