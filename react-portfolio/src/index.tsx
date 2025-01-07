import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css';

const container = document.getElementById('app');
if (container) {
  const root = ReactDOM.createRoot(container as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the app element');
}