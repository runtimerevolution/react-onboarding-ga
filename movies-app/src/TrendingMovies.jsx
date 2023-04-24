import { useState } from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import MuiToggleButton from '@mui/material/ToggleButton'
import { styled } from '@mui/material/styles'

const ToggleButton = styled(MuiToggleButton)({
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: 'gray',
  },
  '&': {
    color: 'white',
  },
})

const TrendingMovies = function () {
  const [timeWindow, setTimeWindow] = useState('day')

  const updateTimeWindow = function (event, newTimeWindow) {
    if (newTimeWindow !== null) {
      setTimeWindow(newTimeWindow)
    }
  }

  return (
    <>
      <TrendingHeader
        timeWindow={timeWindow}
        updateTimeWindow={updateTimeWindow}
      />
    </>
  )
}

const TrendingHeader = function ({ timeWindow, updateTimeWindow }) {
  return (
    <>
      <h2>TMDB Top 10</h2>
      <ToggleButtonGroup
        value={timeWindow}
        exclusive
        onChange={updateTimeWindow}
        aria-label="trending time window"
      >
        <ToggleButton value="day" aria-label="day">
          day
        </ToggleButton>
        <ToggleButton value="week" aria-label="week">
          week
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}

export default TrendingMovies
