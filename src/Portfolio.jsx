import React, { Component } from 'react';
import Logo from './Logo';
import './Portfolio.scss';
import pdf from "./pdfs/Ashton Holgate - CV.pdf";

class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			isAtTopOfPage: true,
		};
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		if(window.pageYOffset > 0) {
			this.setState({isAtTopOfPage: false});
		} else {
			this.setState({isAtTopOfPage: true});
		}
	}
	
	render() {
		let { isAtTopOfPage } = this.state;
		return (
			<div className="portfolio">
				<div className="hero-background-container">
					<div className="hero-background-gradient"/>
					<div className="hero-background-image"/>
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
			</div>
		);
	}
}

export default Portfolio;
