import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<title>Kitsap Makers</title>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				{/* Fonts to support Material Design */}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				{/* Icons to support Material Design */}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
				{props.headComponents}
				<script
					src="https://unpkg.com/@material-ui/core@4.4.0/umd/material-ui.production.min.js"
					crossOrigin="anonymous"
					async></script>
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<div
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
};
