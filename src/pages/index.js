import React from 'react';

// Components
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

// Styles
import indexStyles from './index.module.css';

export default function index() {
	return (
		<div className={indexStyles.root}>
			<Helmet>
				<title>Kitsap Makers</title>
			</Helmet>
			<Container className={indexStyles.hero}>
				<Grid
					container
					justify="center"
					alignItems="center"
					spacing={5}>
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
							County.
						</Typography>
					</Grid>
					<Grid
						className={indexStyles.buttonContainer}
						item
						container
						justify="center"
						align-items="center"
						spacing={2}>
						<Grid
							className={indexStyles.primaryButtonContainer}
							item
							xs={12}
							sm={6}>
							<Button
								className={indexStyles.primaryButton}
								variant="contained"
								color="primary"
								href="https://www.facebook.com/groups/818404345305725/"
								target="_blank"
								rel="noopener"
								startIcon={<FacebookIcon />}
								endIcon={<OpenInNewIcon />}>
								Facebook Group
							</Button>
						</Grid>
						<Grid
							className={indexStyles.secondaryButtonContainer}
							item
							xs={12}
							sm={6}>
							<Button
								className={indexStyles.secondaryButton}
								variant="contained"
								color="secondary"
								href="/covid-19"
								startIcon={<LocalHospitalIcon />}>
								COVID-19 Effort
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
