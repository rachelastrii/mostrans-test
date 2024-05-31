
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'


const fontSize = { xs: 40, sm: 128 }

const greenColor = '#9dfe00'
const cyneColor = '#14d9e5'

const bubbleImageWidthXS = 80
const bubbleImageWidthMD = 200


const HeroTitle = () => {

	return (
		<Box sx={{
			position: 'relative'
		}}>

			<Box sx={{
				mt: 8,
				position: 'relative'
			}} >

				<Box sx={{
					display: { xs: 'none', md: 'inline-flex' },

					position: 'absolute',
					top: 8*4,
					right: 0,
					mr: 7
				}}>
					<img 
						src='/media_asset/home_page/hero/pill.png'
						alt='/media_asset/home_page/hero/pill.png'
						width='100%'
					/>
				</Box>

				<Box sx={{
					// border: '1px solid red',
					display: 'inline-flex',

					width: { xs: bubbleImageWidthXS, md: bubbleImageWidthMD },
					position: 'absolute',
					top: { xs: -bubbleImageWidthXS/2, md: -bubbleImageWidthMD/2 },
					left: { xs: -bubbleImageWidthXS/2, md: -bubbleImageWidthMD/2 },
					ml: { xs: 1, md: 10 }, 
					mt: { xs: 1, md: 5 }, 
				}}>
					<img 
						src='/media_asset/home_page/hero/bubble.png'
						alt='/media_asset/home_page/hero/bubble.png'
						width='100%'
					/>
				</Box>




				<Box sx={{
					// border: '1px solid red',
					display: 'inline-flex',

					width: { xs: 180, md: 300 },
					position: 'absolute',
					top: { xs: 40, md: 200 },
					right: { xs: -10, md: -20 },
				}}>
					<img 
						src='/media_asset/home_page/hero/Gun.png'
						alt='/media_asset/home_page/hero/Gun.png'
						width='100%'
					/>
				</Box>






				<Box sx={{
					border: '1px solid red',
					backgroundImage: `linear-gradient(90deg, #9dfe00, #14d9e5)`,

					position: 'absolute',
					top: '25%',
					width: '80%',
					height: '25%',
					ml: '10%',
					filter: { xs: 'blur(20px)', sm: 'blur(50px)' },
					opacity: .8,
				}} />

				<Box sx={{
					display: 'flex',
					justifyContent: { xs: 'flex-start', sm: 'center' },
					alignItems: 'center',
					gap: 2,
				}}>
					<Typography sx={{
						fontFamily: 'custom-bold',
						textTransform: 'uppercase',
						fontSize,
						fontStyle: 'italic',
					}}>THE</Typography>
					<Box sx={{
						height: fontSize,
						mt: -2
					}}>
						<img 
							src='/media_asset/home_page/hero/portal.png'
							alt='/media_asset/home_page/hero/portal.png'
							height={'100%'}
						/>
					</Box>
					<Typography sx={{
						fontFamily: 'custom-bold',
						fontSize,
						backgroundImage: 'linear-gradient(90deg, #52e97e 0%, #14d9e5)',
						backgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						position: 'relative'
					}}>RICK &</Typography>
				</Box>

			</Box>








			<Box sx={{
				display: 'flex',
				justifyContent: { xs: 'flex-start', sm: 'center' },
				alignItems: 'center',
				ml: { xs: 0, md: -20 }
			}}>
				<Typography sx={{
					fontFamily: 'custom-bold',
					textTransform: 'uppercase',
					backgroundImage: `linear-gradient(90deg, ${greenColor} 0%, #51ea7e)`,
					backgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					fontSize,
					
				}}>Morty </Typography>

				<Typography sx={{
					fontFamily: 'custom-bold',
					textTransform: 'uppercase',
					fontStyle: 'italic',
					fontSize,

					
				}}>Wiki</Typography>

				{/* <Box sx={{
					// position: 'absolute',
					// width: '100%',
					// right: { xs: -8*6, sm: 8*8 }
				}}>
					<img 
						src='/media_asset/home_page/hero/Gun.png'
						alt='/media_asset/home_page/hero/Gun.png'
						// width='100%'
						width={200}
					/>
				</Box> */}
			</Box>

			<Box sx={{
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'row' },
				justifyContent: 'center',
				alignItems: { xs: 'flex-start', sm: 'center' },
				gap: { xs: 3, sm: 6 },
			}}>
				<Box sx={{
					ml: { xs: 0, sm: 8 },
					order: { xs: 1, sm: 0 }
				}}>
					<Button  sx={{
						textTransform: 'capitalize',
						color: 'white',
						backgroundImage: `linear-gradient(135deg, ${greenColor}, #14d9e5)`,
						borderRadius: '20px',
						px: 2,
						whiteSpace: 'nowrap'
					}}
					startIcon={<PlayCircleOutlineIcon />}
					onClick={() => alert('watch What ?')}
					>Watch Now</Button>
				</Box>

				<Typography variant='caption' sx={{
					color: cyneColor,
					maxWidth: 300
				}}>
				Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate dimensions.
				</Typography>
			</Box>

		</Box>
	)
}
export default HeroTitle
