import React from 'react';

// Components
import { Link } from 'gatsby';

// Icons
import SettingsIcon from '@material-ui/icons/Settings';

export const onRenderBody = ({
	setPreBodyComponents,
	//setPostBodyComponents,
}) => {
	setPreBodyComponents([<Header key="header" />]);
	//setPostBodyComponents([<Footer key="footer" />]);
};

function Header() {
	return (
		<div className="Header">
			<div className="logo-container">
				<Link to="/" className="logo">
					<SettingsIcon />
					Kitsap Makers
				</Link>
			</div>
			<ul>
				<li>
					<Link to="/covid-19">COVID-19 Effort</Link>
				</li>
			</ul>
		</div>
	);
}

function Footer() {
	return (
		<div className="Footer">
			<div className="">Kitap Makers</div>
			<div className="">COVID-19 Response</div>
		</div>
	);
}
