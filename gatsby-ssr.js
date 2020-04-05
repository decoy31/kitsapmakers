import React from 'react';

// Components
import { Link } from 'gatsby';

// Icons
import SettingsIcon from '@material-ui/icons/Settings';

export const onRenderBody = ({ setPreBodyComponents }) => {
	setPreBodyComponents([<Header key="header" />]);
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
					<Link to="/covid-19">COVID-19</Link>
				</li>
			</ul>
		</div>
	);
}
