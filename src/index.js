import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// ✅ Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Optional Bootstrap JS (for dropdowns, modals, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
