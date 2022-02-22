function Hamburger() {
	return (
		<svg viewBox="0 0 100 80" width="40" height="40">
			<rect width="100" height="5"></rect>
			<rect y="30" width="100" height="5"></rect>
			<rect y="60" width="100" height="5"></rect>
		</svg>
	);
};

export default function Navbar() {
	return (
		<nav>
			<h1>James Hall Web Development</h1>
			<Hamburger />
		</nav>
	);
};
