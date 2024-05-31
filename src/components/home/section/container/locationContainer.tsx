import { Episode } from '../component'
import { useAppSelector } from '../../../../store/hooks'

import Box from '@mui/material/Box'
import BoxWrapper from '../../../details/boxWrapper'
import ScrollWrapper from '../../scrollWrapper'


export const LocationContainer = () => {
	const { locations } = useAppSelector(state => state.location)

	return (
		<ScrollWrapper id='locationContainer' sx={{ mt: 2 }}>
			<Box sx={{
				display: 'flex',
				gap: 2,
				overflowX: 'auto'
			}}>
				{locations?.map(location => (
					<BoxWrapper key={location.id} 
						clipPath= 'polygon(0 0, 100% 0, 100% 60%, 80% 100%, 0 100%)'
						gradientDegree={135}
						sx={{
							minWidth: 250,
							textTransform: 'uppercase',
						}}
					> 
							<Episode 
								primary={`#${location.id}`}
								subTitle={location.name}
							/>
					</BoxWrapper> 
				))}
			</Box>
		</ScrollWrapper>
	)
}
