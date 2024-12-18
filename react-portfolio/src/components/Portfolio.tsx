import React from 'react';

interface ProjectProps {
    title: string;
    image: string;
    deployedLink: string;
    githubLink: string;
}

const Project: React.FC<ProjectProps> = ({ title, image, deployedLink, githubLink }) => (
    <div className="project" style={{ textAlign: 'center', margin: '1rem' }}>
        <img 
            src={image} 
            alt={title} 
            style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }} 
        />
        <h3 style={{ margin: '1rem 0 0.5rem', color: '#333' }}>{title}</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a 
                href={deployedLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    textDecoration: 'none',
                    color: '#fff',
                    backgroundColor: '#61dafb',
                    padding: '0.5rem 1rem',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
            >
                View Project
            </a>
            <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    textDecoration: 'none',
                    color: '#fff',
                    backgroundColor: '#333',
                    padding: '0.5rem 1rem',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
            >
                GitHub
            </a>
        </div>
    </div>
);

export default Project;
