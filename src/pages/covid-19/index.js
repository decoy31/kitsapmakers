import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

// Styles
import Covid19PageStyles from "./index.module.css";

export default function Covid19Page() {
	return (
		<div className={Covid19PageStyles.hero}>
			<Container>
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<h1>COVID-19 Response</h1>
						<p>How May Kitsap Makers Help You?</p>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card>
							<h2>In Need of PPE?</h2>
							<p>
								Are you a health or first responder organization
								in need of personal protection (PPE) equipment?
							</p>
							<Button>Request PPE</Button>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card>Hello World 2</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
