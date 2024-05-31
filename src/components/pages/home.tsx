import Home from '../home'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const HomePage = () => {

	return (
		<Box sx={{
			backgroundColor: '#191d29',
			color: 'white',

			backgroundImage: 'url("/media_asset/home_page/background/Background.png")',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			backgroundRepeat: 'no-repeat',
		}}>
			<Container>
				<Home />
			</Container>
		</Box>
	)
}
export default HomePage
