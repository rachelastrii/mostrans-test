import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import * as characterReducer from '../../../../store/characterReducer'
import * as episodeReducer from '../../../../store/episodeReducer'
import * as locationReducer from '../../../../store/locationReducer'

import { Cast } from '../component'
import BoxWrapper from '../../../details/boxWrapper'
import ScrollWrapper from '../../scrollWrapper'

import Box from '@mui/material/Box'

export const MeetingContainer = () => {
	const dispatch = useAppDispatch()
	const { characters } = useAppSelector(state => state.character)

	useEffect(() => {
		dispatch(characterReducer.getCharacters('https://rickandmortyapi.com/api/character'))
		dispatch(episodeReducer.getEpisodes('https://rickandmortyapi.com/api/episode'))
		dispatch(locationReducer.getLocations('https://rickandmortyapi.com/api/location'))
	}, [dispatch])

	return (
		<Box sx={{
			// position: 'relative'
		}}>

		<ScrollWrapper id='meetingContainer'>
			<Box sx={{
				display: 'flex',
				gap: 2,
				overflowX: 'auto'
			}}>

			{characters?.map(cast => (
				<BoxWrapper key={cast.id} 
					padding={1}
					clipPath= 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)'

					sx={{ 
						flexShrink: 0, 
						width: 200 
					}}
				>
					<Cast key={cast.id} 
						url={cast.image}
						primary={cast.name}
						path={`/cast/${cast.id}`}
					/>
				</BoxWrapper>
			))}
			</Box>
		</ScrollWrapper>
		</Box>
	)
}
