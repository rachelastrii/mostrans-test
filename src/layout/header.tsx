import Box from '@mui/material/Box'

const Header = () => {

	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'center',
			mt: 2
		}}>
			<img 
				src='/media_asset/Logo.png'
				alt='/media_asset/Logo.png'
				width={180}
				// height={20}
			/>
		</Box>
	)
}
export default Header
