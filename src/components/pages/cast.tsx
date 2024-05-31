import Cast from '../cast'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const CastPage = () => {

	return (
		<Box sx={{
			backgroundColor: '#191d29',
			color: 'white',

			backgroundImage: 'url("/media_asset/cast/Background.png")',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			backgroundRepeat: 'no-repeat',
		}}>
			<Container>
				<Cast />
			</Container>
		</Box>
	)
}
export default CastPage
