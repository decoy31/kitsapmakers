import React from "react";
import indexStyles from "./index.module.css";

export default function index() {
	return (
		<div className={indexStyles.container}>
			<h1 className={indexStyles.title}>Kitsap Makers</h1>
			<p className={indexStyles.subtitle}>
				This site is a work in progress. Please visit our{" "}
				<a href="https://www.facebook.com/groups/818404345305725/">
					Facebook group page
				</a>{" "}
				for more information.
			</p>
		</div>
	);
}
