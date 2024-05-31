import { useEffect } from 'react'
import * as characterReducer from '../../store/characterReducer'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import Header from '../home/header'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BoxWrapper from './boxWrapper'
import { useParams } from 'react-router-dom'

	// const section_2_3_items = [
	// 	{
	// 		src: '/media_asset/cast_details/Icons/png/Origin.png',
	// 		status: 'Origin',
	// 		title: character.origin.name,
	// 		icon: '/media_asset/cast_details/Icons/png/Redirect.png',
	// 	},
	// 	{
	// 		src: '/media_asset/cast_details/Icons/png/Location.png',
	// 		status: 'Last Known Location',
	// 		title: character.location.name,
	// 		icon: '/media_asset/cast_details/Icons/png/Redirect.png',
	// 	},
	// ]
const avatarWidth = 200

const Details = () => {
	const { page } = useParams()
	const dispatch = useAppDispatch()
	const { character } = useAppSelector(state => state.character)

	useEffect(() => {
		dispatch(characterReducer
			.getCharacterById(`https://rickandmortyapi.com/api/character/${page}`))
	}, [dispatch, page])

	const section_1_items = [
		{
			src: '/media_asset/cast_details/Icons/png/Status.png',
			status: character.status,
			title: 'Alive'
		},
		{
			src: '/media_asset/cast_details/Icons/png/Species.png',
			status: 'species',
			title: character.species
		},
		{
			src: '/media_asset/cast_details/Icons/png/Gender.png',
			status: 'gender',
			title: character.gender
		},
	]



	return (
		<>
		<Box>
			<Header />

			<Grid container spacing={2} sx={{ p: 1, mt: { xs: 4, sm: 8 } }}>
				<Grid item xs={12} sm={6}>
					<Box id='left-section' sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						mb: { xs: 2, sm: 0 }
					}}>
						<Typography 
							sx={{
								color: '#15ddea',
								fontFamily: 'custom-bold',
								fontSize: { xs: 24, sm: 28 },
								mb: 2
							}}
						>{character.name}</Typography>
						<Box sx={{
							display: 'flex',
							justifyContent: 'space-evenly',
							alignItems: 'center',
						}}>
							<BoxWrapper gradientDegree={135} sx={{
								ml: { xs: 0, sm:  `${avatarWidth / 2 }px` }
							}} 
							>
								<img 
									src={character.image}
									alt={character.image}
									width={avatarWidth}
									height={avatarWidth}
									style={{
										borderRadius: 4,
									}}
								/>
							</BoxWrapper>
							<Box sx={{
								borderRight: '1px solid #9dfe0088',
								height: `${ avatarWidth - avatarWidth / 8 }px`,
								display: { xs: 'none', sm: 'block' },
								ml: `${avatarWidth / 2 }px`
							}} />
						</Box>
					</Box>
				</Grid>

				<Grid item xs={12} sm={6}>

					<Box id='right-section'>
						<Box id='item-1' sx={{
							display: 'flex',
							justifyContent: 'space-between',
							gap: 4
						}}>
							{section_1_items.map(({ src, status, title }) => (
									<BoxWrapper key={title} 
										sx={{ flex: 1 }}
										gradientDegree={
											Math.floor( Math.random() * 360 )
										}
									>
										<Box>
											<Box sx={{ width: 	{ xs: 8*4, sm: 8*6 } }} >
												<img src={src} alt={src} width='100%' />	
											</Box>
											<Typography sx={{ 
												fontSize: { xs: 10, sm: 16 },
												fontFamily: 'custom-regular'
										 	}}>{status}</Typography>
											<Typography sx={{ 
												fontSize: { xs: 20, sm: 24 }, 
												fontFamily: 'custom-medium'
											}}>{title}</Typography>
										</Box>
									</BoxWrapper>
							))}
						</Box>

						<Box id='item-2-3'>
							{/* {section_2_3_items.map( item => (
								<BoxWrapper key={item.title} sx={{ flex: 1, mt: 4 }} gradientDegree={180}>
									<Box key={item.title} >
										<Box sx={{ width: 	{ xs: 8*4, sm: 8*6 } }} >
											<img 
												src={item.src}
												alt={item.src}
												width='100%' 
											/>	
										</Box>
										<Typography sx={{ 
											fontSize: { xs: 10, sm: 16 },
											fontFamily: 'custom-regular'
										}}>{item.status}</Typography>
										<Box sx={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}>
											<Typography sx={{ 
												fontSize: { xs: 20, sm: 24 },
												fontFamily: 'custom-medium'
											}}>{item.title}</Typography>
											<Box sx={{ width: { xs: 8*3, sm: 8*4 }, mr: 2 }} >
												<img 
													src={item.icon}
													alt={item.icon}
													width='100%' 
												/>	
											</Box>
										</Box>
									</Box>
								</BoxWrapper>
							))} */}


								<BoxWrapper sx={{ flex: 1, mt: 4 }} gradientDegree={180}>
									<Box>
										<Box sx={{ width: 	{ xs: 8*4, sm: 8*6 } }} >
											<img 
												src='/media_asset/cast_details/Icons/png/Origin.png'
												alt='/media_asset/cast_details/Icons/png/Origin.png'
												width='100%' 
											/>	
										</Box>
										<Typography sx={{ 
											fontSize: { xs: 10, sm: 16 },
											fontFamily: 'custom-regular'
										}}>Origin</Typography>
										<Box sx={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}>
											<Typography sx={{ 
												fontSize: { xs: 20, sm: 24 },
												fontFamily: 'custom-medium'
											}}>{character.origin.name}</Typography>
											<Box sx={{ width: { xs: 8*3, sm: 8*4 }, mr: 2 }} >
												<img 
													src= '/media_asset/cast_details/Icons/png/Redirect.png'
													alt= '/media_asset/cast_details/Icons/png/Redirect.png'
													width='100%' 
												/>	
											</Box>
										</Box>
									</Box>
								</BoxWrapper>

								<BoxWrapper sx={{ flex: 1, mt: 4 }} gradientDegree={180}>
									<Box>
										<Box sx={{ width: 	{ xs: 8*4, sm: 8*6 } }} >
											<img 
												src='/media_asset/cast_details/Icons/png/Location.png'
												alt='/media_asset/cast_details/Icons/png/Location.png'
												width='100%' 
											/>	
										</Box>
										<Typography sx={{ 
											fontSize: { xs: 10, sm: 16 },
											fontFamily: 'custom-regular'
										}}>Last Known Location</Typography>
										<Box sx={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}>
											<Typography sx={{ 
												fontSize: { xs: 20, sm: 24 },
												fontFamily: 'custom-medium'
											}}>{character.location.name}</Typography>
											<Box sx={{ width: { xs: 8*3, sm: 8*4 }, mr: 2 }} >
												<img 
													src= '/media_asset/cast_details/Icons/png/Redirect.png'
													alt= '/media_asset/cast_details/Icons/png/Redirect.png'
													width='100%' 
												/>	
											</Box>
										</Box>
									</Box>
								</BoxWrapper>


						</Box>

						<Box id='item-4'>
							<BoxWrapper sx={{ mt: 4 }} gradientDegree={180}>
								<Box>
									<Box sx={{ width: 	{ xs: 8*4, sm: 8*6 } }} >
										<img 
											src='/media_asset/cast_details/Icons/png/Episode.png'
											alt='/media_asset/cast_details/Icons/png/Episode.png'
											width='100%' 
										/>	
									</Box>
									<Typography sx={{ 
										fontSize: { xs: 10, sm: 16 },
										fontFamily: 'custom-regular'
									}}>Episode(S)</Typography>
									<Box sx={{
										flex: 1,
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center'
									}}>
										<Box sx={{ 
											fontSize: { xs: 20, sm: 24 },
											fontFamily: 'custom-medium'
										}}>
											<ul>
												<li>Pilot</li>
												<li>Lawnmover Dog</li>
												<li>Anatomy Park</li>
												<li>
													<Box sx={{
														display: 'flex',
														alignItems: 'center',
														fontSize: { xs: 20, sm: 24 } 
													}}>
														<Typography sx={{ fontSize: 'inherit' }}> M. Night Shaym </Typography>
														<Typography component='span' sx={{
															transform: 'rotate(-35deg)',
															fontSize: 'inherit'
														}}>-</Typography>
														<Typography component='span' sx={{ fontSize: 'inherit' }}>Aliens!</Typography>
													</Box>
												</li>
												<li>Meeseeks And Destroy</li>
											</ul>
										</Box>
									</Box>
								</Box>
							</BoxWrapper>

						</Box>
					</Box>
				</Grid>
			</Grid>

		</Box>
		</>
	)
}
export default Details
