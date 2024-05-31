// import Footer from '../home/footer'
import Header from '../home/header'
import HeroTitle from './heroTitle'

import Box from '@mui/material/Box'
import { MeetingContainer } from './meetingContainer'
import Pagination from './pagination'



const CastPage = () => {

	return (
		<>
		<Box sx={{
			backgroundColor: '#191d29',
			color: 'white',
			backgroundImage: 'url("/media_asset/home_page/background/Background.png")',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			backgroundRepeat: 'no-repeat',
		}}>
			<Header />

			<Box sx={{ mt: 4, p: 2 }}>
				<HeroTitle />
			</Box>
			<Box>
				<MeetingContainer />
			</Box>

			<Box sx={{ mt: 4, p: 2 }}>
				<Pagination />
			</Box>


			{/* <Footer /> */}

		</Box>
		</>
	)
}
export default CastPage
