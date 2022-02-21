import { useState } from 'react';

export default function Navbar() {
	const [navState, setNavState] = useState({
		clicked: false
	});


	return (
		<nav>
			<h1>James Hall</h1>
		</nav>
	)
};
