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
							We are a group of passionate community members
							trying to do our part to help our local community.
							The makers who are participating in this effort from
							both Navy and private sector backgrounds. The makers
							are engineers, technologists, and from varying other
							technical and engineering fields. We also have folks
							in the group who are in the local health care
							industry who are helping distribute and consult on
							the various PPE.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}
