import React, { Fragment } from 'react';

// Components
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NeedPPECard from './components/NeedPPECard';
import DonateCard from './components/DonateCard';
import OurGoalSection from './components/OurGoalSection';
import OurNeedsSection from './components/OurNeedsSection';
import WhoWeAreSection from './components/WhoWeAreSection';

// Styles
import Covid19PageStyles from './index.module.css';

export default function Covid19Page() {
	return (
		<Fragment>
			<Helmet>
				<title>Kitsap Makers - COVID-19 Effort</title>
				<meta
					name="description"
					content="A group of volunteers from Kitsap Makers is 3D
							printing various PPE to support the fight against COVID-19."
				/>
			</Helmet>
			<Container component="section" className={Covid19PageStyles.hero}>
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
						<NeedPPECard />
					</Grid>
					<Grid item xs={12} sm={6}>
						<DonateCard />
					</Grid>
				</Grid>
			</Container>
			<OurGoalSection />
			<OurNeedsSection />
			<WhoWeAreSection />
		</Fragment>
	);
}
