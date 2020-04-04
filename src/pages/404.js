import React from "react";

// Styles
import NotFoundPageStyles from "./404.module.css";

export default function index() {
	return (
		<div className={NotFoundPageStyles.container}>
			<h1>Page Not Found</h1>
			<p>
				Head on back to the <a href="/">Homepage</a>.
			</p>
		</div>
	);
}
