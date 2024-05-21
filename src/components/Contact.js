import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <Container id="contact" className="text-center mt-5" style={{ paddingTop: '70px' }}>
            <h2>Contact Me</h2>
            <div className="social-links d-flex justify-content-center align-items-center" style={{ height: '200px', fontSize: '40px' }}>
                <a href="https://www.linkedin.com/in/mahad-alam-shah-" target="_blank" rel="noopener noreferrer" className="mx-4">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://github.com/MahadA456" target="_blank" rel="noopener noreferrer" className="mx-4">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
            </div>
        </Container>
    );
}

export default Contact;
