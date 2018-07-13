import React, { Component } from 'react';
import Logo from './Logo';
import './Portfolio.scss';
import pdf from "./pdfs/Ashton Holgate - CV.pdf";

class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			isAtTopOfPage: true,
			selectedSkill: 1
		};
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		setTimeout(function () {
			window.scrollTo(0, 0);
		}, 100);
	}

	handleScroll() {
		if (window.pageYOffset > 0) {
			this.setState({ isAtTopOfPage: false });
		} else {
			this.setState({ isAtTopOfPage: true });
		}
	}

	handleSelectedSkillHover(id) {
		if (id === 1) {
			this.setState({ selectedSkill: 1 });
		} else {
			this.setState({ selectedSkill: 2 });
		}
	}

	render() {
		let { isAtTopOfPage, selectedSkill } = this.state;
		return (
			<div className="portfolio">
				<div className="hero-background-container">
					<div className="hero-background-gradient" />
					<div className="hero-background-image" />
				</div>
				<div className="hero-data-container">
					<Logo />
					<h1 className="hero-intro-text">Hi, I'm Ashton.<br />I design and build outstanding web experiences.</h1>
					<svg className={isAtTopOfPage ? "hero-arrow" : "hero-arrow hidden"} viewBox="0 0 60 30">
						<path d="M0 0 L30 30 L60 0"></path>
					</svg>
					<a className="hero-button cv" href={pdf} target="_blank">Download CV</a>
					<a className="hero-button contact" href="mailto:ashton.holgate@gmail.com">Get In Touch</a>
				</div>
				<section className="technical-competencies-section">
					<div className="flex-organisational-container">
						<div className="skill-choices-container">
							<p className="skill-choices-title">I am a skilled:</p>
							<div className={selectedSkill === 1 ? "skill-choice-container selected" : "skill-choice-container"} onMouseEnter={() => this.handleSelectedSkillHover(1)}>
								<svg className="skill-choice-icon" viewBox="0 0 30 30">
									<path d="M 5 5 C 3.3550302 5 2 6.3550302 2 8 L 2 21 C 2 21.768584 2.3041249 22.466647 2.7871094 23 L 0 23 C 0 24.657 1.343 26 3 26 L 27 26 C 28.657 26 30 24.657 30 23 L 27.212891 23 C 27.695875 22.466647 28 21.768584 28 21 L 28 8 C 28 6.3550302 26.64497 5 25 5 L 5 5 z M 5 7 L 25 7 C 25.56503 7 26 7.4349698 26 8 L 26 21 C 26 21.56503 25.56503 22 25 22 L 5 22 C 4.4349698 22 4 21.56503 4 21 L 4 8 C 4 7.4349698 4.4349698 7 5 7 z"></path>
								</svg>
								<p className="skill-choice-title">Front End Developer</p>
							</div>
							<div className={selectedSkill === 2 ? "skill-choice-container selected" : "skill-choice-container"} onMouseEnter={() => this.handleSelectedSkillHover(2)}>
								<svg className="skill-choice-icon" viewBox="0 0 50 50">
									<path d="M 9.9375 0.53125 L 0.53125 9.9375 L 15.46875 24.8125 L 24.84375 15.4375 L 23.40625 14 L 19.71875 17.71875 L 18.28125 16.28125 L 22 12.59375 L 20.40625 11 L 17.71875 13.71875 L 16.28125 12.28125 L 19 9.59375 L 17.40625 8 L 13.71875 11.71875 L 12.28125 10.28125 L 16 6.59375 L 14.40625 5 L 11.71875 7.71875 L 10.28125 6.28125 L 13 3.59375 Z M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 37.90625 5.1875 L 16.875 26.21875 L 4.4375 38.6875 C 4.238281 38.820313 4.09375 39.019531 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 11.25 45.65625 C 11.296875 45.609375 11.339844 45.554688 11.375 45.5 L 44.8125 12.09375 C 44.8125 12.09375 44.8125 12.0625 44.8125 12.0625 L 45.46875 11.40625 C 45.984375 10.890625 46.5625 10.3125 46.5625 10.3125 C 48.460938 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 43.125 4 C 43.890625 4 44.617188 4.304688 45.15625 4.84375 C 46.273438 5.960938 46.273438 7.789063 45.15625 8.90625 C 45.027344 9.035156 44.921875 9.140625 44.8125 9.25 L 40.75 5.1875 L 41.09375 4.84375 C 41.636719 4.300781 42.359375 4 43.125 4 Z M 35.40625 25.78125 L 32.71875 28.46875 L 31.875 27.625 L 25.15625 34.34375 L 40.0625 49.25 L 49.46875 39.84375 L 47.40625 37.78125 L 44.71875 40.46875 L 43.28125 39.0625 L 46 36.34375 L 44.40625 34.78125 L 40.71875 38.46875 L 39.28125 37.0625 L 43 33.34375 L 41.40625 31.78125 L 38.71875 34.46875 L 37.28125 33.0625 L 40 30.34375 L 38.40625 28.78125 L 34.71875 32.46875 L 33.28125 31.0625 L 37 27.34375 Z M 5.53125 41.4375 L 8.5625 44.46875 L 4.40625 45.59375 Z "></path>
								</svg>
								<p className="skill-choice-title">UX/UI Designer</p>
							</div>
						</div>
						<div className="technical-competencies-container">
							<div className="technical-competencies-title">Technical Competencies</div>
							{selectedSkill === 1 &&
								<div className="technical-competencies-list-container">
									<p className="technical-competencies-list-item">ReactJS</p>
									<p className="technical-competencies-list-item">Redux</p>
									<p className="technical-competencies-list-item">Typescript</p>
									<p className="technical-competencies-list-item">Javascript</p>
									<p className="technical-competencies-list-item">AngularJS</p>
									<p className="technical-competencies-list-item">SCSS</p>
									<p className="technical-competencies-list-item">BEM</p>
									<p className="technical-competencies-list-item">Git</p>
								</div>
							}
							{selectedSkill === 2 &&
								<div className="technical-competencies-list-container">
									<p className="technical-competencies-list-item">XD</p>
									<p className="technical-competencies-list-item">Illustrator</p>
									<p className="technical-competencies-list-item">Photoshop</p>
									<p className="technical-competencies-list-item">Balsamiq</p>
								</div>
							}
						</div>
					</div>
					<svg className="diagonal-filler" viewBox="0 0 100 100" preserveAspectRatio="none">
						<polygon points="0,0 0,100 100,100"></polygon>
					</svg>
				</section>
				<section className="experience-section">
					<div className="projects-container">
						<div className="title-container">
							<div className="blue-line" />
							<h2 className="title">Projects</h2>
						</div>
						<div className="project-container">
							<a className="project-title" href="https://www.whenwillyou.win" target="_blank">
								WhenWillYou.Win
							</a>
							<p className="project-sub-title">
								Lottery Simulator
							</p>
							<p className="project-description">
								Built in <b>React</b>, using <b>Redux</b>.
							</p>
							<p className="project-description">
								First choose which lottery you'd like to simulate, either the UK Lotto or Euromillions, then pick your numbers and begin! The simulator will run accurate simulations as fast as your device will allow until you are lucky enough to hit the jackpot. When will you win?
							</p>
							<p className="project-description">
								Project designed in XD using a mobile first approach, desktop layout informed by mobile design. Used animations between state transitions as a tool to communicate the flow of information, thus making the program more intuitive to use.
							</p>
							<a className="project-button" href="https://www.whenwillyou.win" target="_blank">View Simulator</a>
						</div>
					</div>
					<div className="experiences-container">
						<div className="title-container">
							<div className="blue-line" />
							<h2 className="title">Experience</h2>
						</div>
						<div className="experience-container">
							<div className="duration-line-container last" />
							<div className="experience-details-container">
								<div className="experience-duration-container">
									<div className="experience-marker" />
									<p className="experience-dates">Oct 2017 - Present</p>
								</div>
								<a className="experience-title" href="https://www.luxtripper.co.uk" target="_blank">
									Luxtripper
								</a>
								<p className="experience-sub-title">
									Front End Developer &amp; Lead Designer
								</p>
								<ul className="experience-bullets">
									<li className="experience-bullet">Currently working as Luxtripper's primary front-end developer and lead designer</li>
									<li className="experience-bullet">Redesigned and implemented key pages including hotel search, hotel landing, and bespoke itinerary pages</li>
									<li className="experience-bullet">Designed and created internal sales and lead management system, increasing business efficiently and employee satisfaction</li>
									<li className="experience-bullet">Produced 'Luxtripper Style Guide' to help coordinate design efforts between developers and business</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="footer">
					<Logo isFooter={true}/>
				</section>
			</div>
		);
	}
}

export default Portfolio;
