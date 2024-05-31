import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as characterReducer from '../../store/characterReducer'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import EastIcon from '@mui/icons-material/EastRounded'
import WestIcon from '@mui/icons-material/WestRounded'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

const activeIconStyle = {
	border: '1px solid #191d29',
	borderRadius: '50%',
	p: .2,
	backgroundColor: '#15ddea',
	color: '#191d29',
	fontSize: 16,
	cursor: 'pointer'
}

const inActiveIconStyle = {
	...activeIconStyle,
	backgroundColor: 'transparent',
	border: '1px solid grey',
	color: 'grey',
}
const buttonContainerStyle = {
	background: 'linear-gradient(125deg, #15ddea88, #9dfe0088)',
	p: 0.1,
	borderRadius: 20,
}
const buttonStyle = {
	borderRadius: 20,
	color: '#15ddea',
	background: '#191d29',
	cursor: 'default',
	'&:hover' : {
		background: '#191d29',
	}
}

const Pagination = () => {
	const [ page, setPage ] = useState(1)
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { info } = useAppSelector(state => state.character)

	const totalPage = info?.pages || 0

	const prevClickHandler = () => {
		if(page <= 1 ) return
		setPage(oldPage => oldPage - 1)
		navigate(`/cast?page=${page - 1}`)

		if(info?.prev) dispatch(characterReducer.getCharacters(info.prev))
	}
	const nextClickHandler = () => {
		if(page >= totalPage) return
		setPage(oldPage => oldPage + 1)
		navigate(`/cast?page=${page + 1}`)
		
		if(info?.next) dispatch(characterReducer.getCharacters(info.next))
	}

	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 2,
			mb: 4
		}}>
			<Typography>Page</Typography>			
			<WestIcon onClick={prevClickHandler} sx={ page > 1 ? activeIconStyle : inActiveIconStyle} />
			<Box sx={buttonContainerStyle}>
				<Button 
					variant='outlined' 
					sx={buttonStyle}
					disableFocusRipple
					disableRipple
				>{page}</Button>
			</Box>
			<EastIcon onClick={nextClickHandler} sx={activeIconStyle} />
			<Typography>of {totalPage}</Typography>			
		</Box>
	)
}
export default Pagination
