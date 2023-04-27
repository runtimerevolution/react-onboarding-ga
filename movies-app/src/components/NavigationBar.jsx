import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useSearchParams, Link } from 'react-router-dom'

const NavigationBar = function () {
  const [searchParams] = useSearchParams()
  const queryParam = searchParams.get('query')

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Link>
          {queryParam && (
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginLeft: 3 }}
            >
              {queryParam}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavigationBar
