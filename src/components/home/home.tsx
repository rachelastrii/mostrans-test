import { Link } from 'react-router-dom'
import { EpisodeContainer, LocationContainer, MeetingContainer } from './section/container'


import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const SectionContainer = () => {

	return (
		<Box sx={{ mt: 4 }}>
			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'baseline',
				p: 1
			}}>
				<Typography variant='h6' >Meet The Cast</Typography>
				<Button 
					component={Link}
					to='/cast'

					variant='outlined' 
					sx={{ 
						color: '#fff', 
						border: '1px solid #65871c',
						textTransform: 'capitalize'
					}}
				>View All</Button>
			</Box>

			<Box sx={{ mt: 0 }}>
				<MeetingContainer />
			</Box>

			<Box sx={{ mt: 8 }}>
				<Typography sx={{ fontSize: { xs: 16, sm: 20 } }}>Episodes</Typography>
				<EpisodeContainer />
			</Box>

			{/* [ LocationContainer is copied versiom of EpisodeContainer ] */}
			<Box sx={{ mt: 8, pb: 8 }}>
				<Typography sx={{ fontSize: { xs: 16, sm: 20 } }}>Locations</Typography>
				<LocationContainer />
			</Box>
		</Box>
	)
}
export default SectionContainer
