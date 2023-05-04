import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const NavigationBar = function () {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const queryParam = searchParams.get('query')
  const canGoBack = location.key !== 'default'
  const isHome = location.pathname === '/'

  const navigateBack = function () {
    navigate(-1)
  }

  const navigateHome = function () {
    navigate('/')
  }

  const navigateLibrary = function () {
    navigate('/library')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {canGoBack && (
            <Button
              variant="outlined"
              sx={{ marginRight: '30px' }}
              onClick={navigateBack}
            >
              Back
            </Button>
          )}
          {!isHome && (
            <Button variant="text" onClick={navigateHome}>
              Home
            </Button>
          )}
          <Button variant="text" onClick={navigateLibrary}>
            Library
          </Button>
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
