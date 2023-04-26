import MuiToggleButton from '@mui/material/ToggleButton'
import { styled } from '@mui/material/styles'

const StyledToggleButton = styled(MuiToggleButton)({
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: 'gray',
  },
  '&': {
    color: 'white',
  },
})

export default StyledToggleButton
