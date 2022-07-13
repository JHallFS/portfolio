import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import {
    Homepage,
    About
} from './pages';

export default function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>

    )
}