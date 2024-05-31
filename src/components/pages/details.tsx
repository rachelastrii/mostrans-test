import Details from '../details'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'


const DetailsPage = () => {

	return (
		<Box sx={{
			backgroundColor: '#191d29',
			color: 'white',

			backgroundImage: 'url("/media_asset/cast_details/Background.png")',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			backgroundRepeat: 'no-repeat',
		}}>
			<Container>
				<Details />
			</Container>
		</Box>
	)
}
export default DetailsPage
