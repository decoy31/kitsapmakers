import React from 'react';
import constants from '../../constants';

// Components
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DonateCard from './components/DonateCard';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Icons
import MailIcon from '@material-ui/icons/Mail';

// Images
import FaceShieldPeepsImage from './face-shield-peeps.jpg';

// Styles
import Covid19PageStyles from './index.module.css';

const emailSubject = 'Request for PPE';
const emailBody =
	'Please provide your name, which organization is need of the PPE, contact information in the organization who deals with PPE, and which PPE needed and the quantity.';
const emailForPPEHref = `mailto:${constants.contactEmailAddress}?subject=${emailSubject}&body=${emailBody}`;

export default function Covid19Page() {
	return (
		<div className={Covid19PageStyles.hero}>
			<Helmet>
				<title>Kitsap Makers - COVID-19 Effort</title>
				<meta
					name="description"
					content="A group of volunteers from Kitsap Makers is 3D
							printing various PPE to support the fight against COVID-19."
				/>
			</Helmet>
			<Container>
				<Grid
					container
					justify="center"
					alignItems="flex-start"
					spacing={5}>
					<Grid
						item
						className={Covid19PageStyles.heroContent}
						xs={12}>
						<Typography component="h1" variant="h2">
							COVID-19 Effort
						</Typography>
						<Typography component="p" variant="subtitle1">
							A group of volunteers from Kitsap Makers is 3D
							printing various PPE.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card variant="outlined">
							<CardMedia
								component="img"
								alt="Health professionals wearing face shields"
								height="300"
								image={FaceShieldPeepsImage}
							/>
							<CardContent>
								<Typography
									className={Covid19PageStyles.cardTitle}
									component="h2"
									variant="h5">
									Need PPE?
								</Typography>
								<Typography component="p">
									Are you a member of a health or first
									responder organization in need of personal
									protection equipment (PPE)? We are currently
									producing: face shields, N95 masks, and ear
									band holders.
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
					</Grid>
					<Grid item xs={12} sm={6}>
						<DonateCard />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
