import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { ToggleButton } from '@mui/material'

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

export default TrendingHeader
