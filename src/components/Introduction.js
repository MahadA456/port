import React from 'react';

function Introduction() {
    return (
        <div id="introduction" className="text-center p-5" style={{ paddingTop: '70px' }}>
            <img src="/Profile.jpeg" className="rounded-circle" alt="Profile" width="150" height="150" style={{ objectFit: 'cover' }} />
            <h1>Hello, I'm Mahad Alam Shah</h1>
            <p>Welcome to my portfolio! Here you can find details about my projects and skills.</p>
        </div>
    );
}

export default Introduction;
