import React from 'react';

// Components
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Styles
import indexStyles from './index.module.css';

export default function index() {
	return (
		<div className={indexStyles.root}>
			<Helmet>
				<title>Kitsap Makers</title>
			</Helmet>
			<Container>
				<Grid
					className={indexStyles.hero}
					container
					justify="center"
					alignItems="center"
					spacing={1}>
					<Grid item xs={12}>
						<Typography
							className={indexStyles.title}
							component="h1"
							variant="h2">
							Kitsap Makers
						</Typography>
						<Typography
							className={indexStyles.subtitle}
							component="p"
							variant="subtitle1">
							Bringing together the 3D Maker community in Kitsap
							County and beyond.
						</Typography>
					</Grid>
				</Grid>
			</Container>
			{/* <h1>Kitsap Makers</h1>
			<p className={indexStyles.subtitle}>
				This site is a work in progress. Please visit our{' '}
				<a href="https://www.facebook.com/groups/818404345305725/">
					Facebook group page
				</a>{' '}
				for more information.
			</p>
			<p className={indexStyles.subtitle}>
				To support our volunteer COVID-19 efforts, visit our{' '}
				<a href="https://www.gofundme.com/f/kitsap-county-ppe-support-fund">
					GoFundMe
				</a>
				.
			</p> */}
		</div>
	);
}
