import {
  Routes,
  Route
} from 'react-router-dom';

import './css/style.css'
import {
  Hero
} from './components'

function Portfolio() {
  return (
    <div>
      <nav>
        <h1>James Hall</h1>
      </nav>

      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>

      <footer>
            <p>All content on site made my myself, educational modules and projects will be noted.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
