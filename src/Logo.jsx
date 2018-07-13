import React, { Component } from 'react';
import './Logo.scss';

class Logo extends Component {
	render() {
		let { isFooter } = this.props;
		return (
			<div className={isFooter ? "logo isFooterLogo" : "logo"}>
				<svg className="hexagon" viewBox="0 0 300 300">
					<polygon points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
				</svg>
				<div className="center-v-line" />
				<div className="left-v-line" />
				<div className="right-v-line" />
				<div className="a-top-line" />
				<div className="a-mid-line" />
				<div className="h-mid-line" />
			</div>
		);
	}
}

export default Logo;
