import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function Skills() {
    return (
        <div className="container text-center">
            <h2>Skills</h2>
            <div className="row">
                {/* Example Skill */}
                <div className="col-md-4">
                    <p>JavaScript</p>
                    <ProgressBar now={80} label={`80%`} />
                </div>
                {/* Add more skills as needed */}
            </div>
        </div>
    );
}

export default Skills;
