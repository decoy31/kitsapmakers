import React from 'react';

// Components
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Icons
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import MoneyIcon from '@material-ui/icons/AttachMoney';

// Images
import MontanaMaskImage from './images/face-shield-pattern.jpg';

// Styles
import DonateCardStyles from './DonateCard.module.css';

export default function DonateCard() {
	return (
		<Card variant="outlined">
			<CardMedia
				component="img"
				alt="Montana n95 Mask"
				height="300"
				image={MontanaMaskImage}
			/>
			<CardContent>
				<Typography
					className={DonateCardStyles.cardTitle}
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
					href="/covid-19/join-the-effort">
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
