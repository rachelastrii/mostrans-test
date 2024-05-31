import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const titleStyle = {
	mb: .4,
	opacity: { xs: .9, sm: .8 },
	fontSize: { xs: 10, sm: 16 },
	fontFamily: 'custom-medium'
}
const subTitleStyle = {
	fontSize: { xs: 12, sm: 16 },
	textTransform: 'capitalize',
	fontFamily: 'custom-medium',
	fontWeight: 'bold'
}

type Props = {
	primary: string,
	subTitle: string
}

export const Location = ({ primary, subTitle }: Props) => {

	return (
		<>
			<Box sx={{ m: 1, }}>
				<Typography color='inherit' sx={titleStyle}>{primary}</Typography>
				<Typography color='inherit' sx={subTitleStyle}>{subTitle}</Typography>
			</Box>
		</>
	)
}
