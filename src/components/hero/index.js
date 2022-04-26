import { Link } from 'react-router-dom';

export default function Hero() {
	return (
		<section className="hero">
			<h2>Computer enthusiast, aspiring programmer and developer.</h2>

			<div className="heronav">
				<Link to="/about">About Me</Link>
				<Link to="/skills">Experience and Projects</Link>
				<Link to="/contact">Contact Me</Link>
			</div>
			<p>Hello! My name is James, I live out of rainy Olympia Washington and my goal is to make a living programming and tinkering with websites and software for anything imaginable.
			Currently looking for work that is either remote or local to Pierce County, WA.</p>
		</section>
		
	);
};

