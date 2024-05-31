import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'


const container = {
  maxWidth: 250,
  position: 'relative',
  // background: `linear-gradient(to right, red, purple)`,
  backgroundImage: `linear-gradient(to right, red, purple)`,
  padding: '3px'
}

const child = {
  background: '#222',
  color: 'white',
  padding: '2rem',
}


const DeleteMe = () => {

	return (
		<>


			<Box sx={container}>
				<Box sx={child}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias.
				</Box>
			</Box>

			<div className="module-border-wrap">
				<div className="module">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias.
				</div>
			</div>


		</>
	)
}
export default DeleteMe
