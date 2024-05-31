import Box from '@mui/material/Box'

const Footer = () => {

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
			/>
		</Box>
	)
}
export default Footer
