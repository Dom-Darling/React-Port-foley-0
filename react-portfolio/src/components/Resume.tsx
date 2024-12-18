import React from 'react';

const Resume: React.FC = () => {
    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>
                My Resume
            </h2>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <a 
                    href="/path/to/resume.pdf" 
                    download 
                    style={{
                        textDecoration: 'none',
                        color: '#ffffff',
                        backgroundColor: '#61dafb',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '5px',
                        fontSize: '1rem',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#21a1f1')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#61dafb')}
                >
                    📄 Download My Resume
                </a>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                Proficiencies
            </h3>
            <ul style={{ 
                listStyleType: 'none', 
                padding: '0', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                gap: '1rem' 
            }}>
                {[
                    'JavaScript',
                    'React',
                    'TypeScript',
                    'HTML & CSS',
                    'Node.js',
                    'Git & GitHub',
                    'Express.js',
                    'MongoDB',
                    'Testing Libraries (Jest, Mocha)'
                ].map((skill, index) => (
                    <li 
                        key={index} 
                        style={{
                            backgroundColor: '#f9f9f9',
                            padding: '1rem',
                            borderRadius: '5px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center'
                        }}
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Resume;
