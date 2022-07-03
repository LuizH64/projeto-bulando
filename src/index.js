// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";

// Styles
import './index.css';

// Components
import App from './App';

// Misc
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
