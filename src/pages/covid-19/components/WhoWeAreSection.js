import React from 'react';

// Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Styles
import WhoWeAreSectionStyles from './WhoWeAreSection.module.css';

export default function OurNeedsSection() {
	return (
		<section className={WhoWeAreSectionStyles.root}>
			<Container>
				<Grid
					container
					justify="center"
					alignItems="flex-start"
					spacing={5}>
					<Grid
						className={WhoWeAreSectionStyles.content}
						item
						xs={12}>
						<Typography component="h2" variant="h3">
							Who We Are
						</Typography>
						<Typography component="p">
							Joey Sim is a mechanical engineer based out of
							Keyport, WA. It was his idea to start printing these
							masks for medical staff and first responders.
							Adrienne Landaal is an RN at St. Anthony Hospital in
							Gig Harbor, WA. She is on the front lines helping
							patients directly impacted by Coronavirus and
							consulting on the project. If you're in Kitsap
							County and want more resources and updates, check
							out{' '}
							<a
								href="https://kitsappublichealth.org/"
								target="_blank"
								rel="noopener noreferrer">
								Kitsap Public Health
							</a>
							.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}
