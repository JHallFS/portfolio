import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function Hero() {
	const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
	return (
		<animated.div style={props}>
			<main className="homepage" >

				<header id="homepage-header">
					<div className="header-image" />
					<div className="simple-wrap">
						<h1>James Hall</h1>
						<h2>computer enthusiast, aspiring programmer and full stack developer</h2>
					</div>
				</header>

				<section id="welcome-section">
					<div className="simple-wrap">
						<h2 className="content-title">Welcome!</h2>
						<p>
							My name is James, I live out of rainy Seattle Washington and my goal is to make a living programming and tinkering with websites and software for anything imaginable.
							Currently looking for work that is either remote or local to Pierce County, WA.
						</p>
						<Link to="/about" className="btn">About Me</Link>
						<Link to="/contact" className="btn">Contact</Link>
					</div>
				</section>

				<section id="skill-section">
					<ul>
						<li>
							<div className="card">
								<img src="./images/web-card.jpg" alt="website running responsively on mobile and desktop environments" />
								<div className="card-content">
									<h3 className="card-title">Front End Development</h3>
									<p>
										I have knowledge of base html, along with UI libraries such as React(as shown on this website!) that allow me to create and maintain websites and applications for your personal or buisness needs.
									</p>
									<Link to="/skills" className="btn">Learn More</Link>
								</div>
							</div>
						</li>

						<li>
							<div className="card">
								<img src="./images/server-card.jpg" alt="" />
								<div className="card-content">
									<h3 className="card-title">Back End Development</h3>
									<p>
										I enjoy and have experience building back end servers and API endpoints for anything you need persistant data for, from setting up routing with Express or Flask, to maintaining SQL and noSQL databases.
									</p>
									<Link to="/skills" className="btn">Learn More</Link>
								</div>
							</div>
						</li>

						<li>
							<div className="card">
								<img src="./images/code-card.jpg" alt="" />
								<div className="card-content">
									<h3 className="card-title">Programming and Beyond</h3>
									<p>
										Experience with home computing and networking have givin me the ability to run and maintain systems in person or on the cloud through AWS and google web services. You can find me working on expanding my knowledge of C, C#, Rust, and Python in my spare time.
									</p>
									<Link to="/skills" className="btn">Learn More</Link>
								</div>
							</div>
						</li>
					</ul>
				</section>

				<footer id="homepage-footer">
					<h4>Website made by myself!</h4>
					<img src="./images/GitHub-Mark-64px.png" alt="GitHub Icon" className="github" />
				</footer>
			</main>
		</animated.div>
	);
};

