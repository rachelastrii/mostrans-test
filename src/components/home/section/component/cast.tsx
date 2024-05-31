import type { SxProps } from '@mui/material'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'

type Props = {
	url: string,
	primary?: string,
	title?: string,
	sx?: SxProps
	path?: string
}
export const Cast = (props: Props) => {
	const { 
		sx={}, 
		url, 
		primary='', 
		title = '',
		path = ''
	} = props

	const navigate = useNavigate()

	return (
			<Box 
				sx={{
					...sx,
					cursor: path ? 'pointer' : 'default'
				}}
				onClick={() => path && navigate(path)}
			>
				<Box sx={{
					// border: '1px solid red',
					display: 'inline-flex',
					// height: { xs: 120, sm: 100 },
					height: 140
				}}>
					<img 
						// src='/images/screenshot.jpg'
						src={url}
						alt='cast url'
						width='100%'
						style={{ borderRadius: 5 }}
						title={title}
					/>
				</Box>
				{!!primary && (
					<Box sx={{ my: 0, }}>
						<Typography sx={{
							color: 'inherit',
							textTransform: 'capitalize',
							fontSize: { xs: 10, sm: 16 },
							fontFamily: { xs: 'custom-medium', sm: 'custom-regular' }
						}}
						>{primary}</Typography>
					</Box>
				)}
			</Box>
	)
}
