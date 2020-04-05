import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import constants from '../../../constants';

// Icons
import MailIcon from '@material-ui/icons/Mail';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import MoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles(theme => ({
	cardTitle: {
		marginBottom: '1rem',
	},
}));

const emailSubject = 'Request to Join the COVID-19 Effort';
const emailBody =
	'Please provide your name, contact information, and in what capacity you would like to offer your assistance to the COVID-19 effort.';
const emailOfferHelpHref = `mailto:${constants.contactEmailAddress}?subject=${emailSubject}&body=${emailBody}`;

export default function DonateCard() {
	const classes = useStyles();

	return (
		<Card variant="outlined">
			<CardMedia
				component="img"
				alt="Montana n95 Mask"
				height="300"
				image="./montana-mask-render.jpg"
			/>
			<CardContent>
				<Typography
					className={classes.cardTitle}
					component="h2"
					variant="h5">
					Support the Effort
				</Typography>
				<Typography component="p">
					We are a volunteer group of passionate 3D makers doing our
					best to help our local community. But we need help with
					production, distribution, and finacial support. (100% of the
					funds raised go to the production and distribution of PPE.)
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					variant="contained"
					color="primary"
					href={emailOfferHelpHref}
					startIcon={<MailIcon />}>
					Join the Effort
				</Button>
				<Button
					variant="contained"
					color="secondary"
					href="https://www.gofundme.com/f/kitsap-county-ppe-support-fund"
					target="_blank"
					rel="noopener"
					startIcon={<MoneyIcon />}
					endIcon={<OpenInNewIcon />}>
					Donate
				</Button>
			</CardActions>
		</Card>
	);
}
