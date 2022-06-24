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
        from: {
            opacity: 0,
            marginTop: -500
        },
        to: {
            opacity: 1,
            marginTop: 0
        }
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