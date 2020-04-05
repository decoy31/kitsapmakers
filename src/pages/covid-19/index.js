import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Icons
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

// Styles
import Covid19PageStyles from './index.module.css';

const useStyles = makeStyles(theme => ({
	hero: {
		textAlign: 'center',
	},
	cardTitle: {
		marginBottom: '1rem',
	},
}));

export default function Covid19Page() {
	const classes = useStyles();

	return (
		<div className={Covid19PageStyles.hero}>
			<Container>
				<Grid
					container
					justify="center"
					alignItems="flex-start"
					spacing={5}
				>
					<Grid item className={classes.hero} xs={12}>
						<Typography component="h1" variant="h2">
							COVID-19 Response
						</Typography>
						<Typography component="p">
							How may Kitsap Makers help your organization through
							this crisis?
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card variant="outlined">
							<CardContent>
								<Typography
									className={classes.cardTitle}
									component="h2"
									variant="h5"
								>
									In Need of PPE?
								</Typography>
								<Typography component="p">
									Are you a member of a health or first
									responder organization in need of personal
									protection (PPE) equipment?
								</Typography>
							</CardContent>
							<CardActions>
								<Button variant="contained" color="primary">
									Request PPE
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card variant="outlined">
							<CardContent>
								<Typography
									className={classes.cardTitle}
									component="h2"
									variant="h5"
								>
									Donate
								</Typography>
								<Typography component="p">
									We are a volunteer group of passionate 3D
									makers doing our best to help our local
									community.
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									variant="contained"
									color="secondary"
									endIcon={<OpenInNewIcon />}
									href="https://www.gofundme.com/f/kitsap-county-ppe-support-fund"
									target="_blank"
								>
									Donate
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
