import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav style={{ backgroundColor: '#282c34', padding: '1rem' }}>
            <ul style={{
                display: 'flex',
                justifyContent: 'center',
                listStyle: 'none',
                margin: '0',
                padding: '0',
                gap: '1.5rem',
            }}>
                <li style={{ fontSize: '1.2rem' }}>
                    <NavLink
                        to="/about"
                        style={({ isActive }) => ({
                            color: isActive ? '#61dafb' : '#ffffff',
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        About Me
                    </NavLink>
                </li>
                <li style={{ fontSize: '1.2rem' }}>
                    <NavLink
                        to="/portfolio"
                        style={({ isActive }) => ({
                            color: isActive ? '#61dafb' : '#ffffff',
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li style={{ fontSize: '1.2rem' }}>
                    <NavLink
                        to="/contact"
                        style={({ isActive }) => ({
                            color: isActive ? '#61dafb' : '#ffffff',
                            textDecoration: isActive ? 'underline' : 'none',
                        })}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
