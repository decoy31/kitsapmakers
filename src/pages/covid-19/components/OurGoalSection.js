import React from 'react';

// Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Styles
import OurGoalSectionStyles from './OurGoalsSection.module.css';

export default function OurGoalSection() {
	return (
		<section className={OurGoalSectionStyles.root}>
			<Container>
				<Grid
					container
					justify="center"
					alignItems="flex-start"
					spacing={5}>
					<Grid className={OurGoalSectionStyles.content} item xs={12}>
						<Typography component="h2" variant="h3">
							Our Goal
						</Typography>
						<Typography component="p">
							Armed with a few 3D printers, goods
							donated/purchased from all over the area, and a need
							to help others, we want to do our best to support
							our local medical staff by providing them with as
							many masks and face shields as possible. These
							plastic masks can be sanitized between rooms and
							allow for multiple filter replacements during a
							shift. Even just one filter can be cut approximately
							4-5 times to be used as airtight filters. Reusable
							masks can make a world of a difference for those
							working in close proximity to patients, offering
							much more protection than a paper surgical mask. As
							long we have the materials, we will continue making
							as many masks and face shields possible. You can
							read more about others doing similar work in Kitsap
							County with aid from the U.S. Navy.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}
