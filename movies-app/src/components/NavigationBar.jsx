import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Constants } from '@utils'

const NavigationBar = function () {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const queryParam = searchParams.get('query')
  const canGoBack = location.key !== 'default'

  const navigateBack = function () {
    navigate(-1)
  }

  const navigateToPath = function (path) {
    if (location.pathname === path) {
      navigate(0)
    } else {
      navigate(path)
    }
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
          <Button
            variant="text"
            onClick={() => {
              navigateToPath('/')
            }}
          >
            Home
          </Button>
          {!Constants.PROD && (
            <Button
              variant="text"
              onClick={() => {
                navigateToPath('/library')
              }}
            >
              Library
            </Button>
          )}
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
