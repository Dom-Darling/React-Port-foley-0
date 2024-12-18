import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/about" style={{ color: '#ffffff', textDecoration: 'none' }}>
                        About Me
                    </Link>
                </li>
                <li style={{ fontSize: '1.2rem' }}>
                    <Link to="/portfolio" style={{ color: '#ffffff', textDecoration: 'none' }}>
                        Portfolio
                    </Link>
                </li>
                <li style={{ fontSize: '1.2rem' }}>
                    <Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none' }}>
                        Contact
                    </Link>
                </li>
                <li style={{ fontSize: '1.2rem' }}>
                    <Link to="/resume" style={{ color: '#ffffff', textDecoration: 'none' }}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
