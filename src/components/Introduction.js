import React from 'react';

function Introduction() {
    const imageSize = {
        width: `${window.innerWidth * 0.1}px`,
        height: `${window.innerWidth * 0.1}px`,
    };

    return (
        <div id="introduction" className="introduction-container" style={{ display: 'flex', alignItems: 'center', padding: '70px 20px', textAlign: 'left', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src="/Abdullah.jpeg" className="profile-picture" alt="Profile" style={{ ...imageSize, objectFit: 'cover', marginRight: '20px', borderRadius: '50%', border: '4px solid #4A90E2' }} />
            <div className="bio">
                <h1 style={{ fontSize: '2rem', color: '#333', marginBottom: '10px' }}>Hello, I'm Abdullah Ishaq</h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>A CS undergrad and your future PSP officer, InshaAllah.</p>
            </div>
        </div>
    );
}

export default Introduction;
