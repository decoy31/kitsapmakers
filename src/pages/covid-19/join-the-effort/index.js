import React, { Fragment } from 'react';

// Components
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Files
import Prusa3Hole from './resources/prusa-3-hole.stl';

// Styles
import Covid19PageStyles from './index.module.css';

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
			<section className={Covid19PageStyles.hero}>
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
								Join the COVID-19 Effort
							</Typography>
							<Typography component="p" variant="subtitle1">
								Be a part of the effort in printing various PPE
								to support the fight against COVID-19.
							</Typography>
						</Grid>
						<Grid
							item
							className={Covid19PageStyles.heroContent}
							xs={6}>
							<Typography component="h1">
								Download the Face Shield Designs
							</Typography>
						</Grid>
						<Grid
							item
							className={Covid19PageStyles.heroContent}
							xs={6}>
							<ul>
								<li>
									<Link to={Prusa3Hole}>
										Prusa 3-Hole Punch
									</Link>
								</li>
							</ul>
						</Grid>
					</Grid>
				</Container>
			</section>
		</Fragment>
	);
}
