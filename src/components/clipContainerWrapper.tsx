import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useEffect, useState } from 'react'


type Props = {
	containerId: string,
	children?: React.ReactNode,
	step?: number
}
const ClipContainerWrapper = (props: Props) => {
	const { 
		children, 
		containerId,
		step = 300
	} = props

	const [ container, setContainer ] = useState<HTMLElement | null>(null)
	const [ , setScrollLeft ] = useState(0)
	

	console.log(container?.scrollLeft)

	useEffect(() => {
		const castContainer = document.getElementById(containerId)! 
		setContainer(castContainer)
	}, [containerId])



	const moveTo = (x: number) => () => {
		if(!container) return

		container.scrollBy(x, 0)
		setScrollLeft(x)
	}
	

	return (
		<Box sx={{ position: 'relative' }}>

			{/* {!!scrollLeft && ( */}
				<IconButton sx={{ arrowLeftStyle }} onClick={moveTo(-step)} >
					<ArrowLeftIcon />
				</IconButton>
			{/* )} */}

			<IconButton sx={arrowRightStyle} onClick={moveTo(step)} >
				<ArrowRightIcon />
			</IconButton>

			<Box id={containerId} sx={{ display: 'flex', gap: 2, 
				overflowX: 'auto',
				scrollMarginTop: 2
			}}>
				{children}
			</Box>

		</Box>
	)
}
export default ClipContainerWrapper

const arrowLeftStyle = {
	position: 'absolute',
	zIndex: 1,
	top: 'calc(50% - 26px)',
	left: 0,
	// right: 0,
	// width: 20,
	// height: 20,

	border: '10px solid red',

	color: 'green',
	backgroundColor: 'white',
}


const arrowRightStyle = {
	position: 'absolute',
	right: 0,
	top: 'calc(50% - 26px)',
	zIndex: 1,

	color: 'green',
	backgroundColor: 'white',
}

