import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
    return (
        <header style={{ padding: '1rem', backgroundColor: '#282c34', color: '#ffffff', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0' }}>
                Dominique Darling
            </h1>
            <p style={{ fontSize: '1.25rem', fontStyle: 'italic', margin: '0.5rem 0 1rem' }}>
                Turning coffee ☕ into code 💻 and debugging into "feature discovery" 🚀.  
                <br /> (Why did the programmer quit their job? They didn’t get arrays 💾.)
            </p>
            <Navigation />
        </header>
    );
};

export default Header;
