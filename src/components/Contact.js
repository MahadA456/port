import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <div className="container">
            <h2>Contact Me</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contact;
