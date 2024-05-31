import { useEffect } from 'react'
import * as characterReducer from '../../store/characterReducer'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import BoxWrapper from '../details/boxWrapper'
import { Cast } from '../home/section/component'

import Box from '@mui/material/Box'


export const MeetingContainer = () => {
	const dispatch = useAppDispatch()
	const { characters } = useAppSelector(state => state.character)

	useEffect(() => {
		dispatch(characterReducer.getCharacters('https://rickandmortyapi.com/api/character'))
	}, [dispatch])


	return (
		<Box sx={{
			display: 'grid',
			gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
			gridGap: 8*2
		}}>
			{characters?.map(cast => (
				<Box key={cast.id}>
					<BoxWrapper 
						padding={1}
						clipPath= 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)'
						gradientDegree={135}
					>
						<Cast key={cast.id} 
							url={cast.image}
							primary={cast.name}
							path={`/cast/${cast.id}`}
						/>
					</BoxWrapper>
				</Box>
			))}
		</Box>
	)
}
