import {
  Routes,
  Route
} from 'react-router-dom';

import './css/style.css'
import {
  Homepage
} from './pages'

function Portfolio() {
  return (
    <main>
      <header>

      </header>

      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>

      <footer>
            <p>All content on site made my myself, educational modules and projects will be noted.</p>
      </footer>
    </main>
  );
}

export default Portfolio;
