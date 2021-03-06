import React, { Fragment } from 'react';
import constants from '../../../constants';

// Components
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

// Icons
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import MoneyIcon from '@material-ui/icons/AttachMoney';

// Images
import StJoeERImage from './images/st-joseph-emergency-department.jpg';
import BIFDImage from './images/bainbridge-island-fire-department.jpg';
import JohnBroshearsImage from './images/john-broshears-making-face-shields.jpg';
import MonkeyEarSaverImage from './images/monkey-ear-saver.jpg';

// Styles
import JoinTheEffortStyles from './index.module.css';

const emailSubject = 'Request to Join the COVID-19 Effort';
const emailBody =
	'Please provide your name, contact information, and in what capacity you would like to offer your assistance to the COVID-19 effort.';
const emailOfferHelpHref = `mailto:${constants.contactEmailAddress}?subject=${emailSubject}&body=${emailBody}`;

export default function JoinTheEffort() {
	return (
		<Fragment>
			<Helmet>
				<title>Kitsap Makers - Join the COVID-19 Effort</title>
				<meta
					name="description"
					content="Be a part of the effort in printing various PPE to support the fight against COVID-19."
				/>
			</Helmet>
			<section className={JoinTheEffortStyles.hero}>
				<Container>
					<Grid
						container
						justify="center"
						alignItems="center"
						spacing={5}>
						<Grid
							item
							className={JoinTheEffortStyles.heroContent}
							xs={12}>
							<Typography component="h1" variant="h2">
								Join the COVID-19 Effort
							</Typography>
							<Typography component="p" variant="subtitle1">
								Be a part of the effort creating various PPE to
								support the fight against COVID-19.
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={JoinTheEffortStyles.gettingStartedSection}>
				<Container>
					<Grid
						container
						justify="center"
						alignItems="flex-start"
						spacing={5}>
						<Grid
							item
							className={
								JoinTheEffortStyles.gettingStartedHeaderContent
							}
							xs={12}>
							<Typography component="h2" variant="h3">
								Getting Started
							</Typography>
						</Grid>

						<Grid
							item
							container
							xs={12}
							justify="center"
							alignItems="flex-start">
							<Grid
								item
								className={JoinTheEffortStyles.steps}
								xs={12}
								sm={6}>
								<Card variant="outlined">
									<CardHeader title="1. Contact Us" />
									<CardMedia
										component="img"
										alt="St. Joseph Emergency Department staff"
										height="300"
										image={StJoeERImage}
									/>
									<CardContent>
										We need to make sure those who are
										participating in the team are making the
										right kinds of PPE to meet the needs of
										the local community. At this time, it is
										face shields and ear savers. We ask you
										contact us first either by email or via
										our Facebook group before you start
										making.
									</CardContent>
									<CardActions>
										<a href={emailOfferHelpHref}>
											Email the Team
										</a>
										<a
											href="https://www.facebook.com/groups/818404345305725/"
											target="_blank"
											rel="noopener noreferrer">
											Join the Facebook Group
										</a>
									</CardActions>
								</Card>
							</Grid>
						</Grid>

						<Grid
							item
							container
							xs={12}
							justify="center"
							alignItems="flex-start">
							<Grid item xs={12} sm={6}>
								<Card variant="outlined">
									<CardHeader title="2. Start Making" />
									<CardMedia
										component="img"
										alt="John Broshears (one of our makers) printing face shield brackets"
										height="300"
										image={JohnBroshearsImage}
									/>
									<CardContent>
										After you have figured out what the team
										and local community needs you to make,
										it's time to start making! We have
										centeralized collection points where we
										coordinate the collection of all the
										made PPE and then distribute the PPE to
										those who need it.
									</CardContent>
									<CardActions>
										<a href="https://drive.google.com/open?id=1xi5M6sMJaUZAHKEh062Pw5okjmWU-F4z">
											Maker Files
										</a>
									</CardActions>
								</Card>
							</Grid>
						</Grid>

						<Grid
							item
							container
							xs={12}
							justify="center"
							alignItems="flex-start">
							<Grid item xs={12} sm={6}>
								<Card variant="outlined">
									<CardHeader title="3. Reach Out to Your Community" />
									<CardMedia
										component="img"
										alt="Handing off face shields to Bainbridge Island Fire Department"
										height="300"
										image={BIFDImage}
									/>
									<CardContent>
										Contact people, facilities, and
										organizations who may need face shields
										or other PPE the team can produce.
									</CardContent>
								</Card>
							</Grid>
						</Grid>

						<Grid
							item
							container
							xs={12}
							justify="center"
							alignItems="flex-start">
							<Grid item xs={12} sm={6}>
								<Card variant="outlined">
									<CardHeader title="4. Innovate" />
									<CardMedia
										component="img"
										alt="Ear saver for elastic straps on face masks shaped like a monkey"
										height="300"
										image={MonkeyEarSaverImage}
									/>
									<CardContent>
										Help the team come up with new ways to
										create and distribute personal
										protective equipment out to those who
										need it.
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>

			<section className={JoinTheEffortStyles.donateSection}>
				<Container>
					<Grid
						container
						justify="center"
						alignItems="flex-start"
						spacing={5}>
						<Grid
							item
							className={
								JoinTheEffortStyles.donationHeaderContent
							}
							xs={12}>
							<Typography component="h2" variant="h3">
								Donate
							</Typography>
							<Typography component="p" variant="p">
								Our entire effort has been funded by our
								GoFundMe campaign.
							</Typography>
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
						</Grid>
					</Grid>
				</Container>
			</section>
		</Fragment>
	);
}
