import React from 'react';

// Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Styles
import OurNeedsSectionStyles from './OurNeedsSection.module.css';

export default function OurNeedsSection() {
	return (
		<section className={OurNeedsSectionStyles.root}>
			<Container>
				<Grid
					container
					justify="center"
					alignItems="flex-start"
					spacing={5}>
					<Grid
						className={OurNeedsSectionStyles.content}
						item
						xs={12}>
						<Typography component="h2" variant="h3">
							What We Need
						</Typography>
						<Typography component="p">
							Unfortunately, the materials required to make the
							masks aren't cheap and they can be labor-intensive.
							Our volunteers have already spent hundreds of
							dollars of their own money on testing and creating
							these PPEs, and thus, we're asking for any help at
							all financially so that they don't have to bear this
							burden alone. 100% of donations will go directly
							toward creating and distributing our 3D printed PPE
							to healthcare professionals.
						</Typography>

						<Typography component="p">
							Here are some of the materials we need:
							<br />+ Filament for the 3D printer
							<br />+ Binding covers for face shields
							<br />+ Filter elements for the face masks
							<br />+ Sand paper
							<br />+ Clear coat
							<br />+ Sanitizer
							<br />+ Elastic
						</Typography>
						<Typography component="p">
							We are grateful for any donations toward this cause.
							Even $5 can make a difference for a healthcare
							professional in need of a reusable mask or face
							shield. If you can't donate, please consider sharing
							this page on your own social media platform. Thank
							you for all your generous support of this endeavor!
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}
