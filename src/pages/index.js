import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";

// Styles
import indexStyles from "./index.module.css";

export default function index() {
	return (
		<div className={indexStyles.container}>
			<SettingsIcon className={indexStyles.gearIcon} />
			<h1 className={indexStyles.title}>Kitsap Makers</h1>
			<p className={indexStyles.subtitle}>
				This site is a work in progress. Please visit our{" "}
				<a href="https://www.facebook.com/groups/818404345305725/">
					Facebook group page
				</a>{" "}
				for more information.
			</p>
			<p className={indexStyles.subtitle}>
				To support our volunteer COVID-19 efforts, visit our{" "}
				<a href="https://www.gofundme.com/f/kitsap-county-ppe-support-fund">
					GoFundMe
				</a>
				.
			</p>
		</div>
	);
}
