import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './spacecomponents/Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, you can use reportWebVitals.
reportWebVitals();