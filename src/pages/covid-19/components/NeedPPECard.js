import React from 'react';
import constants from '../../../constants';

// Components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Icons
import MailIcon from '@material-ui/icons/Mail';

// Images
import FaceShieldPeepsImage from './images/face-shield-peeps.jpg';

// Styles
import NeedPPECardStyles from './NeedPPECard.module.css';

const emailSubject = 'Request for PPE';
const emailBody =
	'Please provide your name, which organization is need of the PPE, contact information in the organization who deals with PPE, and which PPE needed and the quantity.';
const emailForPPEHref = `mailto:${constants.contactEmailAddress}?subject=${emailSubject}&body=${emailBody}`;

export default function NeedPPECard() {
	return (
		<Card variant="outlined">
			<CardMedia
				component="img"
				alt="Health professionals wearing face shields"
				height="300"
				image={FaceShieldPeepsImage}
			/>
			<CardContent>
				<Typography
					className={NeedPPECardStyles.cardTitle}
					component="h2"
					variant="h5">
					Need PPE?
				</Typography>
				<Typography component="p">
					Are you a member of a health or first responder organization
					in need of personal protection equipment (PPE)? We are
					currently producing: face shields, N95 masks, and ear band
					holders.
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					variant="contained"
					color="primary"
					href={emailForPPEHref}
					startIcon={<MailIcon />}>
					Request PPE
				</Button>
			</CardActions>
		</Card>
	);
}
