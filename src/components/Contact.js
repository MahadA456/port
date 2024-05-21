import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        description: ''
    });

    const [submitted, setSubmitted] = useState(false); // State to handle submission status

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you can handle the submission to a backend server or display the data for verification
        console.log('Submitted Form Data:', formData);
        setSubmitted(true); // Set submitted to true to show the success message
    };

    return (
        <Container id="contact" className="text-center mt-5" style={{ paddingTop: '70px' }}>
            <h2>Contact Me</h2>
            <div className="social-links d-flex justify-content-center align-items-center" style={{ height: '200px', fontSize: '40px' }}>
                <a href="https://www.linkedin.com/in/abdullah-ishaq" target="_blank" rel="noopener noreferrer" className="mx-4">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://github.com/abdullah2310ishaq" target="_blank" rel="noopener noreferrer" className="mx-4">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
            </div>
            {!submitted ? (
                <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        style={{ margin: '10px', padding: '10px', width: '300px' }}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        style={{ margin: '10px', padding: '10px', width: '300px' }}
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        style={{ margin: '10px', padding: '10px', width: '300px' }}
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                        style={{ margin: '10px', padding: '10px', width: '300px', height: '100px' }}
                    />
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Submit</button>
                </form>
            ) : (
                <div style={{ margin: '20px', fontSize: '20px', color: 'green' }}>
                    Thank you for contacting us! We will get back to you soon.
                </div>
            )}
        </Container>
    );
}

export default Contact;
