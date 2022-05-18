import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import {
  Homepage,
  About
} from './pages';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
