import { useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import InputAdornment from '@mui/material/InputAdornment'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import BoxWrapper from '../details/boxWrapper'

const buttonBackgroundColor = {
	color: 'white',
	backgroundColor: '#15ddeadd',
	'&: hover': {
		backgroundColor: '#15ddea',
	}
}
const searchButtonStyles = {
	borderRadius: 0,
	borderTopLeftRadius: '20px 20px',
	borderBottomLeftRadius: '20px 20px',
	px: 4,
	fontSize: { xs: '10px', sm: '16px' },

	textTransform: 'capitalize',
	...buttonBackgroundColor
}
const inputStyles = {
	fontSize: { xs: '10px', sm: '16px' },

	backgroundColor: '#2d313d',
	color: '#cccccc',
	borderTopRightRadius: '20px 20px',
	borderBottomRightRadius: '20px 20px',
	width: '100%',
}
const menuStyles = {
	...buttonBackgroundColor,
	marginTop: 8,
}

const HeroTitle = () => {
	const [ open, setOpen ] = useState(false)
	const [ anchorEl, setAnchorEl ] = useState<HTMLElement | null>(null)
	const [ searchButtonLabel, setSearchButtonLabel ] = useState('Location')
	const [ searchValue, setSearchValue ] = useState('')


	const closeHandler = () => {
		setOpen(false)		
		setAnchorEl(null)
	}
	const searchButtonClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(evt.currentTarget)
		setOpen(true)
	}
	const menuItemClickHandler = (label: string) => () => {
		closeHandler()
		setSearchButtonLabel(label)
	}

	const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(evt.target.value)
	}

	const handleSearchForm = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		console.log({ searchButtonLabel, searchValue })
	}

	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'flex-start'
		}}>
			<Typography variant='h4' sx={{ 
				color: '#15ddea',
				// fontWeight: 'bold',
				fontSize: { xs: '20px', sm: '40px' },
				mt: 1
			}}>The Cast</Typography>

			<BoxWrapper 
				padding={0} 
				borderRadius={20}
				gradientDegree={180}
				sx={{
					width: { xs: '250px', sm: '400px' }
				}}
			>

				<form onSubmit={handleSearchForm}>
			<Box sx={{ display: 'flex' }}>
				<Button
					variant='contained'
					endIcon={<KeyboardArrowDownIcon />}
					disableElevation
					sx={searchButtonStyles}
					onClick={searchButtonClick}
				>{searchButtonLabel}</Button>

				<InputBase 
					sx={inputStyles}
					placeholder='Search'
					startAdornment={
					<InputAdornment position='start'>
						<SearchIcon sx={{ 
							color: '#bbbbbb',
							ml: 1
						}} />
					</InputAdornment>
					}

					value={searchValue}
					onChange={changeHandler}
				/>
			</Box>
				</form>
			</BoxWrapper>

			<Menu
				open={open}
				anchorEl={anchorEl}
				onClose={closeHandler}
				PaperProps={{
					style: menuStyles,
				}}
			>
				{['characters', 'location', 'episodes'].map((item, index, arr) => (
					<MenuItem key={item} 
						divider={index !== arr.length - 1}
						onClick={menuItemClickHandler(item)}
					>
						<Typography>{item}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	)
}
export default HeroTitle
