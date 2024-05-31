import { Episode } from '../component'
import { useAppSelector } from '../../../../store/hooks'

import Box from '@mui/material/Box'
import BoxWrapper from '../../../details/boxWrapper'
import ScrollWrapper from '../../scrollWrapper'


export const EpisodeContainer = () => {
	const { episodes } = useAppSelector(state => state.episode)

	return (
		<ScrollWrapper id='episodeContainer' sx={{ mt: 2 }}>

			<Box sx={{
				display: 'flex',
				gap: 2,
				overflowX: 'auto'
			}}>

				{episodes?.map(episode => (
					<BoxWrapper key={episode.id} 
						clipPath= 'polygon(0 0, 100% 0, 100% 60%, 80% 100%, 0 100%)'
						gradientDegree={135}
						sx={{
							minWidth: 250,
							textTransform: 'uppercase',
						}}
					> 
							<Episode 
								primary={episode.episode}
								subTitle={episode.name}
							/>
					</BoxWrapper> 
				))}
			</Box>
		</ScrollWrapper>
	)
}
