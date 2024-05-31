
import Box from '@mui/material/Box'

const Header = () => {

	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'center',
		}}>
			<img 
				src='/media_asset/Logo.png'
				alt='/media_asset/Logo.png'
				width={180}
				style={{ marginTop: '16px' }}
			/>
		</Box>
	)
}
export default Header
