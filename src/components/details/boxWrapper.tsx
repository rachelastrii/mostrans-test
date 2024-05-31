import type { SxProps } from '@mui/material'
import Box from '@mui/material/Box'

type Props = {
	children?: React.ReactNode,
	sx?: SxProps,
	borderWidth?: number,
	padding?: number,
	backgroundColor?: string | number,
	borderRadius?: number,
	gradientColors?: string[] | number[],
	gradientDegree?: number,
	clipPath?: string 
}
const BoxWrapper = (props: Props) => {

	const {
		children,
		sx={},
		borderWidth = .14,
		padding = 2,
		backgroundColor = '#191d29',
		borderRadius = 2,
		gradientColors = [ '#15ddea88', '#9dfe0088' ],
		gradientDegree = 0,
		clipPath = '' 					// clipPath= 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)'
	} = props

	return (
		<Box sx={{
			...sx,
		}}>
			<Box sx={{
				backgroundImage: `linear-gradient(${gradientDegree}deg, ${[...gradientColors]})`,
				p: borderWidth,
				borderRadius,

				clipPath, 				// clipPath= 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)'
			}}>

				<Box sx={{ 
					display: 'flex',  
					backgroundColor,
					padding,
					borderRadius,

					clipPath,
				}}>
					<Box sx={{ flex: 1 }}>
						{children}
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
export default BoxWrapper
