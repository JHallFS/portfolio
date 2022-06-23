import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import {
    useSpring,
    animated
} from 'react-spring';

import {
    Homepage,
    About
} from './pages';

export default function App() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 }
    });

    return (
        <animated.div style={props}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </animated.div>

    )
}